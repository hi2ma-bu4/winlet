// src/WindowManager.ts

import { defaultConfig } from "../const/config";
import { WinLetError } from "../const/errors";
import { ContextMenuItem, GlobalConfigOptions, IWindow, LIBRARY_NAME, MenuItem, PopupButton, PopupButtonPreset, PopupOptions, PopupResult, TabItem, Theme, TIMEOUT_RESULT, WindowOptions } from "../const/types";
import WinLetBaseClass from "../libs/baseclass";
import Utils from "../libs/utils";
import styleData from "../style/styles";
import { darkTheme } from "../style/themes/dark";
import { defaultTheme } from "../style/themes/default";
import { highContrastTheme } from "../style/themes/high-contrast";
import WinLetWindow from "./window";

export default class WindowManager extends WinLetBaseClass {
	public container: HTMLElement | null = null;
	private workspaceEl: HTMLElement | null = null;
	private static allWindows = new Map<string, WinLetWindow>();
	private windows = new Map<string, WinLetWindow>();
	// z-indexを通常と最前面で分離
	private zIndexCounter = 1000;
	private zIndexCounterOnTop = 50000;
	private activeWindow: WinLetWindow | null = null;
	private contextMenuEl: HTMLElement | null = null;
	private _isInitialized = false;

	private globalConfig: GlobalConfigOptions;

	private lastAutoPosition: { x: number; y: number } | null = null;
	private lastPopupPosition: { x: number; y: number } | null = null;
	private readonly CASCADE_OFFSET = 30;

	public draggingTabInfo: { sourceWindowId: string } | null = null;

	private taskbarEl: HTMLElement | null = null;
	private themes = new Map<string, Theme>();
	private activeTheme: Theme | null = null;
	private boundTabPressHandler: ((e: KeyboardEvent) => void) | null = null;

	private bootstrapThemeObserver: MutationObserver | null = null;
	private prefersDarkMatcher: MediaQueryList | null = null;
	private prefersColorSchemeListener: ((e: MediaQueryListEvent) => void) | null = null;

	private highContrastMatcher: MediaQueryList | null = null;
	private highContrastListener: ((e: MediaQueryListEvent) => void) | null = null;

	constructor(initialConfig: GlobalConfigOptions) {
		super();
		this.globalConfig = initialConfig;
		this.registerTheme(defaultTheme);
		this.registerTheme(darkTheme);
		this.registerTheme(highContrastTheme);
	}

	/**
	 * ライブラリが初期化済みかどうかを取得します。
	 */
	public get isInitialized(): boolean {
		return this._isInitialized;
	}

	public applyGlobalConfig(options: GlobalConfigOptions) {
		Object.assign(this.globalConfig, options);
		// アニメーション設定をコンテナクラスに反映
		if (this.container) {
			this.container.classList.toggle(`${LIBRARY_NAME}-animations-disabled`, !this.globalConfig.enableAnimations);
			this.container.classList.toggle(`${LIBRARY_NAME}-debug-mode-enabled`, !!this.globalConfig.enableDebugMode);

			// タスクバーの有効・無効切り替えとレイアウト更新
			if (this.globalConfig.enableTaskbar) {
				if (!this.taskbarEl) {
					// タスクバーがなければ作成
					this.createTaskbar();
				}
				this.updateTaskbarLayout();
			} else if (this.taskbarEl) {
				// 無効化された場合
				this.taskbarEl.remove();
				this.taskbarEl = null;
				// flex-directionをリセット
				this.container.style.flexDirection = "";
			}
		}

		// Bootstrapテーマ監視の開始/停止
		if (this.globalConfig.autoDetectBootstrapTheme) {
			this.startBootstrapThemeObserver();
		} else {
			this.stopBootstrapThemeObserver();
		}
	}

	public getGlobalConfig(): GlobalConfigOptions {
		return this.globalConfig;
	}

