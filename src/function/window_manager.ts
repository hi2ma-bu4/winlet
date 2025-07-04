// src/WindowManager.ts

import { defaultConfig } from "../const/config";
import { WinLetError } from "../const/errors";
import { ContextMenuItem, GlobalConfigOptions, IWindow, LIBRARY_NAME, MenuItem, PopupButton, PopupButtonPreset, PopupOptions, PopupResult, TabItem, Theme, TIMEOUT_RESULT, WindowOptions } from "../const/types";
import WinLetBaseClass from "../libs/baseclass";
import Utils from "../libs/utils";
import styleData from "../style/styles";
import { darkTheme } from "../style/themes/dark";
import { defaultTheme } from "../style/themes/default";
import WinLetWindow from "./window";

export default class WindowManager extends WinLetBaseClass {
	public container: HTMLElement | null = null;
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

	constructor(initialConfig: GlobalConfigOptions) {
		super();
		this.globalConfig = initialConfig;
		this.registerTheme(defaultTheme);
		this.registerTheme(darkTheme);
	}

	/**
	 * ライブラリが初期化済みかどうかを取得します。
	 */
	public get isInitialized(): boolean {
		return this._isInitialized;
	}

	public applyGlobalConfig(options: GlobalConfigOptions) {
		Object.assign(this.globalConfig, options);
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

		if (parentEl !== document.body) {
			this.container.classList.add(`${LIBRARY_NAME}-is-nested`);

			// Ensure the parent can act as a positioning context
			const computedStyle = window.getComputedStyle(parentEl);
			if (computedStyle.position === "static") {
				parentEl.style.position = "relative";
			}
		}

		if (this.globalConfig.enableTaskbar) {
			this.createTaskbar();
		}

		if (this.globalConfig.theme) {
			this.setTheme(this.globalConfig.theme);
		} else {
			this.setTheme("Default");
		}

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
			if (!(e.target instanceof HTMLElement) || !this.activeWindow || this.activeWindow.options.modal) {
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
		this.container!.addEventListener("dragover", (e) => {
			if (e.dataTransfer?.types.includes("application/winlet-tab")) {
				e.preventDefault();
			}
		});

		this.container!.addEventListener("drop", (e) => {
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
		return styleData.replace(/\$\[(\w+)\]/g, (a, p) => {
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
			const containerRect = this.container!.getBoundingClientRect();

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
		this.container!.appendChild(win.el);

		if (this.taskbarEl) {
			this.createTaskbarItem(win);
		}

		win.setPosition(creationOptions.x, creationOptions.y);
		if (creationOptions.focus) {
			this.focusWindow(win);
			win.focus();
		} else {
			// フォーカスしない場合でも、z-indexの管理は必要
			win.el.style.zIndex = `${win.options.alwaysOnTop ? ++this.zIndexCounterOnTop : ++this.zIndexCounter}`;
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
			options.onClose?.(result);
		};

		const messageHTML = `<div class="${LIBRARY_NAME}-popup-message">${Utils.sanitizeHTML(options.message)}</div>`;
		const buttonsHTML = buttons.map((btn, index) => `<input class="${LIBRARY_NAME}-popup-button" data-index="${index}" type="button" value="${Utils.sanitizeHTML(btn.text)}"/>`).join("");
		const contentHTML = `${messageHTML}<div class="${LIBRARY_NAME}-popup-buttons">${buttonsHTML}</div>`;

		const winOptions: WindowOptions = {
			id: `popup-${Utils.generateId()}`,
			title: options.title || "",
			icon: options.icon,
			resizableX: false,
			resizableY: false,
			movable: true,
			closable: true,
			minimizable: false,
			maximizable: false,
			maximizableOnDblClick: false,
			enableShortcuts: false,
			content: { html: contentHTML },
			focus: options.focus,
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
			this.container?.appendChild(temp);
			winOptions.width = temp.offsetWidth + 80; // メッセージ幅 + パディング
			this.container?.removeChild(temp);
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

	public destroyWindow(id: string): void {
		this.ensureInitialized();
		const win = this.windows.get(id);
		if (win) {
			if (win.options._taskbarItem) {
				win.options._taskbarItem.remove();
			}
			if (win.options.modal) {
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
		}
	}

	public focusWindow(win: WinLetWindow): void {
		this.ensureInitialized();
		if (this.activeWindow === win && !win.options.modal) return;

		// 自身が管理する他のウィンドウをぼかす
		this.activeWindow?.blur();

		// モーダルかつフォーカストラップ有効ならトラップ開始
		if (win.options.modal && this.globalConfig.enableFocusTrapping) {
			this.activateFocusTrap(win);
		} else {
			// そうでなければ既存のトラップは解除
			this.deactivateFocusTrap();
		}

		this.activeWindow = win;
		win.el.style.zIndex = `${win.options.alwaysOnTop ? ++this.zIndexCounterOnTop : ++this.zIndexCounter}`;

		this.windows.forEach((w) => w.options._taskbarItem?.classList.remove("active"));
		win.options._taskbarItem?.classList.add("active");
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
		this.container?.classList.add(`${LIBRARY_NAME}-is-tab-dragging`);
		this.draggingTabInfo = { sourceWindowId };
	}

	public onTabDragEnd(): void {
		this.container?.classList.remove(`${LIBRARY_NAME}-is-tab-dragging`);
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
				itemEl.className = "separator";
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

		this.container!.appendChild(this.contextMenuEl);

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

	public setTheme(theme: string | Theme): void {
		const themeObj = typeof theme === "string" ? this.themes.get(theme) : theme;
		if (!themeObj) {
			console.warn(`WinLet: Theme "${theme}" not found.`);
			return;
		}
		this.activeTheme = themeObj;
		if (this.container) {
			for (const [key, value] of Object.entries(themeObj.variables)) {
				this.container.style.setProperty(key, value);
			}
		}
	}

	private createTaskbar(): void {
		if (!this.container) return;
		this.taskbarEl = document.createElement("div");
		this.taskbarEl.className = `${LIBRARY_NAME}-taskbar`;
		this.container.appendChild(this.taskbarEl);
	}

	private createTaskbarItem(win: WinLetWindow): void {
		if (!this.taskbarEl) return;
		const item = document.createElement("div");
		item.className = `${LIBRARY_NAME}-taskbar-item`;
		item.textContent = win.getTitle();
		item.title = win.getTitle();
		item.dataset.windowId = win.id;

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

	public updateTaskbarItem(win: WinLetWindow, state: "minimized" | "restored" | "titleChanged"): void {
		const item = win.options._taskbarItem;
		if (!item) return;

		switch (state) {
			case "minimized":
				item.classList.add("minimized");
				break;
			case "restored":
				item.classList.remove("minimized");
				break;
			case "titleChanged":
				item.textContent = win.getTitle();
				item.title = win.getTitle();
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
}
