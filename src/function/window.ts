import { defaultConfig } from "../const/config";
import { WinLetError } from "../const/errors";
import { CLOSE_BUTTON_RESULT, IWindow, LIBRARY_NAME, MenuItem, PopupOptions, PopupResult, TabItem, WindowContentOptions, WindowOptions, WindowState } from "../const/types";
import WinLetBaseClass from "../libs/baseclass";
import Utils from "../libs/utils";
import WindowManager from "./window_manager";

export default class WinLetWindow extends WinLetBaseClass implements IWindow {
	public readonly id: string;
	public options: Required<WindowOptions>;
	public el: HTMLElement;
	public state: WindowState = "normal";

	private manager: WindowManager;
	private lastState = { x: 0, y: 0, width: 0, height: 0 };
	private focused: boolean = false;
	private readonly DRAG_THRESHOLD = 5;

	private titleBarEl: HTMLElement;
	private iconEl: HTMLElement;
	private titleEl: HTMLElement;
	private contentEl: HTMLElement;
	private tabs: { tabEl: HTMLElement; contentEl: HTMLElement }[] = [];
	private addTabBtn: HTMLElement | null = null;
	private isMenuOpen = false;
	private boundGlobalClickHandler: ((event: MouseEvent) => void) | null = null;

	// モバイル対応
	private readonly MOBILE_CONTEXT_MENU_TIMEOUT = 700;
	private contextMenuTimer: number | null = null;

	// Popup用
	public popupCloseCallback: ((result: PopupResult) => void) | null = null;

	private childManager: WindowManager | null = null;
	private parentWindow: IWindow | null;