	public init(): void {
		if (this._isInitialized) {
			return;
		}

		let parentEl: HTMLElement | null = null;
		if (typeof this.globalConfig.container === "string") {
			parentEl = document.querySelector<HTMLElement>(this.globalConfig.container);
			if (!parentEl) {
				throw new WinLetError(`WinLet: The specified container "${this.globalConfig.container}" was not found.`);
			}
		} else if (this.globalConfig.container instanceof HTMLElement) {
			parentEl = this.globalConfig.container;
		}

		// 親が指定されていない場合は、デフォルトでbodyに設定
		if (!parentEl) {
			if (!document.body) {
				throw new WinLetError("Cannot initialize before document.body is ready. Please call WinLet.init() after DOMContentLoaded.");
			}
			parentEl = document.body;
		}

		if (!document.getElementById(`${LIBRARY_NAME}-styles`)) {
			const styleTag = document.createElement("style");
			styleTag.id = `${LIBRARY_NAME}-styles`;
			styleTag.innerHTML = this.getStyleData();
			document.head.appendChild(styleTag);
		}
		let containerEl = parentEl.querySelector<HTMLElement>(`.${LIBRARY_NAME}-container`);
		if (!containerEl) {
			containerEl = document.createElement("div");
			containerEl.className = `${LIBRARY_NAME}-container`;
			parentEl.appendChild(containerEl);
		}
		this.container = containerEl;

		this.workspaceEl = document.createElement("div");
		this.workspaceEl.className = `${LIBRARY_NAME}-workspace`;
		this.container.appendChild(this.workspaceEl);

		// 初期設定を適用
		this.applyGlobalConfig(this.globalConfig);

		if (parentEl !== document.body) {
			this.container.classList.add(`${LIBRARY_NAME}-is-nested`);

			// 親がポジショニングコンテキストとして機能できることを確認
			const computedStyle = window.getComputedStyle(parentEl);
			if (computedStyle.position === "static") {
				parentEl.style.position = "relative";
			}
		}

		if (this.globalConfig.enableTaskbar) {
			if (!this.taskbarEl) {
				// タスクバーがなければ作成
				this.createTaskbar();
			}
		}

		if (this.globalConfig.theme) {
			this.setTheme(this.globalConfig.theme);
		} else {
			this.setTheme("default");
		}

		this.updateVirtualization();

		window.addEventListener("blur", () =>
			// 次のイベントサイクルでアクティブな要素を取得
			requestAnimationFrame(() => {
				const activeEl = document.activeElement;
				// フォーカスがiframeに移った場合
				if (activeEl?.tagName === "IFRAME") {
					// そのiframeがWinLetのウィンドウ内にあるか探索
					const winEl = (activeEl as HTMLElement).closest<HTMLElement>(`.${LIBRARY_NAME}-window`);
					if (winEl) {
						const win = this.windows.get(winEl.id);
						// 対象のウィンドウが存在し、まだアクティブでなければフォーカスする
						if (win && this.activeWindow !== win) {
							win.focus();
						}
					}
				}
			})
		);
		document.addEventListener(
			"pointerdown",
			() =>
				requestAnimationFrame(() => {
					const activeEl = document.activeElement;
					if (activeEl?.tagName === "IFRAME") {
						const winEl = (activeEl as HTMLElement).closest<HTMLElement>(`.${LIBRARY_NAME}-window`);
						if (winEl) {
							const win = this.windows.get(winEl.id);
							if (win && this.activeWindow !== win) {
								win.focus();
							}
						}
					}
				}),
			true
		);

		// ウィンドウ外クリックでblurさせる処理を追加
		document.addEventListener("pointerdown", (e: PointerEvent) => {
			// e.targetがHTMLElementでない場合や、アクティブなウィンドウがない場合は何もしない
			if (!(e.target instanceof HTMLElement) || !this.activeWindow || this.activeWindow.options.windowOptions.modal) {
				return;
			}

			// クリックされた場所がウィンドウまたはコンテキストメニューの内側かどうかを判定
			const clickedWindow = e.target.closest(`.${LIBRARY_NAME}-window`);
			const clickedContextMenu = e.target.closest(`.${LIBRARY_NAME}-context-menu`);
			const clickedTaskbar = e.target.closest(`.${LIBRARY_NAME}-taskbar`);

			// ウィンドウやコンテキストメニューの外側がクリックされた場合
			if (!clickedWindow && !clickedContextMenu && !clickedTaskbar) {
				// アクティブなウィンドウのフォーカスを外す
				const active = this.activeWindow;
				this.activeWindow = null;
				active.blur();
			}
		});

		document.addEventListener("click", () => this.hideContextMenu());

		window.addEventListener("message", (event) => {
			// メッセージの形式を検証
			if (event.data && event.data.type === "winlet:createWindow" && typeof event.data.options === "object") {
				// メッセージの送信元が管理下のiframeか検証（セキュリティ対策）
				let isSourceValid = false;
				let sourceWindow: WinLetWindow | null = null;
				for (const win of this.windows.values()) {
					const iframe = win.el.querySelector("iframe");
					if (iframe && iframe.contentWindow === event.source) {
						isSourceValid = true;
						// メッセージの送信元ウィンドウを特定
						sourceWindow = win;
						break;
					}
				}

				if (isSourceValid) {
					// 送信元ウィンドウ(sourceWindow)が存在すれば、それは親ウィンドウであり、
					// その中に新しいウィンドウを作成する。
					if (sourceWindow) {
						// iframeの親ウィンドウのcreateWindowを呼び出す
						sourceWindow.createWindow(event.data.options);
					} else {
						// 通常のトップレベルでのウィンドウ作成
						this.createWindow(event.data.options);
					}
				} else {
					console.warn("WinLet: Untrusted source attempted to create a window.", event.origin);
				}
			}
		});

		this._isInitialized = true;
		this.setupShortcutListeners();

		// タブ分離機能のためのグローバルなD&Dリスナー
		this.workspaceEl!.addEventListener("dragover", (e) => {
			if (e.dataTransfer?.types.includes("application/winlet-tab")) {
				e.preventDefault();
			}
		});

		this.workspaceEl!.addEventListener("drop", (e) => {
			// ドロップ先がウィンドウやタブバーの中なら何もしない
			const targetEl = e.target as HTMLElement;
			if (targetEl.closest(`.${LIBRARY_NAME}-window`)) {
				return;
			}
			e.preventDefault();

			const tabDataJSON = e.dataTransfer?.getData("application/winlet-tab");
			const sourceWindowId = e.dataTransfer?.getData("application/winlet-source-window-id");
			const sourceTabId = e.dataTransfer?.getData("text/plain");

			if (tabDataJSON && sourceWindowId && sourceTabId) {
				const sourceWindow = this.windows.get(sourceWindowId);
				if (!sourceWindow || !sourceWindow.options.tabOptions.detachable) return;

				const tabData: TabItem = JSON.parse(tabDataJSON);
				const newTab: TabItem = {
					title: tabData.title,
					content: tabData.content,
				};

				const mergedWindowOptions = Utils.deepMerge(Utils.deepCopy(sourceWindow.options), {
					tabs: [newTab],
					x: e.clientX,
					y: e.clientY,
					width: sourceWindow.getSize().width,
					height: sourceWindow.getSize().height,
				});

				// 新しいウィンドウを作成
				this.createWindow(mergedWindowOptions);

				// 元のウィンドウからタブを削除
				sourceWindow.closeTab(parseInt(sourceTabId, 10));
			}
		});
	}

