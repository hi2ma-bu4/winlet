// src/WindowManager.ts

import { defaultConfig } from "../const/config";
import { WinLetError } from "../const/errors";
import { ContextMenuItem, GlobalConfigOptions, IWindow, LIBRARY_NAME, MenuItem, WindowOptions } from "../const/types";
import WinLetBaseClass from "../libs/baseclass";
import Utils from "../libs/utils";
import styleData from "../style/styles";
import WinLetWindow from "./window";

export default class WindowManager extends WinLetBaseClass {
	public container: HTMLElement | null = null;
	private windows = new Map<string, WinLetWindow>();
	private zIndexCounter = 1000;
	private activeWindow: WinLetWindow | null = null;
	private contextMenuEl: HTMLElement | null = null;
	private isInitialized = false;

	private globalConfig: Required<GlobalConfigOptions>;

	private lastAutoPosition: { x: number; y: number } | null = null;
	private readonly CASCADE_OFFSET = 30;

	constructor(initialConfig: Required<GlobalConfigOptions>) {
		super();
		this.globalConfig = initialConfig;
	}

	public applyGlobalConfig(options: GlobalConfigOptions) {
		Object.assign(this.globalConfig, options);
	}

	public init(): void {
		if (this.isInitialized) {
			return;
		}
		if (!document.body) {
			throw new WinLetError("Cannot initialize before document.body is ready. Please call WinLet.init() after DOMContentLoaded.");
		}

		if (!document.getElementById(`${LIBRARY_NAME}-styles`)) {
			const styleTag = document.createElement("style");
			styleTag.id = `${LIBRARY_NAME}-styles`;
			styleTag.innerHTML = this.getStyleData();
			document.head.appendChild(styleTag);
		}
		let containerEl = document.querySelector<HTMLElement>(`.${LIBRARY_NAME}-container`);
		if (!containerEl) {
			containerEl = document.createElement("div");
			containerEl.className = `${LIBRARY_NAME}-container`;
			document.body.appendChild(containerEl);
		}
		this.container = containerEl;

		window.addEventListener("blur", () => {
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
			});
		});
		document.addEventListener(
			"mousedown",
			() => {
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
				});
			},
			true
		);

		// ウィンドウ外クリックでblurさせる処理を追加
		this.container!.addEventListener("mousedown", (e) => {
			// クリックされたのがコンテナ自身（ウィンドウやその中身ではない）の場合
			if (e.target === this.container) {
				if (this.activeWindow) {
					const active = this.activeWindow;
					this.activeWindow = null; // 先にnullにしてからblurを呼ぶ
					active.blur();
				}
			}
		});

		document.addEventListener("click", () => this.hideContextMenu());

		window.addEventListener("message", (event) => {
			// メッセージの形式を検証
			if (event.data && event.data.type === "winlet:createWindow" && typeof event.data.options === "object") {
				// メッセージの送信元が管理下のiframeか検証（セキュリティ対策）
				let isSourceValid = false;
				for (const win of this.windows.values()) {
					const iframe = win.el.querySelector("iframe");
					if (iframe && iframe.contentWindow === event.source) {
						isSourceValid = true;
						break;
					}
				}

				if (isSourceValid) {
					this.createWindow(event.data.options);
				} else {
					console.warn("WinLet: Untrusted source attempted to create a window.", event.origin);
				}
			}
		});

		this.isInitialized = true;
		this.setupShortcutListeners();
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

				// --- 3. ショートカットキーを検索して実行 ---
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
		if (!this.isInitialized) {
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

		const creationOptions: Required<WindowOptions> = Utils.deepMerge(defaultConfig, options);
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
		this.container!.appendChild(win.el);

		win.setPosition(creationOptions.x, creationOptions.y);
		this.focusWindow(win);
		return win;
	}

	public destroyWindow(id: string): void {
		this.ensureInitialized();
		const win = this.windows.get(id);
		if (win) {
			win.el.remove();
			this.windows.delete(id);
			if (this.activeWindow === win) {
				this.activeWindow = null;
				const nextWin = Array.from(this.windows.values()).pop();
				if (nextWin) this.focusWindow(nextWin);
			}
		}
	}

	public focusWindow(win: WinLetWindow): void {
		this.ensureInitialized();
		if (this.activeWindow === win) return;

		this.activeWindow?.blur();
		this.activeWindow = win;
		win.el.style.zIndex = `${++this.zIndexCounter}`;
		// focus()はWindowクラス側で呼ばれるので不要
	}

	public getWindow(id: string): WinLetWindow | undefined {
		this.ensureInitialized();
		return this.windows.get(id);
	}

	public getActiveWindow(): WinLetWindow | null {
		this.ensureInitialized();
		return this.activeWindow;
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