	constructor(options: WindowOptions, manager: WindowManager) {
		super();
		this.id = options.id || Utils.generateId("window");
		if (options.id) {
			const existingEl = document.getElementById(options.id);
			if (existingEl && existingEl.classList.contains(`${LIBRARY_NAME}-window`)) {
				throw new WinLetError(`WinLet: Window with ID "${options.id}" already exists. New window will not be created.`);
			}
		}
		this.manager = manager;
		this.options = Utils.deepMerge(defaultConfig, options) as Required<WindowOptions>;
		this.parentWindow = options._parent || null;

		this.el = this.createDOM();

		// _isPopupによってクラスを追加
		if (this.options._isPopup) {
			this.el.classList.add(`${LIBRARY_NAME}-popup-window`);
		}
		// tabStyleとmenuStyleによってクラスを追加
		if (this.options.tabStyle === "merged") {
			this.el.classList.add(`${LIBRARY_NAME}-tab-style-merged`);
		}
		if (this.options.menuStyle === "merged") {
			this.el.classList.add(`${LIBRARY_NAME}-menu-style-merged`);
		}

		this.titleBarEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-title-bar`)!;
		this.iconEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-icon`)!;
		this.titleEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-title`)!;
		this.contentEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-content`)!;

		this.applyOptions();
		this.setupEventListeners();

		this.options.onOpen(this);
	}

	private createDOM(): HTMLElement {
		const windowEl = document.createElement("div");
		windowEl.className = `${LIBRARY_NAME}-window`;
		windowEl.id = this.id;

		const handles: string[] = [];
		if (this.options.resizableY) {
			handles.push(`<div class="${LIBRARY_NAME}-resize-handle n"></div>`, `<div class="${LIBRARY_NAME}-resize-handle s"></div>`);
		}
		if (this.options.resizableX) {
			handles.push(`<div class="${LIBRARY_NAME}-resize-handle w"></div>`, `<div class="${LIBRARY_NAME}-resize-handle e"></div>`);
		}
		if (this.options.resizableX && this.options.resizableY) {
			handles.push(`<div class="${LIBRARY_NAME}-resize-handle nw"></div>`, `<div class="${LIBRARY_NAME}-resize-handle ne"></div>`, `<div class="${LIBRARY_NAME}-resize-handle sw"></div>`, `<div class="${LIBRARY_NAME}-resize-handle se"></div>`);
		}
		const resizableHandlesHTML = handles.join("");

		const hasMenu = this.options.menu.length > 0;
		const hasTabs = this.options.tabs.length > 0;
		const isMergedMenu = this.options.menuStyle === "merged" && hasMenu;
		const isMergedTabs = this.options.tabStyle === "merged" && hasTabs;

		const controlsHTML = `
            <div class="${LIBRARY_NAME}-controls">
                ${this.options.minimizable ? `<input class="${LIBRARY_NAME}-control-btn ${LIBRARY_NAME}-minimize-btn" type="button" value="\uff3f" title="Minimize" />` : ""}
                ${this.options.maximizable ? `<input class="${LIBRARY_NAME}-control-btn ${LIBRARY_NAME}-maximize-btn" type="button" value="\u25a1" title="Maximize" />` : ""}
                ${this.options.closable ? `<input class="${LIBRARY_NAME}-control-btn ${LIBRARY_NAME}-close-btn" type="button" value="\u2573" title="Close">` : ""}
            </div>`;

		const titleBarContentHTML = `
            <div class="${LIBRARY_NAME}-icon"></div>
            ${isMergedMenu ? `<div class="${LIBRARY_NAME}-menu-bar"></div>` : ""}
            <div class="${LIBRARY_NAME}-title"></div>
            ${isMergedTabs ? `<div class="${LIBRARY_NAME}-tab-bar"></div>` : ""}
            ${controlsHTML}
        `;

		windowEl.innerHTML = `
            <div class="${LIBRARY_NAME}-title-bar ${LIBRARY_NAME}-us-none">
                ${titleBarContentHTML}
            </div>
            <div class="${LIBRARY_NAME}-main-content">
                ${!isMergedMenu && hasMenu ? `<div class="${LIBRARY_NAME}-menu-bar"></div>` : ""}
                ${!isMergedTabs && hasTabs ? `<div class="${LIBRARY_NAME}-tab-bar"></div>` : ""}
                <div class="${LIBRARY_NAME}-content"></div>
            </div>
            ${resizableHandlesHTML}
        `;
		return windowEl;
	}

	private applyOptions(): void {
		this.setTitle(this.options.title);
		this.setIcon(this.options.icon);
		this.setSize(this.options.width, this.options.height);
		this.el.style.minWidth = `${this.options.minWidth}px`;
		this.el.style.minHeight = `${this.options.minHeight}px`;

		if (this.options.controlsPosition === "left") {
			this.titleBarEl.classList.add("controls-left");
		}

		if (this.options.tabs.length > 0) {
			this.createTabs();
		} else {
			this.renderContent(this.contentEl, this.options.content);
		}

		if (this.options.menu.length > 0) {
			this.createMenu();
		}
	}

	private renderContent(container: HTMLElement, content: WindowContentOptions): void {
		container.innerHTML = "";
		if (content.template) {
			const template = document.querySelector<HTMLTemplateElement>(content.template);
			if (template?.tagName === "TEMPLATE") {
				container.appendChild(template.content.cloneNode(true));
			} else {
				container.innerHTML = "Error: Template not found or invalid.";
				console.warn("WinLet Warning: Template not found or invalid.");
			}
		} else if (content.html) {
			container.innerHTML = content.html;
		} else if (Utils.isNonEmptyObject(content.iframe)) {
			const iframe = document.createElement("iframe");
			const iframeConfig = content.iframe;
			if (iframeConfig.src) {
				iframe.src = iframeConfig.src;
			}
			if (iframeConfig.srcdoc) {
				let finalSrcDoc = iframeConfig.srcdoc;
				if (iframeConfig.loadWinLet) {
					const globalConfig = this.manager.getGlobalConfig();
					if (globalConfig.libraryPath) {
						const scriptTag = `<script src="${globalConfig.libraryPath}"><\/script>`;
						const initScript = `<script>document.addEventListener('DOMContentLoaded', () => window.WinLet.init({ container: document.body }));<\/script>`;
						finalSrcDoc = `<!DOCTYPE html><html><head><meta charset="UTF-8">${scriptTag}${initScript}</head><body>${iframeConfig.srcdoc}</body></html>`;
					} else {
						console.warn("WinLet Warning: `loadWinLet` is true, but `libraryPath` is not set in global config.");
					}
				}
				iframe.srcdoc = finalSrcDoc;
			}
			if (iframeConfig.allow) {
				iframe.allow = iframeConfig.allow;
			}
			if (iframeConfig.referrerPolicy) {
				iframe.referrerPolicy = iframeConfig.referrerPolicy;
			}
			if (iframeConfig.loading) {
				iframe.loading = iframeConfig.loading;
			}
			if (iframeConfig.sandbox) {
				if (!Array.isArray(iframeConfig.sandbox)) {
					iframeConfig.sandbox = [iframeConfig.sandbox];
				}
				if (iframeConfig.sandbox.length > 0) {
					iframe.setAttribute("sandbox", iframeConfig.sandbox.join(" "));
				}
			}
			container.appendChild(iframe);
		}
	}

	private closeAllMenus(): void {
		this.el.querySelectorAll<HTMLElement>(`.${LIBRARY_NAME}-menu-item > .${LIBRARY_NAME}-menu-dropdown`).forEach((dd) => {
			dd.style.display = "none";
		});
		this.isMenuOpen = false;
	}

	private createMenu(): void {
		const menuBar = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-menu-bar`)!;
		menuBar.innerHTML = "";

		this.options.menu.forEach((menuItemData) => {
			const menuItemEl = document.createElement("div");
			menuItemEl.className = `${LIBRARY_NAME}-menu-item ${LIBRARY_NAME}-us-none`;
			menuItemEl.textContent = menuItemData.name ?? "";

			if (menuItemData.items) {
				const dropdownEl = this.createDropdownMenu(menuItemData.items);

				menuItemEl.addEventListener("click", (e) => {
					e.stopPropagation();
					const isVisible = dropdownEl.style.display === "block";
					this.closeAllMenus();
					if (!isVisible) {
						dropdownEl.style.display = "block";
						this.isMenuOpen = true;
					}
				});

				menuItemEl.addEventListener("mouseenter", () => {
					if (this.isMenuOpen) {
						this.closeAllMenus();
						dropdownEl.style.display = "block";
						this.isMenuOpen = true;
					}
				});

				menuItemEl.appendChild(dropdownEl);
			}
			menuBar.appendChild(menuItemEl);
		});
	}

	private createDropdownMenu(items: MenuItem[]): HTMLUListElement {
		const dropdownEl = document.createElement("ul");
		dropdownEl.className = `${LIBRARY_NAME}-menu-dropdown`;

		items.forEach((itemData) => {
			const itemEl = document.createElement("li");
			if (itemData.separator) {
				itemEl.className = "separator";
			} else {
				let text = itemData.name ?? "";
				text = `<span>${text}</span>`;
				if (this.options.enableShortcuts && itemData.shortcut) {
					text += `<span class="${LIBRARY_NAME}-shortcut-text">(${itemData.shortcut})</span>`;
				}
				itemEl.innerHTML = `<div class="${LIBRARY_NAME}-menu-dropdown-item">${text}</div>`;
				itemEl.addEventListener("click", (e) => {
					e.stopPropagation();
					this.closeAllMenus();
					itemData.action?.(this);
				});
				if (itemData.items) {
					itemEl.classList.add("has-submenu"); // スタイル付けのためのクラス
					const subMenuEl = this.createDropdownMenu(itemData.items);
					itemEl.appendChild(subMenuEl);
				}
			}
			dropdownEl.appendChild(itemEl);
		});
		return dropdownEl;
	}

	private createTabs(): void {
		const tabBar = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-tab-bar`)!;
		tabBar.innerHTML = "";
		this.tabs = [];
		const tabOpts = this.options.tabOptions ?? {};

		this.options.tabs.forEach((tabData, index) => {
			this.createTabElement(tabData, index);
		});

		if (tabOpts.addable) {
			this.addTabBtn = document.createElement("div");
			this.addTabBtn.className = `${LIBRARY_NAME}-tab-add-btn`;
			this.addTabBtn.textContent = "+";
			this.addTabBtn.addEventListener("click", (e) => {
				const newTabItem = tabOpts.onAdd?.(this);
				if (newTabItem) {
					this.addTab(newTabItem);
				}
			});
			tabBar.appendChild(this.addTabBtn);
		}
		// タブの並び替えと統合のためのドロップゾーンを設定
		this.setupTabBarDropZone();

		if (this.tabs.length > 0) this.activateTab(0);
	}

	private setupTabBarDropZone(): void {
		const tabBar = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-tab-bar`)!;
		if (!tabBar || !this.options.tabOptions.reorderable) return;

		tabBar.addEventListener("dragover", (e) => {
			if (e.dataTransfer?.types.includes("application/winlet-tab")) {
				e.preventDefault();
				if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
				tabBar.classList.add("drag-over");
			}
		});
		tabBar.addEventListener("dragleave", () => {
			tabBar.classList.remove("drag-over");
		});
		tabBar.addEventListener("drop", (e) => {
			e.preventDefault();
			tabBar.classList.remove("drag-over");

			const tabDataJSON = e.dataTransfer?.getData("application/winlet-tab");
			const sourceWindowId = e.dataTransfer?.getData("application/winlet-source-window-id");
			const sourceTabId = e.dataTransfer?.getData("text/plain");
			if (!tabDataJSON || !sourceWindowId || !sourceTabId) return;

			const draggingEl = this.manager.container?.querySelector<HTMLElement>(`.${LIBRARY_NAME}-tab.dragging`);

			// 自分自身のウィンドウ内での並び替え
			if (sourceWindowId === this.id) {
				if (draggingEl) {
					// ドロップされた位置に挿入
					this.updateTabOrderFromDOM();
				}
				return;
			}

			// 外部ウィンドウからのタブ統合
			const sourceWindow = this.manager.getWindow(sourceWindowId);
			if (sourceWindow) {
				const sourceOpts = sourceWindow.options.tabOptions;
				const targetOpts = this.options.tabOptions;

				const isMergeable = sourceOpts.mergeable ?? sourceOpts.detachable; // ソースをマージできるかどうかを確認
				const allowsIncoming = targetOpts.allowIncomingMerge ?? true; // ターゲットが受け入れるかどうかを確認
				const customFilterPassed = !targetOpts.onMergeAttempt || targetOpts.onMergeAttempt(sourceWindow, this);

				if (!isMergeable || !allowsIncoming || !customFilterPassed) {
					return; // 条件が満たされていない場合は、マージを中止
				}

				const tabData: TabItem = JSON.parse(tabDataJSON);
				this.addTab(tabData, true);

				sourceWindow.closeTab(parseInt(sourceTabId, 10));
			}
		});
	}

	private createTabElement(tabData: TabItem, index: number): void {
		const tabBar = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-tab-bar`)!;
		const tabOpts = this.options.tabOptions ?? {};

		const tabEl = document.createElement("div");
		tabEl.className = `${LIBRARY_NAME}-tab`;
		tabEl.dataset.tabId = index.toString(); // IDを紐付け

		const titleEl = document.createElement("span");
		titleEl.textContent = tabData.title;
		tabEl.appendChild(titleEl);

		// +ボタンが存在すればその前に、なければ末尾に追加
		tabBar.insertBefore(tabEl, this.addTabBtn);

		if (tabOpts.closable) {
			const closeBtn = document.createElement("span");
			closeBtn.className = `${LIBRARY_NAME}-tab-close-btn`;
			closeBtn.innerHTML = "&times;";
			closeBtn.addEventListener("click", (e) => {
				e.stopPropagation();
				// クロージャのindexに依存せず、クリックされた時点の最新のインデックスを探す
				const indexToClose = this.tabs.findIndex((t) => t.tabEl === tabEl);
				if (indexToClose !== -1) {
					this.closeTab(indexToClose);
				}
			});
			tabEl.appendChild(closeBtn);
		}

		// タブコンテント生成ロジック
		const tabContentEl = document.createElement("div");
		tabContentEl.className = `${LIBRARY_NAME}-tab-content`;
		this.contentEl.appendChild(tabContentEl);
		this.renderContent(tabContentEl, tabData.content);

		tabEl.addEventListener("click", (e) => {
			this.activateTab(+tabEl.dataset.tabId!);
		});
		this.tabs.splice(index, 0, { tabEl, contentEl: tabContentEl }); // 指定位置に挿入

		if (tabOpts.reorderable) {
			this.makeTabReorderable(tabEl);
		}
	}

	private makeTabReorderable(tabEl: HTMLElement) {
		tabEl.draggable = true;
		tabEl.addEventListener("dragstart", (e) => {
			e.dataTransfer!.setData("text/plain", tabEl.dataset.tabId!);
			tabEl.classList.add("dragging");

			// 分離機能が有効な場合、追加情報をセット
			if (this.options.tabOptions.detachable) {
				const tabIndex = parseInt(tabEl.dataset.tabId!, 10);
				if (!isNaN(tabIndex) && this.options.tabs[tabIndex]) {
					const tabData = this.options.tabs[tabIndex];
					e.dataTransfer!.setData("application/winlet-tab", JSON.stringify(tabData));
					e.dataTransfer!.setData("application/winlet-source-window-id", this.id);

					this.manager.onTabDragStart(this.id);
				}
			}
		});
		tabEl.addEventListener("dragend", () => {
			tabEl.classList.remove("dragging");
			this.manager.onTabDragEnd();
		});

		tabEl.addEventListener(
			"dragover",
			(e) => {
				if (this.manager.draggingTabInfo?.sourceWindowId !== this.id) {
					return; //タブが別のウィンドウからである場合、何もしない
				}

				e.preventDefault();
				const draggingEl = document.querySelector<HTMLElement>(`.${LIBRARY_NAME}-tab.dragging`);
				if (draggingEl && draggingEl !== tabEl) {
					const rect = tabEl.getBoundingClientRect();
					// カーソルの位置によって挿入位置を左右に決める
					const isAfter = e.clientX > rect.left + rect.width / 2;
					const parent = tabEl.parentNode!;
					if (isAfter) {
						parent.insertBefore(draggingEl, tabEl.nextSibling);
					} else {
						parent.insertBefore(draggingEl, tabEl);
					}
				}
			},
			{ passive: false }
		);

		tabEl.addEventListener(
			"drop",
			(e) => {
				e.preventDefault();
			},
			{ passive: false }
		);
	}

	// タブを閉じるロジック
	public closeTab(index: number) {
		// アクティブなタブが閉じられるかチェック
		const wasActive = this.tabs[index]?.tabEl.classList.contains("active");

		// DOMから要素を削除
		this.tabs[index].tabEl.remove();
		this.tabs[index].contentEl.remove();
		// 配列から削除
		this.tabs.splice(index, 1);
		this.options.tabs.splice(index, 1);

		// IDの再割り当て
		this.tabs.forEach((tab, i) => (tab.tabEl.dataset.tabId = i.toString()));

		// アクティブなタブを再設定
		if (this.tabs.length > 0) {
			if (wasActive) {
				const newActiveIndex = Math.max(0, index - 1);
				this.activateTab(newActiveIndex);
			}
		} else {
			// タブが0になったらウィンドウを閉じる
			this.close();
		}
	}

	public activateTab(index: number): void {
		this.tabs.forEach((tab, i) => {
			tab.tabEl.classList.toggle("active", i === index);
			tab.contentEl.classList.toggle("active", i === index);
		});
	}

	public addTab(tabItem: TabItem, setActive: boolean = true): void {
		this.options.tabs.push(tabItem);
		const newIndex = this.options.tabs.length - 1;
		this.createTabElement(tabItem, newIndex);
		if (setActive) {
			this.activateTab(newIndex);
			// タブが追加されアクティブになったウィンドウにフォーカスを当てる
			this.focus();
		}
	}

	public getTabs(): { tabEl: HTMLElement; contentEl: HTMLElement }[] {
		return this.tabs;
	}

	private updateTabOrderFromDOM(): void {
		const tabElements = Array.from(this.el.querySelectorAll<HTMLElement>(`.${LIBRARY_NAME}-tab-bar > .${LIBRARY_NAME}-tab`));

		const newTabs: typeof this.tabs = [];
		const newOptionsTabs: TabItem[] = [];

		const oldTabs = [...this.tabs];
		const oldOptionsTabs = [...this.options.tabs];

		tabElements.forEach((tabEl) => {
			// dataset.tabIdはもはや信頼できない可能性があるため、DOM要素で直接比較する
			const oldIndex = oldTabs.findIndex((t) => t.tabEl === tabEl);
			if (oldIndex !== -1) {
				newTabs.push(oldTabs[oldIndex]);
				newOptionsTabs.push(oldOptionsTabs[oldIndex]);
			}
		});

		this.tabs = newTabs;
		this.options.tabs = newOptionsTabs;

		// 新しい順序でdataset.tabIdを再設定
		this.tabs.forEach((tab, i) => (tab.tabEl.dataset.tabId = i.toString()));
	}

	private setupEventListeners(): void {
		this.el.addEventListener("click", () => this.focus(), true);

		// iframeなどにフォーカスが移った際にウィンドウ自体をアクティブにする
		this.el.addEventListener("focusin", () => this.focus());

		// Add a global click listener to close menus when clicking outside
		this.boundGlobalClickHandler = () => {
			if (this.isMenuOpen) {
				this.closeAllMenus();
			}
		};
		document.addEventListener("click", this.boundGlobalClickHandler);

		const closeBtn = this.el.querySelector<HTMLButtonElement>(`.${LIBRARY_NAME}-close-btn`);
		closeBtn?.addEventListener("click", (e) => {
			e.stopPropagation();
			if (this.options._isPopup) {
				this.popupCloseCallback?.(CLOSE_BUTTON_RESULT);
			}
			this.close();
		});

		const maxBtn = this.el.querySelector<HTMLButtonElement>(`.${LIBRARY_NAME}-maximize-btn`);
		maxBtn?.addEventListener("click", (e) => {
			e.stopPropagation();
			this.toggleMaximize();
		});

		const minBtn = this.el.querySelector<HTMLButtonElement>(`.${LIBRARY_NAME}-minimize-btn`);
		minBtn?.addEventListener("click", (e) => {
			e.stopPropagation();
			this.minimize();
		});

		if (this.options.movable) this.makeMovable();
		if (this.options.resizableX || this.options.resizableY) this.makeResizable();
		if (this.options.contextMenu.length > 0) {
			// PC用: 右クリック
			this.el.addEventListener(
				"contextmenu",
				(e) => {
					e.preventDefault();
					this.manager.showContextMenu(e.clientX, e.clientY, this.options.contextMenu, this);
				},
				{ passive: false }
			);
			// モバイル用: 長押し
			this.el.addEventListener("pointerdown", (e) => {
				if (e.pointerType !== "touch") return;
				this.contextMenuTimer = window.setTimeout(() => {
					this.contextMenuTimer = null;
					this.manager.showContextMenu(e.clientX, e.clientY, this.options.contextMenu, this);
				}, this.MOBILE_CONTEXT_MENU_TIMEOUT);
			});
			const clearContextMenuTimer = () => {
				if (this.contextMenuTimer) {
					clearTimeout(this.contextMenuTimer);
					this.contextMenuTimer = null;
				}
			};
			this.el.addEventListener("pointermove", clearContextMenuTimer);
			this.el.addEventListener("pointerup", clearContextMenuTimer);
			this.el.addEventListener("pointercancel", clearContextMenuTimer);
		}
	}

	private makeMovable(): void {
		const onPointerDown = (e: PointerEvent) => {
			const target = e.target as HTMLElement;
			// 操作UI要素の上なら移動させない
			if (target.closest(`.${LIBRARY_NAME}-control-btn, .${LIBRARY_NAME}-resize-handle, .${LIBRARY_NAME}-menu-item, .${LIBRARY_NAME}-tab, .${LIBRARY_NAME}-tab-add-btn`)) {
				return;
			}

			// メインボタン（マウスの左ボタン、タッチ）でのみ移動
			if (e.button !== 0) return;

			e.preventDefault();
			this.focus();

			const { clientX: startX, clientY: startY } = e;
			let isDragging = false;

			// ドラッグ開始時のウィンドウ座標。isDraggingがtrueになったときに設定される。
			let initialLeft: number;
			let initialTop: number;

			const onPointerMove = (moveE: PointerEvent) => {
				if (!this.el?.isConnected) return;
				if (!isDragging) {
					const deltaX = Math.abs(moveE.clientX - startX);
					const deltaY = Math.abs(moveE.clientY - startY);

					// 閾値を超えたらドラッグモードを開始
					if (deltaX > this.DRAG_THRESHOLD || deltaY > this.DRAG_THRESHOLD) {
						isDragging = true;
						this.el.setPointerCapture(e.pointerId);
						this.contentEl.style.pointerEvents = "none";

						// 最大化状態からのドラッグ開始の場合、ウィンドウを復元
						if (this.state === "maximized") {
							const restoredWidth = this.lastState.width;
							const clickRatio = e.clientX / this.el.offsetWidth;
							const titleBarRect = this.titleBarEl.getBoundingClientRect();
							const offsetY = e.clientY - titleBarRect.top;
							const posX = e.clientX - restoredWidth * clickRatio;
							const posY = e.clientY - offsetY;

							this.restore();
							this.setPosition(posX, posY);
						}

						// ドラッグ開始時点の座標を記録
						initialLeft = this.el.offsetLeft;
						initialTop = this.el.offsetTop;
					} else {
						// 閾値に達していなければ何もしない
						return;
					}
				}

				// ドラッグ中の移動処理
				const newLeft = initialLeft + moveE.clientX - startX;
				const newTop = initialTop + moveE.clientY - startY;
				this.setPosition(newLeft, newTop);
			};

			const onPointerUp = () => {
				document.removeEventListener("pointermove", onPointerMove);
				document.removeEventListener("pointerup", onPointerMove);

				// ドラッグが発生した場合のみ後処理とコールバック呼び出し
				if (isDragging) {
					this.el.releasePointerCapture(e.pointerId);
					this.contentEl.style.pointerEvents = "auto";
					this.options.onMove(this);
				}
			};

			document.addEventListener("pointermove", onPointerMove);
			document.addEventListener("pointerup", onPointerUp);
		};

		this.titleBarEl.addEventListener("pointerdown", onPointerDown, { passive: false });

		if (this.options.maximizable) {
			this.titleBarEl.addEventListener("dblclick", (e: MouseEvent) => {
				if (this.options.maximizableOnDblClick) {
					const target = e.target as HTMLElement;
					// 操作UI（コントロールボタン、メニュー、タブ）の上では発火しないようにする
					if (target.closest(`.${LIBRARY_NAME}-control-btn, .${LIBRARY_NAME}-menu-item, .${LIBRARY_NAME}-tab`)) {
						return;
					}
					this.toggleMaximize();
				}
			});
		}
	}

	private makeResizable(): void {
		this.el.querySelectorAll<HTMLElement>(`.${LIBRARY_NAME}-resize-handle`).forEach((handle) => {
			handle.addEventListener(
				"pointerdown",
				(e: PointerEvent) => {
					if (e.button !== 0 || !handle?.isConnected) return;
					e.preventDefault();
					e.stopPropagation();
					this.focus();
					this.contentEl.style.pointerEvents = "none";
					handle.setPointerCapture(e.pointerId);

					const direction = handle.className.replace(`${LIBRARY_NAME}-resize-handle `, "");
					const { clientX: startX, clientY: startY } = e;
					const { offsetWidth: startWidth, offsetHeight: startHeight, offsetLeft: startLeft, offsetTop: startTop } = this.el;
					const { minWidth, minHeight } = this.options;

					const onPointerMove = (moveE: PointerEvent) => {
						let newWidth = startWidth,
							newHeight = startHeight,
							newLeft = startLeft,
							newTop = startTop;
						const deltaX = moveE.clientX - startX;
						const deltaY = moveE.clientY - startY;

						if (direction.includes("e")) newWidth = Math.max(minWidth, startWidth + deltaX);
						if (direction.includes("w")) {
							newWidth = Math.max(minWidth, startWidth - deltaX);
							newLeft = startLeft + deltaX;
						}
						if (direction.includes("s")) newHeight = Math.max(minHeight, startHeight + deltaY);
						if (direction.includes("n")) {
							newHeight = Math.max(minHeight, startHeight - deltaY);
							newTop = startTop + deltaY;
						}
						this.setSize(newWidth, newHeight);
						this.setPosition(newLeft, newTop);
					};
					const onPointerUp = () => {
						handle.releasePointerCapture(e.pointerId);
						this.contentEl.style.pointerEvents = "auto";

						document.removeEventListener("pointermove", onPointerMove);
						document.removeEventListener("pointerup", onPointerUp);
						this.options.onResize(this);
					};
					document.addEventListener("pointermove", onPointerMove);
					document.addEventListener("pointerup", onPointerUp);
				},
				{ passive: false }
			);
		});
	}

	private isFontAwesome(classStr: string): boolean {
		const classes = classStr.trim().split(/\s+/);
		const hasPrefix = classes.some((c) => /^fa[bslr]?$/.test(c));
		const hasIcon = classes.some((c) => /^fa-[a-z0-9-]+$/.test(c));
		return hasPrefix && hasIcon;
	}

	// --- Public API ---

	public close(): void {
		// Clean up global event listeners
		if (this.boundGlobalClickHandler) {
			document.removeEventListener("click", this.boundGlobalClickHandler);
		}
		this.options.onClose(this);
		this.manager.destroyWindow(this.id);
	}

	public minimize(): void {
		if (this.state !== "minimized") {
			if (this.state !== "normal") this.restore();
			this.state = "minimized";
			this.el.classList.add("minimized");
			this.blur();
		}
	}

	public toggleMaximize(): void {
		this.state === "maximized" ? this.restore() : this.maximize();
	}

	public maximize(): void {
		if (this.state !== "maximized") {
			if (this.state !== "normal") this.restore();
			this.lastState = { x: this.el.offsetLeft, y: this.el.offsetTop, width: this.el.offsetWidth, height: this.el.offsetHeight };
			this.state = "maximized";
			this.el.classList.add("maximized");
			this.setPosition(0, 0);
			this.setSize("100%", "100%");
			const maxBtn = this.el.querySelector<HTMLButtonElement>(`.${LIBRARY_NAME}-maximize-btn`);
			if (maxBtn) {
				maxBtn.title = "Restore";
				maxBtn.value = "\u274f";
			}
		}
	}

	public restore(): void {
		if (this.state === "minimized") {
			this.state = "normal";
			this.el.classList.remove("minimized");
			this.focus();
		} else if (this.state === "maximized") {
			this.state = "normal";
			this.el.classList.remove("maximized");
			this.setSize(this.lastState.width, this.lastState.height);
			this.setPosition(this.lastState.x, this.lastState.y);
			const maxBtn = this.el.querySelector<HTMLButtonElement>(`.${LIBRARY_NAME}-maximize-btn`);
			if (maxBtn) {
				maxBtn.title = "Maximize";
				maxBtn.value = "\u25a1";
			}
		}
	}

	public focus(): void {
		if (this.focused) return;

		// 階層を遡ってすべての親ウィンドウをフォーカスする
		if (this.parentWindow) {
			this.parentWindow.focus();
		}

		this.manager.focusWindow(this);
		this.focused = true;
		this.el.classList.add("active");
		this.options.onFocus(this);
	}

	public blur(): void {
		if (!this.focused) return;
		this.focused = false;
		this.el.classList.remove("active");
		this.options.onBlur(this);
	}

	public reload(): void {
		// onReloadがfalseを返した場合、デフォルトのリロード処理を中断
		if (this.options.onReload(this) === false) {
			return;
		}

		const reloadContent = (container: HTMLElement, content: WindowContentOptions) => {
			if (Utils.isNonEmptyObject(content.iframe)) {
				const iframe = container.querySelector("iframe");
				// srcがあり、srcdocがない場合はiframeのreloadを試みる
				if (iframe && iframe.src && !content.iframe.srcdoc) {
					try {
						// クロスオリジンフレームへのアクセスはエラーになる可能性がある
						iframe.contentWindow?.location.reload();
					} catch (e) {
						// 失敗した場合はiframe要素を再生成する
						console.warn("WinLet: Cross-origin iframe could not be reloaded directly. Recreating iframe element.", e);
						this.renderContent(container, content);
					}
				} else {
					// srcdocの場合やiframeが見つからない場合は要素を再生成
					this.renderContent(container, content);
				}
			} else {
				// htmlまたはtemplateの場合は常に再描画
				this.renderContent(container, content);
			}
		};

		if (this.options.tabs.length > 0) {
			const activeTabIndex = this.tabs.findIndex((tab) => tab.tabEl.classList.contains("active"));
			if (activeTabIndex > -1) {
				const activeTab = this.tabs[activeTabIndex];
				const tabContentOptions = this.options.tabs[activeTabIndex].content;
				reloadContent(activeTab.contentEl, tabContentOptions);
			}
		} else {
			reloadContent(this.contentEl, this.options.content);
		}
	}

	public getContent(): HTMLElement | HTMLIFrameElement {
		let contentContainer: HTMLElement;
		const activeTabIndex = this.tabs.findIndex((tab) => tab.tabEl.classList.contains("active"));

		if (activeTabIndex > -1) {
			// If there's an active tab, use its content element
			contentContainer = this.tabs[activeTabIndex].contentEl;
		} else {
			// Otherwise, use the main content element
			contentContainer = this.contentEl;
		}

		const iframe = contentContainer.querySelector("iframe");
		return iframe || contentContainer;
	}

	/**
	 * 子ウィンドウマネージャを初期化または取得します。
	 */
	private getChildManager(): WindowManager {
		if (!this.childManager) {
			// WindowManagerのコンストラクタとGlobalConfigの整合性を取る必要がある
			// ここでは簡易的に空のconfigで生成
			const childConfig = {};
			this.childManager = new WindowManager(childConfig);

			// 子マネージャのコンテナとして、このウィンドウのcontentElを指定
			this.childManager.applyGlobalConfig({ container: this.contentEl });
			this.childManager.init();
		}
		return this.childManager;
	}

	/**
	 * このウィンドウ内に新しいウィンドウを作成します。
	 */
	public createWindow(options: WindowOptions = {}): IWindow {
		// iframeコンテンツの場合は、直接DOM操作する代わりにpostMessageを使用
		const iframe = this.contentEl.querySelector("iframe");
		if (iframe && iframe.contentWindow) {
			const message = {
				type: "winlet:createWindow",
				options: options,
			};
			// iframeのオリジンを尊重
			iframe.contentWindow.postMessage(message, "*");
			// postMessageでは直接インスタンスを返せないため、暫定的にnullを返すか、Promiseベースの設計にする必要がある
			// ここでは未対応とし、コンソールに警告を出す
			console.warn("WinLet: Window creation inside an iframe is asynchronous and does not return an instance directly.");
			// ダミーのインスタンスを返すか、APIの戻り値をvoidにするなどの検討が必要
			return null as any; // 暫定
		}

		// 通常のHTMLコンテンツの場合
		const manager = this.getChildManager();
		// 新しいウィンドウに自身を親として設定
		options._parent = this;
		return manager.createWindow(options);
	}

	/**
	 * このウィンドウ内に新しいポップアップを作成します。
	 */
	public createPopup(options: PopupOptions): IWindow {
		const manager = this.getChildManager();
		// ポップアップにも自身を親として設定
		const winOptions: WindowOptions = { _parent: this };
		return manager.popup(Object.assign(options, winOptions));
	}

	public getTitle(): string {
		return this.options.title;
	}

	public setTitle(title: string): void {
		this.options.title = title;
		this.titleEl.textContent = Utils.sanitizeHTML(title);
	}

	public setIcon(icon: string | null): void {
		this.options.icon = icon;
		this.iconEl.innerHTML = "";
		if (!icon) return;

		if (this.isFontAwesome(icon)) {
			const i = document.createElement("i");
			i.className = icon;
			this.iconEl.appendChild(i);
		} else {
			const img = document.createElement("img");
			img.src = icon;
			img.alt = "window icon";
			this.iconEl.appendChild(img);
		}
	}

	public getPosition(): { x: number; y: number } {
		if (this.state === "maximized") {
			return { x: this.lastState.x, y: this.lastState.y };
		}
		return { x: this.el.offsetLeft, y: this.el.offsetTop };
	}

	public setPosition(x: number | "center" | "left" | "right", y: number | "center" | "top" | "bottom"): void {
		// containerが存在しない（初期化前）場合は処理を中断
		if (!this.manager.container) {
			console.warn("WinLet Warning: setPosition called before manager is initialized.");
			return;
		}
		const parentRect = this.manager.container.getBoundingClientRect();
		const winWidth = this.el.offsetWidth;
		const winHeight = this.el.offsetHeight;

		let finalX: number;
		let finalY: number;

		// X座標の計算
		switch (x) {
			case "left":
				finalX = 0;
				break;
			case "center":
				finalX = (parentRect.width - winWidth) / 2;
				break;
			case "right":
				finalX = parentRect.width - winWidth;
				break;
			default:
				finalX = x as number;
				break;
		}

		// Y座標の計算
		switch (y) {
			case "top":
				finalY = 0;
				break;
			case "center":
				finalY = (parentRect.height - winHeight) / 2;
				break;
			case "bottom":
				finalY = parentRect.height - winHeight;
				break;
			default:
				finalY = y as number;
				break;
		}

		// 画面外にはみ出さないようにする既存のロジックを適用
		this.el.style.left = `${Math.min(Math.max(150 - winWidth, finalX), parentRect.width - 20)}px`;
		this.el.style.top = `${Math.min(Math.max(0, finalY), parentRect.height - 50)}px`;
	}

	public getSize(): { width: number; height: number } {
		if (this.state === "maximized") {
			return { width: this.lastState.width, height: this.lastState.height };
		}
		return { width: this.el.offsetWidth, height: this.el.offsetHeight };
	}

	public setSize(width: number | string, height: number | string): void {
		this.el.style.width = typeof width === "number" ? `${width}px` : width;
		this.el.style.height = typeof height === "number" ? `${height}px` : height;
	}
}