	// ショートカットキーのリスナーを統合
	private setupShortcutListeners() {
		document.addEventListener(
			"keydown",
			(e) => {
				// --- 1. グローバルショートカット (ウィンドウ切り替え) ---
				if (this.globalConfig.windowSwitchShortcut) {
					const shortcut = this.parseShortcut(this.globalConfig.windowSwitchShortcut);

					if (e.key.toLowerCase() === shortcut.key.toLowerCase() && e.ctrlKey === shortcut.ctrl && e.altKey === shortcut.alt && e.shiftKey === shortcut.shift) {
						e.preventDefault();
						const windows = Array.from(this.windows.values());

						const currentIndex = this.activeWindow ? windows.findIndex((w) => w === this.activeWindow) : -1;
						const nextIndex = (currentIndex + 1) % windows.length;

						const win = windows[nextIndex];
						if (win.state === "minimized") {
							win.restore();
						}
						win.focus();
						return;
					}
				}

				// --- 2. ウィンドウ固有のショートカット ---
				const targetWindow = this.activeWindow;

				// ターゲットウィンドウがなければ何もしない
				if (!targetWindow || !targetWindow.options.enableShortcuts) {
					return;
				}

				// --- 3. タブ切り替えショートカット (Ctrl+Shift+[1-9]) ---
				if (e.ctrlKey && e.shiftKey && (targetWindow.options.tabs?.length ?? 0) > 0) {
					// Shiftキーの影響を受けない e.code で判定する
					if (e.code.startsWith("Digit")) {
						e.preventDefault();
						e.stopPropagation();

						const keyNum = parseInt(e.code.replace("Digit", ""), 10);

						const tabs = targetWindow.getTabs();
						const numTabs = tabs.length;
						let tabIndex = -1;

						if (keyNum >= 1 && keyNum <= 8) {
							tabIndex = keyNum - 1;
						} else if (keyNum === 9) {
							tabIndex = numTabs - 1;
						}

						if (tabIndex >= 0 && tabIndex < numTabs) {
							targetWindow.activateTab(tabIndex);
						}
						return; // 他のショートカットと重複しないようにreturn
					}
				}

				// --- 4. ショートカットキーを検索して実行 ---
				const findAndExecShortcut = (menuItems: MenuItem[]) => {
					for (const item of menuItems) {
						if (item.shortcut) {
							const shortcut = this.parseShortcut(item.shortcut);
							if (e.key.toUpperCase() === shortcut.key.toUpperCase() && e.ctrlKey === shortcut.ctrl && e.altKey === shortcut.alt && e.shiftKey === shortcut.shift) {
								e.preventDefault();
								e.stopPropagation();
								item.action?.(targetWindow!);
								return true; // 実行したら探索終了
							}
						}
						if (item.items && findAndExecShortcut(item.items)) {
							return true;
						}
					}
					return false;
				};

				findAndExecShortcut(targetWindow.options.menu);
			},
			{ passive: false }
		);
	}

	// 未初期化の場合に自動でinitを呼び出すヘルパー
	private ensureInitialized(): void {
		if (!this._isInitialized) {
			this.init();
		}
	}

	/**
	 * スタイルシートを取得
	 */
	private getStyleData() {
		return this.replaceStringVariable(styleData);
	}

	/**
	 * 変数置換
	 */
	private replaceStringVariable(str: string) {
		return str.replace(/\$\[(\w+)\]/g, (a, p) => {
			switch (p) {
				case "prefix":
					return LIBRARY_NAME;
			}
			return p;
		});
	}

	public createWindow(options: WindowOptions): WinLetWindow {
		this.ensureInitialized();

		const ifExists = options.ifExists ?? "focus";

		if (options.id && ifExists !== "create") {
			const existingWindow = this.getWindow(options.id);
			if (existingWindow) {
				if (ifExists === "prevent") {
					return existingWindow; // 何もせず既存インスタンスを返す
				}
				if (ifExists === "focus") {
					if (existingWindow.state === "minimized") {
						existingWindow.restore();
					}
					existingWindow.focus();
					return existingWindow; // フォーカスして既存インスタンスを返す
				}
			}
		}

		const creationOptions: Required<WindowOptions> = Utils.deepMerge(Utils.deepCopy(defaultConfig), options);
		if (creationOptions.x === "auto" || creationOptions.y === "auto") {
			const winWidth = creationOptions.width;
			const winHeight = creationOptions.height;
			const containerRect = this.workspaceEl!.getBoundingClientRect();

			let nextX: number;
			let nextY: number;

			if (this.lastAutoPosition === null) {
				nextX = 0;
				nextY = 0;
			} else {
				// 右下へカスケード
				nextX = this.lastAutoPosition.x + this.CASCADE_OFFSET;
				nextY = this.lastAutoPosition.y + this.CASCADE_OFFSET;
			}

			// はみ出しチェックとリセット
			if (nextX + winWidth > containerRect.width) {
				nextX = 0;
			}
			if (nextY + winHeight > containerRect.height) {
				nextY = 0;
			}

			// 計算結果をオプションに反映
			creationOptions.x = nextX;
			creationOptions.y = nextY;

			// 次回のために位置を保存
			this.lastAutoPosition = { x: nextX, y: nextY };
		}

		const win = new WinLetWindow(creationOptions, this);
		this.windows.set(win.id, win);
		WindowManager.allWindows.set(win.id, win);
		this.workspaceEl!.appendChild(win.el);

		if (this.taskbarEl) {
			this.createTaskbarItem(win);
		}

		win.setPosition(creationOptions.x, creationOptions.y);
		if (creationOptions.windowOptions.focus) {
			this.focusWindow(win);
			win.focus();
		} else {
			win.el.style.zIndex = `${(win.options.windowOptions.alwaysOnTop ? this.zIndexCounterOnTop : this.zIndexCounter) - 1}`;
			this.updateVirtualization();
			win.updateDebugOverlay();
		}
		return win;
	}

	public popup(options: PopupOptions): WinLetWindow {
		this.ensureInitialized();
		let buttons: PopupButton[];
		const buttonPresets: { [key in PopupButtonPreset]: PopupButton[] } = {
			Ok: [{ text: "OK", value: 1 }],
			OkCancel: [
				{ text: "OK", value: 1 },
				{ text: "Cancel", value: 2 },
			],
			Yes: [{ text: "Yes", value: 6 }],
			YesNo: [
				{ text: "Yes", value: 6 },
				{ text: "No", value: 7 },
			],
			YesNoCancel: [
				{ text: "Yes", value: 6 },
				{ text: "No", value: 7 },
				{ text: "Cancel", value: 2 },
			],
			Retry: [{ text: "Retry", value: 4 }],
			RetryCancel: [
				{ text: "Retry", value: 4 },
				{ text: "Cancel", value: 2 },
			],
			AbortRetryIgnore: [
				{ text: "Abort", value: 3 },
				{ text: "Retry", value: 4 },
				{ text: "Ignore", value: 5 },
			],
		};
		if (Array.isArray(options.buttons)) {
			buttons = options.buttons;
		} else {
			buttons = buttonPresets[options.buttons || "Ok"] || buttonPresets.Ok;
		}

		let timeoutId: number | null = null;
		const closeCallback = (result: PopupResult) => {
			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = null;
			try {
				options.onClose?.(result);
			} catch (e) {
				console.error(e);
			}
		};

		const messageHTML = `<div class="${LIBRARY_NAME}-popup-message">${Utils.sanitizeHTML(options.message)}</div>`;
		const buttonsHTML = buttons.map((btn, index) => `<input class="${LIBRARY_NAME}-popup-button" data-index="${index}" type="button" value="${Utils.sanitizeHTML(btn.text)}" role="button"/>`).join("");
		const contentHTML = `${messageHTML}<div class="${LIBRARY_NAME}-popup-buttons" role="spinbutton">${buttonsHTML}</div>`;

		const winOptions: WindowOptions = {
			id: Utils.generateId(`${LIBRARY_NAME}-popup`),
			title: options.title || "",
			icon: options.icon,
			virtualizable: false,
			windowOptions: {
				resizableX: false,
				resizableY: false,
				movable: true,
				closable: true,
				minimizable: false,
				maximizable: false,
				maximizableOnDblClick: false,
				modal: options.modal ?? true,
				alwaysOnTop: options.alwaysOnTop ?? false,
				focus: options.focus ?? true,
			},
			enableShortcuts: false,
			content: { html: contentHTML },
			_isPopup: true,
		};
		if (options.onFocus) winOptions.onFocus = options.onFocus;
		if (options.onBlur) winOptions.onBlur = options.onBlur;

		if (options.autoWidth) {
			const temp = document.createElement("span");
			temp.style.visibility = "hidden";
			temp.style.position = "absolute";
			temp.style.whiteSpace = "pre";
			temp.className = `${LIBRARY_NAME}-popup-message`;
			temp.innerHTML = Utils.sanitizeHTML(options.message);
			this.workspaceEl?.appendChild(temp);
			winOptions.width = temp.offsetWidth + 80; // メッセージ幅 + パディング
			this.workspaceEl?.removeChild(temp);
		} else {
			winOptions.width = 300;
		}
		winOptions.height = 150;

		winOptions.x = "center";
		winOptions.y = "center";

		const win = this.createWindow(winOptions);
		// 計算が面倒なので前回1回分のみで判断
		let winPosition = win.getPosition();
		if (this.lastPopupPosition && this.lastPopupPosition.x === winPosition.x && this.lastPopupPosition.y === winPosition.y) {
			win.setPosition(this.lastPopupPosition.x + this.CASCADE_OFFSET, this.lastPopupPosition.y + this.CASCADE_OFFSET);
			winPosition = win.getPosition();
		}
		this.lastPopupPosition = winPosition;
		win.popupCloseCallback = closeCallback;

		win.el.querySelectorAll<HTMLButtonElement>(`.${LIBRARY_NAME}-popup-button`).forEach((button) => {
			button.addEventListener("click", () => {
				const index = parseInt(button.dataset.index!, 10);
				const result = buttons[index].value;
				closeCallback(result);
				win.close();
			});
		});

		if (options.timeout && options.timeout > 0) {
			timeoutId = window.setTimeout(() => {
				if (this.windows.has(win.id)) {
					closeCallback(TIMEOUT_RESULT);
					win.close();
				}
			}, options.timeout);
		}
		return win;
	}

	public popupAsync(options: PopupOptions): Promise<PopupResult> {
		const opt = Utils.deepCopy(options);
		return new Promise((resolve) => {
			const tmpOnClose = opt.onClose;
			opt.onClose = (result) => {
				tmpOnClose?.(result);
				resolve(result);
			};
			this.popup(opt);
		});
	}

	public destroyWindow(id: string): void {
		this.ensureInitialized();
		const win = this.windows.get(id);
		if (win) {
			if (win.options._taskbarItem) {
				win.options._taskbarItem.remove();
			}
			if (win.options.windowOptions.modal) {
				this.deactivateFocusTrap();
			}

			win.el.remove();
			this.windows.delete(id);
			WindowManager.allWindows.delete(id);
			if (this.activeWindow === win) {
				this.activeWindow = null;
				const nextWin = Array.from(this.windows.values()).pop();
				if (nextWin) this.focusWindow(nextWin);
			}
			// ウィンドウ破棄後に仮想化状態を更新
			this.updateVirtualization();
		}
	}

	public focusWindow(win: WinLetWindow): void {
		this.ensureInitialized();
		if (this.activeWindow === win && !win.options.windowOptions.modal) return;

		// 自身が管理する他のウィンドウをぼかす
		this.activeWindow?.blur();

		// モーダルかつフォーカストラップ有効ならトラップ開始
		if (win.options.windowOptions.modal && this.globalConfig.enableFocusTrapping) {
			this.activateFocusTrap(win);
		} else {
			// そうでなければ既存のトラップは解除
			this.deactivateFocusTrap();
		}

		this.activeWindow = win;
		win.el.style.zIndex = `${win.options.windowOptions.alwaysOnTop ? ++this.zIndexCounterOnTop : ++this.zIndexCounter}`;

		this.windows.forEach((w) => w.options._taskbarItem?.classList.remove(`${LIBRARY_NAME}-active`));
		win.options._taskbarItem?.classList.add(`${LIBRARY_NAME}-active`);
		// ウィンドウのフォーカス、移動、リサイズ時に仮想化状態を即時更新
		this.updateVirtualization();

		// focus()はWindowクラス側で呼ばれるので不要
	}

	public getWindow(id: string): WinLetWindow | undefined {
		this.ensureInitialized();
		return this.windows.get(id);
	}

	public getWindowFromElement(element: HTMLElement): WinLetWindow | undefined {
		this.ensureInitialized();
		const winEl = element.closest<HTMLElement>(`.${LIBRARY_NAME}-window`);
		if (winEl?.id) {
			return WindowManager.allWindows.get(winEl.id);
		}
		return undefined;
	}

	public getActiveWindow(): WinLetWindow | null {
		this.ensureInitialized();
		return this.activeWindow;
	}

	public onTabDragStart(sourceWindowId: string): void {
		this.workspaceEl?.classList.add(`${LIBRARY_NAME}-is-tab-dragging`);
		this.draggingTabInfo = { sourceWindowId };
	}

	public onTabDragEnd(): void {
		this.workspaceEl?.classList.remove(`${LIBRARY_NAME}-is-tab-dragging`);
		this.draggingTabInfo = null;
	}

	public showContextMenu(x: number, y: number, menuItems: ContextMenuItem[], contextWindow: IWindow): void {
		this.ensureInitialized();
		this.hideContextMenu();

		this.contextMenuEl = document.createElement("ul");
		this.contextMenuEl.className = `${LIBRARY_NAME}-context-menu`;

		menuItems.forEach((itemData) => {
			const itemEl = document.createElement("li");
			if (itemData.separator) {
				itemEl.className = `${LIBRARY_NAME}-separator`;
			} else {
				itemEl.textContent = itemData.name ?? "";
				itemEl.addEventListener("click", (e) => {
					e.stopPropagation();
					itemData.action?.(contextWindow);
					this.hideContextMenu();
				});
			}
			this.contextMenuEl!.appendChild(itemEl);
		});

		this.workspaceEl!.appendChild(this.contextMenuEl);

		const { offsetWidth: menuWidth, offsetHeight: menuHeight } = this.contextMenuEl;
		const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

		this.contextMenuEl.style.left = x + menuWidth > screenWidth ? `${screenWidth - menuWidth}px` : `${x}px`;
		this.contextMenuEl.style.top = y + menuHeight > screenHeight ? `${screenHeight - menuHeight}px` : `${y}px`;
	}

	public hideContextMenu(): void {
		this.contextMenuEl?.remove();
		this.contextMenuEl = null;
	}

	public registerTheme(theme: Theme): void {
		this.themes.set(theme.name, theme);
	}

	public getRegisteredThemes(): string[] {
		return Array.from(this.themes.keys());
	}

	public setTheme(theme: string | Theme): void {
		const themeObj = typeof theme === "string" ? this.themes.get(theme.toLowerCase()) : theme;
		if (!themeObj) {
			console.warn(`WinLet: Theme "${theme}" not found.`);
			return;
		}
		if (!this.container) {
			console.warn("WinLet: Container not found.");
			return;
		}

		if (this.activeTheme) {
			for (const [key, value] of Object.entries(this.activeTheme.variables)) {
				if (!(key in themeObj.variables)) {
					this.container.style.removeProperty(this.replaceStringVariable(key));
				}
			}
		}

		this.activeTheme = themeObj;
		for (const [key, value] of Object.entries(themeObj.variables)) {
			this.container.style.setProperty(this.replaceStringVariable(key), this.replaceStringVariable(value));
		}
	}

	public getTheme(): Theme | null {
		return this.activeTheme;
	}

	private createTaskbar(): void {
		if (!this.container) return;
		this.taskbarEl = document.createElement("div");
		this.taskbarEl.className = `${LIBRARY_NAME}-taskbar ${LIBRARY_NAME}-us-none`;
		this.updateTaskbarLayout();
		this.container.appendChild(this.taskbarEl);
	}

	private updateTaskbarLayout(): void {
		if (!this.taskbarEl || !this.container) return;

		const taskbarOpts = this.globalConfig.taskbar || {};
		const position = taskbarOpts.position || "bottom";

		switch (position) {
			case "top":
			case "bottom":
			case "left":
			case "right":
				break;
			default:
				throw new WinLetError(`Invalid taskbar position: ${position}`);
		}

		// クラスを一度リセット
		this.taskbarEl.className = `${LIBRARY_NAME}-taskbar ${LIBRARY_NAME}-us-none`;

		// 位置クラスを追加
		this.taskbarEl.classList.add(`${LIBRARY_NAME}-taskbar-${position}`);

		if (!this.taskbarEl.isConnected) {
			this.container.appendChild(this.taskbarEl);
		}

		this.container.style.flexDirection = "";
		this.taskbarEl.style.order = "";
		if (this.workspaceEl) {
			this.workspaceEl.style.order = "";
		}

		this.container.style.paddingTop = "0";
		this.container.style.paddingBottom = "0";
		this.container.style.paddingLeft = "0";
		this.container.style.paddingRight = "0";

		// getComputedStyleで実際のタスクバーサイズを取得
		const computedStyle = window.getComputedStyle(this.taskbarEl);
		const taskbarHeight = computedStyle.height;
		const taskbarWidth = computedStyle.width;

		switch (position) {
			case "top":
				this.container.style.paddingTop = taskbarHeight;
				this.container.style.flexDirection = "column-reverse";
				this.taskbarEl.style.order = "1";
				if (this.workspaceEl) this.workspaceEl.style.order = "2";
				break;
			case "bottom":
				this.container.style.paddingBottom = taskbarHeight;
				this.container.style.flexDirection = "column";
				this.taskbarEl.style.order = "2";
				if (this.workspaceEl) this.workspaceEl.style.order = "1";
				break;
			case "left":
				this.container.style.paddingLeft = taskbarWidth;
				this.container.style.flexDirection = "row-reverse";
				this.taskbarEl.style.order = "1";
				if (this.workspaceEl) this.workspaceEl.style.order = "2";
				break;
			case "right":
				this.container.style.paddingRight = taskbarWidth;
				this.container.style.flexDirection = "row";
				this.taskbarEl.style.order = "2";
				if (this.workspaceEl) this.workspaceEl.style.order = "1";
				break;
		}
	}

	private createTaskbarItem(win: WinLetWindow): void {
		if (!this.taskbarEl) return;
		const item = document.createElement("div");
		item.className = `${LIBRARY_NAME}-taskbar-item`;
		item.textContent = win.getTitle();
		item.title = win.getTitle();
		item.dataset.windowId = win.id;

		this.updateTaskbarItemContent(item, win);

		item.addEventListener("click", () => {
			if (win.state === "minimized") {
				win.restore();
			} else {
				if (this.activeWindow === win) {
					win.minimize();
				} else {
					win.focus();
				}
			}
		});

		win.options._taskbarItem = item;
		this.taskbarEl.appendChild(item);
	}

	private updateTaskbarItemContent(item: HTMLElement, win: WinLetWindow) {
		const { icon, taskbarOptions } = win.options;
		item.innerHTML = ""; // Clear existing content
		item.title = win.getTitle(); // Always set tooltip

		const showIconOnly = taskbarOptions?.showIconOnly && icon;

		item.classList.toggle(`${LIBRARY_NAME}-icon-only`, !!showIconOnly);

		if (showIconOnly) {
			const iconEl = document.createElement("div");
			iconEl.className = `${LIBRARY_NAME}-taskbar-item-icon`;
			if (win.isFontAwesome(icon)) {
				const i = document.createElement("i");
				i.className = icon;
				iconEl.appendChild(i);
			} else {
				const img = document.createElement("img");
				img.src = icon;
				img.alt = win.getTitle();
				iconEl.appendChild(img);
			}
			item.appendChild(iconEl);
		} else {
			item.textContent = win.getTitle();
		}
	}

	public updateTaskbarItem(win: WinLetWindow, state: "minimized" | "restored" | "titleChanged" | "iconChanged" | "virtualized" | "unvirtualized"): void {
		const item = win.options._taskbarItem;
		if (!item) return;

		switch (state) {
			case "minimized":
				item.classList.add(`${LIBRARY_NAME}-minimized`);
				break;
			case "restored":
				item.classList.remove(`${LIBRARY_NAME}-minimized`);
				break;
			case "titleChanged":
			case "iconChanged":
				this.updateTaskbarItemContent(item, win);
				break;
			case "virtualized":
				if (this.globalConfig.indicateVirtualizationInTaskbar) {
					item.classList.add(`${LIBRARY_NAME}-virtualized`);
				}
				break;
			case "unvirtualized":
				item.classList.remove(`${LIBRARY_NAME}-virtualized`);
				break;
		}
	}

	private activateFocusTrap(win: WinLetWindow): void {
		this.deactivateFocusTrap(); // 念のため既存のリスナーを解除

		this.boundTabPressHandler = (e: KeyboardEvent) => {
			if (e.key === "Tab") {
				e.preventDefault();
				const focusableElements = Array.from(win.el.querySelectorAll<HTMLElement>('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter((el) => !el.hasAttribute("disabled") && !el.closest(".minimized"));

				if (focusableElements.length === 0) return;

				const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
				let nextIndex = e.shiftKey ? currentIndex - 1 : currentIndex + 1;

				if (nextIndex >= focusableElements.length) {
					nextIndex = 0;
				}
				if (nextIndex < 0) {
					nextIndex = focusableElements.length - 1;
				}
				focusableElements[nextIndex].focus();
			}
		};
		document.addEventListener("keydown", this.boundTabPressHandler);
	}

	private deactivateFocusTrap(): void {
		if (this.boundTabPressHandler) {
			document.removeEventListener("keydown", this.boundTabPressHandler);
			this.boundTabPressHandler = null;
		}
	}

	/**
	 * ショートカット文字列を解析し、修飾キーと主キーのオブジェクトを返す
	 * @param shortcut - "Ctrl+Shift+K"のような文字列
	 */
	private parseShortcut(shortcut: string): { ctrl: boolean; alt: boolean; shift: boolean; key: string } {
		const keys = shortcut.split("+");
		const key = keys.pop() || ""; // 主キーを配列から取り出す
		const ctrl = keys.includes("Ctrl");
		const alt = keys.includes("Alt");
		const shift = keys.includes("Shift");
		return { ctrl, alt, shift, key };
	}

	/**
	 * 全てのウィンドウの可視性をチェックし、必要に応じて仮想化/復元を行う
	 */
	public updateVirtualization(): void {
		if (!this.globalConfig.enableVirtualization || !this.workspaceEl) return;

		const threshold = this.globalConfig.virtualizationThreshold ?? 5;
		if (this.windows.size <= threshold) {
			// しきい値以下の場合は、すべてのウィンドウが仮想化されていないことを確認
			for (const win of this.windows.values()) {
				if (win.virtualizationLevel !== "none" && win.state !== "minimized") {
					win.unvirtualize();
				}
			}
			return; // さらに処理を停止
		}

		// z-indexでソートし、奥のウィンドウから手前のウィンドウの順で並べる
		const windows = Array.from(this.windows.values()).sort((a, b) => parseInt(a.el.style.zIndex || "0", 10) - parseInt(b.el.style.zIndex || "0", 10));

		const viewportRect = this.workspaceEl.getBoundingClientRect();

		for (let i = 0; i < windows.length; i++) {
			const targetWin = windows[i];

			// 1. 仮想化対象外のウィンドウ、またはアクティブなウィンドウは常に非仮想化
			if (!targetWin.options.virtualizable || (targetWin.state !== "normal" && targetWin.state !== "minimized") || targetWin === this.activeWindow) {
				targetWin.unvirtualize();
				continue;
			}

			const targetRect = targetWin.el.getBoundingClientRect();
			// 面積が非常に小さいウィンドウは非表示として扱う
			if (targetRect.width <= 1 || targetRect.height <= 1) {
				targetWin.virtualize("auto");
				continue;
			}

			// 2. 5つのサンプルポイント（四隅と中央）を定義
			const samplePoints = [
				{ x: targetRect.left + 1, y: targetRect.top + 1 }, // Top-left
				{ x: targetRect.right - 1, y: targetRect.top + 1 }, // Top-right
				{ x: targetRect.right - 1, y: targetRect.bottom - 1 }, // Bottom-right
				{ x: targetRect.left + 1, y: targetRect.bottom - 1 }, // Bottom-left
				{ x: targetRect.left + targetRect.width * 0.5, y: targetRect.top + targetRect.height * 0.5 }, // Center
			];

			let isVisible = false;
			for (const point of samplePoints) {
				// ポイントがビューポート（ワークスペース）の外側なら、このポイントは不可視
				const inViewport = point.x >= viewportRect.left && point.x < viewportRect.right && point.y >= viewportRect.top && point.y < viewportRect.bottom;
				if (!inViewport) {
					continue; // 次のサンプルポイントをチェック
				}

				// ポイントが他のウィンドウに隠されているかチェック
				let pointIsOccluded = false;
				// targetWinより手前にあるウィンドウ(occluderWin)をすべてチェック
				for (let j = i + 1; j < windows.length; j++) {
					const occluderWin = windows[j];
					// 隠す能力のないウィンドウ（最小化、透明など）はスキップ
					if (occluderWin.state !== "normal" || (occluderWin.getOpacity() ?? 1) < 0.9) {
						continue;
					}

					const occluderRect = occluderWin.el.getBoundingClientRect();
					// ポイントがoccluderWinの矩形内にあるかチェック
					if (point.x >= occluderRect.left && point.x < occluderRect.right && point.y >= occluderRect.top && point.y < occluderRect.bottom) {
						pointIsOccluded = true;
						break; // １つのウィンドウでも隠していれば、このポイントのチェックは終了
					}
				}

				// このポイントがビューポート内にあり、かつどのウィンドウにも隠されていなければ、可視と判断
				if (!pointIsOccluded) {
					isVisible = true;
					break; // １つでも可視ポイントがあれば、ウィンドウ全体のチェックは終了
				}
			}

			// 3. 最終的な可視性に基づいて仮想化状態を更新
			if (isVisible) {
				targetWin.unvirtualize();
			} else {
				targetWin.virtualize("auto");
			}
		}
	}

	/**
	 * Bootstrapのテーマ属性の変更を監視するMutationObserverを開始します。
	 */
	private startBootstrapThemeObserver(): void {
		if (this.bootstrapThemeObserver || !this.container) return;

		// --- ハイコントラストのリスナー設定 ---
		this.highContrastMatcher = window.matchMedia("(prefers-contrast: more)");
		this.highContrastListener = (e: MediaQueryListEvent) => {
			// ハイコントラストがONになったら、high-contrastテーマを強制適用
			if (e.matches) {
				this.stopAutoThemeListener();
				this.setTheme("high-contrast");
			} else {
				// OFFになったら、Bootstrapのテーマ設定を再評価
				this.applyBootstrapTheme(document.documentElement.getAttribute("data-bs-theme"));
			}
		};
		this.highContrastMatcher.addEventListener("change", this.highContrastListener);

		// --- Bootstrapテーマのリスナー設定 ---
		const targetNode = document.documentElement;
		const config = { attributes: true, attributeFilter: ["data-bs-theme"] };
		const callback = (mutationsList: MutationRecord[]) => {
			// ハイコントラストが有効でなければ、テーマ変更を処理
			if (!this.highContrastMatcher?.matches) {
				for (const mutation of mutationsList) {
					if (mutation.type === "attributes" && mutation.attributeName === "data-bs-theme") {
						const themeValue = (mutation.target as HTMLElement).getAttribute("data-bs-theme");
						this.applyBootstrapTheme(themeValue);
					}
				}
			}
		};
		this.bootstrapThemeObserver = new MutationObserver(callback);
		this.bootstrapThemeObserver.observe(targetNode, config);

		// --- 初期チェック ---
		// 優先度1: ハイコントラストモード
		if (this.highContrastMatcher.matches) {
			this.setTheme("high-contrast");
		} else {
			// 優先度2: Bootstrapテーマ
			this.applyBootstrapTheme(targetNode.getAttribute("data-bs-theme"));
		}
	}

	/**
	 * Bootstrapのテーマ属性の監視を停止します。
	 */
	private stopBootstrapThemeObserver(): void {
		if (this.bootstrapThemeObserver) {
			this.bootstrapThemeObserver.disconnect();
			this.bootstrapThemeObserver = null;
		}
		if (this.highContrastMatcher && this.highContrastListener) {
			this.highContrastMatcher.removeEventListener("change", this.highContrastListener);
		}
		this.stopAutoThemeListener(); // OSのリスナーも停止
	}

	/**
	 * 適用されたBootstrapのテーマに応じてWinLetのテーマを設定します。
	 * @param themeValue - data-bs-theme属性の値 ('dark', 'light', 'auto', or null)
	 */
	private applyBootstrapTheme(themeValue: string | null): void {
		this.stopAutoThemeListener(); // 競合を避けるため、まずOSのリスナーを停止

		if (themeValue === "dark") {
			this.setTheme("dark");
		} else if (themeValue === "auto") {
			this.startAutoThemeListener();
		} else {
			// 'light' または属性が存在しない場合
			this.setTheme("default");
		}
	}

	/**
	 * OSのカラースキーム変更の監視を開始します。
	 */
	private startAutoThemeListener(): void {
		if (this.prefersColorSchemeListener || !window.matchMedia) return;

		this.prefersDarkMatcher = window.matchMedia("(prefers-color-scheme: dark)");

		this.prefersColorSchemeListener = (e: MediaQueryListEvent) => {
			this.setTheme(e.matches ? "dark" : "default");
		};

		this.prefersDarkMatcher.addEventListener("change", this.prefersColorSchemeListener);

		// 現在のOS設定に基づいて初期テーマを適用
		this.setTheme(this.prefersDarkMatcher.matches ? "dark" : "default");
	}

	/**
	 * OSのカラースキーム変更の監視を停止します。
	 */
	private stopAutoThemeListener(): void {
		if (this.prefersDarkMatcher && this.prefersColorSchemeListener) {
			this.prefersDarkMatcher.removeEventListener("change", this.prefersColorSchemeListener);
		}
		this.prefersDarkMatcher = null;
		this.prefersColorSchemeListener = null;
	}
}
