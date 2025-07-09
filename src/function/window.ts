import { defaultConfig } from "../const/config";
import { WinLetError } from "../const/errors";
import { CLOSE_BUTTON_RESULT, IWindow, LIBRARY_NAME, MenuItem, PopupOptions, PopupResult, TabItem, VirtualizationLevel, WindowContentOptions, WindowOptions, WindowState } from "../const/types";
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
	private mainContentEl: HTMLElement;
	private contentEl: HTMLElement;
	private loaderEl: HTMLElement;
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

	private debugOverlayEl: HTMLElement | null = null;
	public virtualizationLevel: VirtualizationLevel = "none";
	private minimizeVirtualizeTimer: number | null = null;
	private readonly virtualizationHierarchy: readonly VirtualizationLevel[] = ["none", "frozen", "suspended", "unloaded"];

	constructor(options: WindowOptions, manager: WindowManager) {
		super();
		this.id = options.id || Utils.generateId(`${LIBRARY_NAME}-window`);
		if (options.id) {
			const existingEl = document.getElementById(options.id);
			if (existingEl && existingEl.classList.contains(`${LIBRARY_NAME}-window`)) {
				throw new WinLetError(`WinLet: Window with ID "${options.id}" already exists. New window will not be created.`);
			}
		}
		this.manager = manager;
		this.options = Utils.deepMerge(Utils.deepCopy(defaultConfig), options) as Required<WindowOptions>;
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
		// 最前面/モーダル指定によりクラスを追加
		if (this.options.windowOptions.alwaysOnTop) {
			this.el.classList.add(`${LIBRARY_NAME}-always-on-top`);
		}
		if (this.options.windowOptions.modal) {
			this.el.classList.add(`${LIBRARY_NAME}-modal`);
			this.el.setAttribute("aria-modal", "true");
		}

		this.titleBarEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-title-bar`)!;
		this.iconEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-icon`)!;
		this.titleEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-title`)!;
		this.mainContentEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-main-content`)!;
		this.contentEl = this.mainContentEl.querySelector<HTMLElement>(`.${LIBRARY_NAME}-content`)!;
		this.loaderEl = this.mainContentEl.querySelector<HTMLElement>(`.${LIBRARY_NAME}-loader-overlay`)!;
		this.debugOverlayEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-debug-overlay`);

		this.applyOptions();
		this.setupEventListeners();
		this.updateDebugOverlay();

		this.options.onOpen(this);
	}

	private createDOM(): HTMLElement {
		const windowEl = document.createElement("div");
		windowEl.className = `${LIBRARY_NAME}-window`;
		windowEl.id = this.id;

		// ARIA属性
		windowEl.setAttribute("role", "application");
		windowEl.setAttribute("aria-labelledby", `${this.id}-title`);
		if (this.state === "minimized") {
			windowEl.setAttribute("inert", "");
			windowEl.setAttribute("aria-hidden", "true");
		}

		const handles: string[] = [];
		if (this.options.windowOptions.resizableY) {
			handles.push(`<div class="${LIBRARY_NAME}-resize-handle ${LIBRARY_NAME}-n"></div>`, `<div class="${LIBRARY_NAME}-resize-handle ${LIBRARY_NAME}-s"></div>`);
		}
		if (this.options.windowOptions.resizableX) {
			handles.push(`<div class="${LIBRARY_NAME}-resize-handle ${LIBRARY_NAME}-w"></div>`, `<div class="${LIBRARY_NAME}-resize-handle ${LIBRARY_NAME}-e"></div>`);
		}
		if (this.options.windowOptions.resizableX && this.options.windowOptions.resizableY) {
			handles.push(`<div class="${LIBRARY_NAME}-resize-handle ${LIBRARY_NAME}-nw"></div>`, `<div class="${LIBRARY_NAME}-resize-handle ${LIBRARY_NAME}-ne"></div>`, `<div class="${LIBRARY_NAME}-resize-handle ${LIBRARY_NAME}-sw"></div>`, `<div class="${LIBRARY_NAME}-resize-handle ${LIBRARY_NAME}-se"></div>`);
		}
		const resizableHandlesHTML = handles.join("");

		const hasMenu = this.options.menu.length > 0;
		const hasTabs = this.options.tabs.length > 0;
		const isMergedMenu = this.options.menuStyle === "merged" && hasMenu;
		const isMergedTabs = this.options.tabStyle === "merged" && hasTabs;

		const customControlsHTML = (this.options.customControls ?? []).map((c) => `<button class="${LIBRARY_NAME}-control-btn ${LIBRARY_NAME}-custom-control-btn" data-name="${c.name}" title="${c.title || ""}" aria-label="${c.title || c.name}">${c.html}</button>`).join("");

		const controlsHTML = `
            <div class="${LIBRARY_NAME}-controls">
				${customControlsHTML}
                ${this.options.windowOptions.minimizable ? `<input class="${LIBRARY_NAME}-control-btn ${LIBRARY_NAME}-minimize-btn" type="button" value="\uff3f" title="Minimize" aria-label="Minimize"/>` : ""}
                ${this.options.windowOptions.maximizable ? `<input class="${LIBRARY_NAME}-control-btn ${LIBRARY_NAME}-maximize-btn" type="button" value="\u25a1" title="Maximize" aria-label="Maximize"/>` : ""}
                ${this.options.windowOptions.closable ? `<input class="${LIBRARY_NAME}-control-btn ${LIBRARY_NAME}-close-btn" type="button" value="\u2573" title="Close" aria-label="Close"/>` : ""}
            </div>`;

		const titleBarContentHTML = `
            <div class="${LIBRARY_NAME}-icon"></div>
            ${isMergedMenu ? `<div class="${LIBRARY_NAME}-menu-bar"></div>` : ""}
            <div id="${this.id}-title" class="${LIBRARY_NAME}-title"></div>
            ${isMergedTabs ? `<div class="${LIBRARY_NAME}-tab-bar"></div>` : ""}
            ${controlsHTML}
        `;

		const loaderHTML = `
            <div class="${LIBRARY_NAME}-loader-overlay" style="display: none;">
                <div class="${LIBRARY_NAME}-loader-spinner"></div>
            </div>
        `;

		const debugHTML = `<div class="${LIBRARY_NAME}-debug-overlay"></div>`;

		windowEl.innerHTML = `
			${debugHTML}
            <div class="${LIBRARY_NAME}-title-bar ${LIBRARY_NAME}-us-none">
                ${titleBarContentHTML}
            </div>
            <div class="${LIBRARY_NAME}-main-content">
                ${!isMergedMenu && hasMenu ? `<div class="${LIBRARY_NAME}-menu-bar" role="menubar"></div>` : ""}
                ${!isMergedTabs && hasTabs ? `<div class="${LIBRARY_NAME}-tab-bar" role="tablist"></div>` : ""}
                <div class="${LIBRARY_NAME}-content"></div>
				${loaderHTML}
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
			this.titleBarEl.classList.add(`${LIBRARY_NAME}-controls-left`);
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

	private showLoader(): void {
		if (this.options.showLoadingIndicator) {
			this.loaderEl.style.display = "flex";
		}
	}

	private hideLoader(): void {
		this.loaderEl.style.display = "none";
	}

	private renderContent(container: HTMLElement, content: WindowContentOptions): void {
		container.innerHTML = "";
		this.hideLoader();

		if (this.virtualizationLevel === "unloaded") {
			return; // 仮想化された場合、コンテンツをレンダリングしない
		}

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
		} else if (Utils.isNonEmptyObject(content.iframe) && (content.iframe.src || content.iframe.srcdoc)) {
			this.showLoader();
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
			iframe.addEventListener("load", () => this.hideLoader());
			iframe.addEventListener("error", () => this.hideLoader());
			container.appendChild(iframe);
		} else {
			container.innerHTML = "";
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
			menuItemEl.setAttribute("role", "menu");

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
				itemEl.className = `${LIBRARY_NAME}-separator`;
			} else {
				let text = itemData.name ?? "";
				text = `<span>${text}</span>`;
				if (this.options.enableShortcuts && itemData.shortcut) {
					text += `<span class="${LIBRARY_NAME}-shortcut-text">(${itemData.shortcut})</span>`;
				}
				itemEl.innerHTML = `<div class="${LIBRARY_NAME}-menu-dropdown-item" role="menuitem">${text}</div>`;
				itemEl.addEventListener("click", (e) => {
					e.stopPropagation();
					this.closeAllMenus();
					itemData.action?.(this);
				});
				if (itemData.items) {
					itemEl.classList.add(`${LIBRARY_NAME}-has-submenu`); // スタイル付けのためのクラス
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
				tabBar.classList.add(`${LIBRARY_NAME}-drag-over`);
			}
		});
		tabBar.addEventListener("dragleave", () => {
			tabBar.classList.remove(`${LIBRARY_NAME}-drag-over`);
		});
		tabBar.addEventListener("drop", (e) => {
			e.preventDefault();
			tabBar.classList.remove(`${LIBRARY_NAME}-drag-over`);

			const tabDataJSON = e.dataTransfer?.getData("application/winlet-tab");
			const sourceWindowId = e.dataTransfer?.getData("application/winlet-source-window-id");
			const sourceTabId = e.dataTransfer?.getData("text/plain");
			if (!tabDataJSON || !sourceWindowId || !sourceTabId) return;

			const draggingEl = this.manager.container?.querySelector<HTMLElement>(`.${LIBRARY_NAME}-tab.${LIBRARY_NAME}-dragging`);

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
		tabEl.setAttribute("role", "tab");
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
		tabContentEl.setAttribute("role", "tabpanel");
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
			tabEl.classList.add(`${LIBRARY_NAME}-dragging`);

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
			tabEl.classList.remove(`${LIBRARY_NAME}-dragging`);
			this.manager.onTabDragEnd();
		});

		tabEl.addEventListener(
			"dragover",
			(e) => {
				if (this.manager.draggingTabInfo?.sourceWindowId !== this.id) {
					return; //タブが別のウィンドウからである場合、何もしない
				}

				e.preventDefault();
				const draggingEl = document.querySelector<HTMLElement>(`.${LIBRARY_NAME}-tab.${LIBRARY_NAME}-dragging`);
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
		const wasActive = this.tabs[index]?.tabEl.classList.contains(`${LIBRARY_NAME}-active`);

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
			tab.tabEl.classList.toggle(`${LIBRARY_NAME}-active`, i === index);
			tab.contentEl.classList.toggle(`${LIBRARY_NAME}-active`, i === index);
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

		// グローバルクリックリスナーを追加して、外側をクリックするときにメニューを閉じる
		this.boundGlobalClickHandler = () => {
			if (this.isMenuOpen) {
				this.closeAllMenus();
			}
		};
		document.addEventListener("click", this.boundGlobalClickHandler);

		const controlsEl = this.el.querySelector<HTMLElement>(`.${LIBRARY_NAME}-controls`);
		controlsEl?.addEventListener("click", (e) => {
			const target = e.target as HTMLElement;
			const button = target.closest<HTMLElement>(`.${LIBRARY_NAME}-control-btn`);
			if (!button) return;

			// 標準ボタン
			if (button.classList.contains(`${LIBRARY_NAME}-close-btn`)) {
				e.stopPropagation();
				if (this.options._isPopup) {
					this.popupCloseCallback?.(CLOSE_BUTTON_RESULT);
				}
				this.close();
			} else if (button.classList.contains(`${LIBRARY_NAME}-maximize-btn`)) {
				e.stopPropagation();
				this.toggleMaximize();
			} else if (button.classList.contains(`${LIBRARY_NAME}-minimize-btn`)) {
				e.stopPropagation();
				this.minimize();
			}
			// カスタムボタン
			else if (button.classList.contains(`${LIBRARY_NAME}-custom-control-btn`)) {
				e.stopPropagation();
				const name = button.dataset.name;
				const control = this.options.customControls.find((c) => c.name === name);
				control?.action(this);
			}
		});

		if (this.options.windowOptions.movable) this.makeMovable();
		if (this.options.windowOptions.resizableX || this.options.windowOptions.resizableY) this.makeResizable();
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

			// --- ゴーストウィンドウ処理 ---
			let ghostEl: HTMLElement | null = null;
			if (this.options.windowOptions.useGhostWindow) {
				ghostEl = document.createElement("div");
				ghostEl.className = `${LIBRARY_NAME}-ghost-window`;
				this.manager.container?.appendChild(ghostEl);
				ghostEl.style.left = `${this.el.offsetLeft}px`;
				ghostEl.style.top = `${this.el.offsetTop}px`;
				ghostEl.style.width = `${this.el.offsetWidth}px`;
				ghostEl.style.height = `${this.el.offsetHeight}px`;
			}

			this.el.classList.add(`${LIBRARY_NAME}-is-dragging`);

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
				if (ghostEl) {
					ghostEl.style.left = `${newLeft}px`;
					ghostEl.style.top = `${newTop}px`;
				} else {
					this.setPosition(newLeft, newTop);
				}
			};

			const onPointerUp = () => {
				document.removeEventListener("pointermove", onPointerMove);
				document.removeEventListener("pointerup", onPointerUp);

				if (ghostEl) {
					this.setPosition(ghostEl.offsetLeft, ghostEl.offsetTop);
					ghostEl.remove();
				}
				// ドラッグが発生した場合のみ後処理とコールバック呼び出し
				if (isDragging) {
					this.el.releasePointerCapture(e.pointerId);
					this.contentEl.style.pointerEvents = "auto";
					this.options.onMove(this);
					this.manager.updateVirtualization();
				}

				this.el.classList.remove(`${LIBRARY_NAME}-is-dragging`);
			};

			document.addEventListener("pointermove", onPointerMove);
			document.addEventListener("pointerup", onPointerUp);
		};

		this.titleBarEl.addEventListener("pointerdown", onPointerDown, { passive: false });

		if (this.options.windowOptions.maximizable) {
			this.titleBarEl.addEventListener("dblclick", (e: MouseEvent) => {
				if (this.options.windowOptions.maximizableOnDblClick) {
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

					this.el.classList.add(`${LIBRARY_NAME}-is-resizing`);

					// --- ゴーストウィンドウ処理 ---
					let ghostEl: HTMLElement | null = null;
					if (this.options.windowOptions.useGhostWindow) {
						ghostEl = document.createElement("div");
						ghostEl.className = `${LIBRARY_NAME}-ghost-window`;
						this.manager.container?.appendChild(ghostEl);
					}

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

						if (direction.includes(`${LIBRARY_NAME}-e`)) newWidth = Math.max(minWidth, startWidth + deltaX);
						if (direction.includes(`${LIBRARY_NAME}-w`)) {
							newWidth = Math.max(minWidth, startWidth - deltaX);
							newLeft = startLeft + deltaX;
						}
						if (direction.includes(`${LIBRARY_NAME}-s`)) newHeight = Math.max(minHeight, startHeight + deltaY);
						if (direction.includes(`${LIBRARY_NAME}-n`)) {
							newHeight = Math.max(minHeight, startHeight - deltaY);
							newTop = startTop + deltaY;
						}
						if (ghostEl) {
							ghostEl.style.left = `${newLeft}px`;
							ghostEl.style.top = `${newTop}px`;
							ghostEl.style.width = `${newWidth}px`;
							ghostEl.style.height = `${newHeight}px`;
						} else {
							this.setSize(newWidth, newHeight);
							this.setPosition(newLeft, newTop);
						}
					};
					const onPointerUp = () => {
						handle.releasePointerCapture(e.pointerId);
						this.contentEl.style.pointerEvents = "auto";

						if (ghostEl) {
							this.setSize(ghostEl.offsetWidth, ghostEl.offsetHeight);
							this.setPosition(ghostEl.offsetLeft, ghostEl.offsetTop);
							ghostEl.remove();
						}

						document.removeEventListener("pointermove", onPointerMove);
						document.removeEventListener("pointerup", onPointerUp);
						this.options.onResize(this);
						this.updateDebugOverlay();
						this.manager.updateVirtualization();

						this.el.classList.remove(`${LIBRARY_NAME}-is-resizing`);
					};
					document.addEventListener("pointermove", onPointerMove);
					document.addEventListener("pointerup", onPointerUp);
				},
				{ passive: false }
			);
		});
	}

	public isFontAwesome(classStr: string): boolean {
		const classes = classStr.trim().split(/\s+/);
		const hasPrefix = classes.some((c) => /^fa[bslr]?$/.test(c));
		const hasIcon = classes.some((c) => /^fa-[a-z0-9-]+$/.test(c));
		return hasPrefix && hasIcon;
	}

	public updateDebugOverlay(): void {
		if (this.debugOverlayEl) {
			const pos = this.getPosition();
			const size = this.getSize();
			this.debugOverlayEl.textContent = `ID:    ${this.id}
State: ${this.state}
Pos:   x:${Math.round(pos.x)}, y:${Math.round(pos.y)}
Size:  w:${Math.round(size.width)}, h:${Math.round(size.height)}
Focus: ${this.focused}
z-idx: ${this.el.style.zIndex}
Virt:  ${this.virtualizationLevel}`.trim();
		}
	}

	/**
	 * ウィンドウ内に不安全なコンテンツがあるか判定する
	 */
	public getUnsafeContentLevel(): VirtualizationLevel {
		if (this.mainContentEl.querySelector("iframe, frame, video, audio, applet, embed, object")) {
			return "frozen";
		}
		if (this.mainContentEl.querySelector("img, input, textarea, select, canvas, [contentEditable=true]")) {
			return "suspended";
		}
		return "unloaded";
	}

	/**
	 * ウィンドウを指定されたレベルまで仮想化する
	 * @param level - 仮想化の目標レベル
	 */
	public virtualize(level: "none" | "frozen" | "suspended" | "unloaded" | "auto"): void {
		if (level === "auto") {
			level = this.getUnsafeContentLevel();
		}
		if (level === "none") {
			return;
		}

		const currentIndex = this.virtualizationHierarchy.indexOf(this.virtualizationLevel);
		const targetIndex = this.virtualizationHierarchy.indexOf(level);

		// 下位レベルへの変更は、一度unvirtualize()を呼び出してリセットする必要がある
		if (targetIndex <= currentIndex) {
			return;
		}

		// 現在の仮想化状態に関連するスタイルなどをクリーンアップ
		this.cleanupVirtualizationStyles();

		// 新しいレベルを設定し、その効果を適用
		this.virtualizationLevel = level;

		// 以前が非仮想化状態だった場合にのみ通知
		if (currentIndex === 0 && targetIndex > 0) {
			this.manager.updateTaskbarItem(this, "virtualized");
		}

		switch (level) {
			case "frozen":
				// cssでvisibility: hiddenを適用
				this.el.classList.add(`${LIBRARY_NAME}-is-frozen`);
				break;
			case "suspended":
				// cssでdisplay: noneを適用
				this.el.classList.add(`${LIBRARY_NAME}-is-suspended`);
				break;
			case "unloaded":
				this.el.classList.add(`${LIBRARY_NAME}-is-virtualized`);
				// コンテンツをメモリから解放
				if (this.tabs.length > 0) {
					this.tabs.forEach((tab) => {
						tab.contentEl.innerHTML = "";
					});
				} else {
					this.contentEl.innerHTML = "";
				}
				break;
		}

		this.updateDebugOverlay();
	}
	/**
	 * ウィンドウの仮想化を解除する
	 */
	public unvirtualize(): void {
		if (this.virtualizationLevel === "none") return;
		this.manager.updateTaskbarItem(this, "unvirtualized");

		const previousLevel = this.virtualizationLevel;
		this.virtualizationLevel = "none";
		// すべての仮想化関連クラスを削除
		this.cleanupVirtualizationStyles();

		// 前のレベルに応じてコンテンツを復元
		if (previousLevel === "unloaded") {
			// コンテンツを再描画
			this.loaderEl.style.display = "flex"; // ローディング表示
			// 非同期でコンテンツを再読み込み・再描画
			setTimeout(() => {
				if (this.options.tabs.length > 0) {
					this.tabs.forEach((tab) => {
						const tabIndex = parseInt(tab.tabEl.dataset.tabId!, 10);
						this.renderContent(tab.contentEl, this.options.tabs[tabIndex].content);
					});
				} else {
					this.renderContent(this.contentEl, this.options.content);
				}
				this.loaderEl.style.display = "none";
			}, 0);
		}
		this.updateDebugOverlay();
	}

	/**
	 * 仮想化に関連するスタイルと属性をリセットします。
	 */
	private cleanupVirtualizationStyles(): void {
		this.el.classList.remove(`${LIBRARY_NAME}-is-frozen`, `${LIBRARY_NAME}-is-suspended`, `${LIBRARY_NAME}-is-virtualized`);
		this.contentEl.style.display = "";
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

			const doMinimize = () => {
				this.state = "minimized";
				this.el.setAttribute("aria-hidden", "true");
				this.el.classList.add(`${LIBRARY_NAME}-minimized`);
				this.el.classList.remove(`${LIBRARY_NAME}-is-minimizing`);
				this.manager.updateTaskbarItem(this, "minimized");
				this.blur();

				// 最小化時の仮想化タイマーを開始
				const globalConfig = this.manager.getGlobalConfig();
				if (globalConfig.enableVirtualization && this.options.virtualizable) {
					if (this.minimizeVirtualizeTimer) {
						clearTimeout(this.minimizeVirtualizeTimer);
					}
					this.minimizeVirtualizeTimer = window.setTimeout(() => {
						this.virtualize("auto");
					}, globalConfig.virtualizationDelay ?? 5000);
				}
				this.updateDebugOverlay();
				this.manager.updateVirtualization();
			};

			this.el.setAttribute("inert", "");
			if (this.manager.getGlobalConfig().enableAnimations) {
				this.el.classList.add(`${LIBRARY_NAME}-is-minimizing`);
				this.el.setAttribute("inert", "");
				this.el.addEventListener("transitionend", doMinimize, { once: true });
			} else {
				doMinimize();
			}
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
			this.el.classList.add(`${LIBRARY_NAME}-maximized`);

			const doMaximize = () => {
				this.el.classList.remove(`${LIBRARY_NAME}-is-maximizing`);
				this.setPosition(0, 0);
				this.setSize("100%", "100%");
				this.updateDebugOverlay();
			};

			if (this.manager.getGlobalConfig().enableAnimations) {
				this.el.classList.add(`${LIBRARY_NAME}-is-maximizing`);
				// アニメーションのために先にサイズと位置を設定
				this.el.style.top = "0px";
				this.el.style.left = "0px";
				this.el.style.width = "100%";
				this.el.style.height = "100%";
				this.el.addEventListener("transitionend", doMaximize, { once: true });
			} else {
				doMaximize();
			}

			const maxBtn = this.el.querySelector<HTMLButtonElement>(`.${LIBRARY_NAME}-maximize-btn`);
			if (maxBtn) {
				maxBtn.title = "Restore";
				maxBtn.value = "\u274f";
				maxBtn.setAttribute("aria-label", "Restore");
			}
		}
	}

	public restore(): void {
		// 仮想化解除タイマーをクリア
		if (this.minimizeVirtualizeTimer) {
			clearTimeout(this.minimizeVirtualizeTimer);
			this.minimizeVirtualizeTimer = null;
		}
		// もし仮想化されていたら、解除する
		if (this.virtualizationLevel !== "none") {
			this.unvirtualize();
		}

		const wasMinimized = this.state === "minimized";
		if (this.state === "minimized") {
			this.state = "normal";
			this.el.removeAttribute("aria-hidden");
			this.el.removeAttribute("inert");
			this.el.classList.remove(`${LIBRARY_NAME}-minimized`);
			this.manager.updateTaskbarItem(this, "restored");
			this.focus();
		} else if (this.state === "maximized") {
			const doRestore = () => {
				this.state = "normal";
				this.el.classList.remove(`${LIBRARY_NAME}-maximized`, `${LIBRARY_NAME}-is-restoring`);
				const maxBtn = this.el.querySelector<HTMLButtonElement>(`.${LIBRARY_NAME}-maximize-btn`);
				if (maxBtn) {
					maxBtn.title = "Maximize";
					maxBtn.value = "\u25a1";
					maxBtn.setAttribute("aria-label", "Maximize");
				}
				this.updateDebugOverlay();
			};

			if (this.manager.getGlobalConfig().enableAnimations && !wasMinimized) {
				this.el.classList.add(`${LIBRARY_NAME}-is-restoring`);
				this.setSize(this.lastState.width, this.lastState.height);
				this.setPosition(this.lastState.x, this.lastState.y);
				this.el.addEventListener("transitionend", doRestore, { once: true });
			} else {
				this.setSize(this.lastState.width, this.lastState.height);
				this.setPosition(this.lastState.x, this.lastState.y);
				doRestore();
			}
		}
		this.updateDebugOverlay();
		this.manager.updateVirtualization();
	}

	public focus(): void {
		if (this.focused) return;

		// 階層を遡ってすべての親ウィンドウをフォーカスする
		if (this.parentWindow) {
			this.parentWindow.focus();
		}

		this.manager.focusWindow(this);
		this.focused = true;
		this.el.classList.add(`${LIBRARY_NAME}-active`);
		this.updateDebugOverlay();
		this.options.onFocus(this);
	}

	public blur(): void {
		if (!this.focused) return;
		this.focused = false;
		this.el.classList.remove(`${LIBRARY_NAME}-active`);
		this.updateDebugOverlay();
		this.options.onBlur(this);
	}

	public shake(): void {
		const className = `${LIBRARY_NAME}-is-shaking`;
		if (this.el.classList.contains(className)) {
			return; // Already shaking
		}
		this.el.classList.add(className);
		this.el.addEventListener(
			"animationend",
			() => {
				this.el.classList.remove(className);
			},
			{ once: true }
		);
	}

	public reload(): void {
		// onReloadがfalseを返した場合、デフォルトのリロード処理を中断
		if (this.options.onReload(this) === false) {
			return;
		}

		const reloadContent = (container: HTMLElement, content: WindowContentOptions) => {
			if (Utils.isNonEmptyObject(content.iframe) && (content.iframe.src || content.iframe.srcdoc)) {
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
			const activeTabIndex = this.tabs.findIndex((tab) => tab.tabEl.classList.contains(`${LIBRARY_NAME}-active`));
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
		const activeTabIndex = this.tabs.findIndex((tab) => tab.tabEl.classList.contains(`${LIBRARY_NAME}-active`));

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

	public createAsyncPopup(options: PopupOptions): Promise<PopupResult> {
		const manager = this.getChildManager();
		const popupOptionsWithParent = { ...options, _parent: this };
		return manager.popupAsync(popupOptionsWithParent);
	}

	public async capture(): Promise<string> {
		// HTML2Canvasがロードされているかどうかを確認します（例：CDN経由）
		if (typeof window.html2canvas !== "function") {
			const e = new WinLetError("The capture() feature requires the 'html2canvas' library. Please include it from a CDN to use this feature. https://html2canvas.hertzen.com/");
			console.warn(e);
			return Promise.reject(e);
		}

		try {
			const canvas = await window.html2canvas(this.el, {
				allowTaint: true,
				useCORS: true,
				logging: false,
				onclone: (clonedDoc: Document) => {
					// 一時的なUI要素のキャプチャを避けるため
					clonedDoc.querySelector(`#${this.id}`)?.classList.remove(`${LIBRARY_NAME}-is-resizing`, `${LIBRARY_NAME}-is-dragging`);
				},
			});
			return canvas.toDataURL("image/png");
		} catch (error: any) {
			const e = new WinLetError(`html2canvas failed to capture the window. Error: ${error.message}`);
			e.stack += "\n\n--- Caused by ---\n" + error.stack;
			console.error(e);
			return Promise.reject(e);
		}
	}

	public print(): void {
		const contentSource = this.getContent();

		// コンテンツがiframeの場合は、直接印刷
		if (contentSource.tagName === "IFRAME") {
			const iframe = contentSource as HTMLIFrameElement;
			try {
				// 印刷する前にiframeが完全にロードされていることを確認
				if (document.readyState === "complete") {
					iframe.contentWindow?.print();
				} else {
					window.addEventListener("load", () => {
						iframe.contentWindow?.print();
					});
				}
			} catch (e) {
				console.error("WinLet: Could not print iframe content, possibly due to cross-origin restrictions.", e);
			}
			return;
		}

		const size = this.getSize();

		// HTMLコンテンツの場合、印刷する一時的なiframeを作成します。
		const printFrame = document.createElement("iframe");
		printFrame.style.position = "absolute";
		printFrame.style.opacity = "0.01";
		printFrame.style.border = "0";
		printFrame.style.top = "0";
		printFrame.style.left = "0";
		printFrame.style.width = size.width + "px";
		printFrame.style.height = size.height + "px";
		printFrame.style.zIndex = "1";
		printFrame.style.transform = "scale(0.5)";
		printFrame.style.pointerEvents = "none";
		printFrame.setAttribute("inert", "");
		document.body.appendChild(printFrame);

		const frameDoc = printFrame.contentWindow?.document;
		if (!frameDoc) {
			console.error("WinLet: Could not create a document for printing.");
			document.body.removeChild(printFrame);
			return;
		}
		frameDoc.open();
		frameDoc.write("<!DOCTYPE html><html><head>");
		frameDoc.write(`<title>${this.getTitle()}</title>`);

		// メインドキュメントから印刷iframeにスタイルをコピーします
		const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
		styles.forEach((style) => {
			frameDoc.write(style.outerHTML);
		});

		frameDoc.write("</head><body>");
		frameDoc.write(contentSource.innerHTML);
		frameDoc.write("</body></html>");
		frameDoc.close();

		const doPrint = async () => {
			await new Promise((resolve) => setTimeout(resolve, 300));
			try {
				printFrame.contentWindow?.focus();
				printFrame.contentWindow?.print();
			} catch (e) {
				console.error("WinLet: Printing failed.", e);
			} finally {
				// 印刷ダイアログが閉じられた後にiframeが削除されます（またはキャンセルされます）
				// タイムアウトを使用すると、印刷ダイアログが適切に開くことができます
				setTimeout(() => {
					document.body.removeChild(printFrame);
				}, 500);
			}
		};

		if (printFrame.contentWindow?.document.readyState === "complete") {
			doPrint();
		} else {
			printFrame.contentWindow?.addEventListener("load", doPrint);
		}
	}

	public getTitle(): string {
		return this.options.title;
	}

	public setTitle(title: string): void {
		this.options.title = title;
		this.titleEl.textContent = Utils.sanitizeHTML(title);
		this.titleEl.setAttribute("aria-label", Utils.sanitizeHTML(title));
		this.manager.updateTaskbarItem(this, "titleChanged");
	}

	public setIcon(icon: string | null): void {
		this.options.icon = icon;
		this.iconEl.innerHTML = "";
		if (!icon) {
			this.manager.updateTaskbarItem(this, "iconChanged");
			return;
		}

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
		this.manager.updateTaskbarItem(this, "iconChanged");
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
		this.el.style.left = `${Math.min(Math.max(150 - winWidth, finalX), parentRect.width - 150)}px`;
		this.el.style.top = `${Math.min(Math.max(0, finalY), parentRect.height - 50)}px`;
		this.updateDebugOverlay();
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
		this.updateDebugOverlay();
	}

	public setOpacity(opacity: number): void {
		const clampedOpacity = Math.max(0, Math.min(1, opacity));
		this.options.windowOptions.opacity = clampedOpacity;
		this.el.style.opacity = clampedOpacity.toString();
	}

	public getOpacity(): number {
		return this.options.windowOptions.opacity!;
	}

	public setOptions(options: Partial<WindowOptions>): void {
		// ifExists
		if (typeof options.ifExists === "boolean") {
			this.options.ifExists = options.ifExists;
		}
		// タイトル
		if (typeof options.title === "string") {
			this.setTitle(options.title);
		}
		// アイコン
		if (typeof options.icon === "string" || options.icon === null) {
			this.setIcon(options.icon);
		}
		// 位置
		let x: number | "center" | "left" | "right" | null = null;
		if (typeof options.x === "number" || options.x === "center" || options.x === "left" || options.x === "right") {
			x = options.x;
		}
		let y: number | "center" | "top" | "bottom" | null = null;
		if (typeof options.y === "number" || options.y === "center" || options.y === "top" || options.y === "bottom") {
			y = options.y;
		}
		if (x !== null || y !== null) {
			if (x === null) {
				x = this.getPosition().x;
			}
			if (y === null) {
				y = this.getPosition().y;
			}
			this.setPosition(x, y);
		}
		// サイズ
		let width: number | string | null = null;
		if (typeof options.width === "number" || typeof options.width === "string") {
			width = options.width;
		}
		let height: number | string | null = null;
		if (typeof options.height === "number" || typeof options.height === "string") {
			height = options.height;
		}
		if (width !== null || height !== null) {
			if (width === null) {
				width = this.getSize().width;
			}
			if (height === null) {
				height = this.getSize().height;
			}
			this.setSize(width, height);
		}

		const windowOptions = options.windowOptions || {};

		// 不透明度
		if (typeof windowOptions.opacity === "number") {
			this.setOpacity(windowOptions.opacity);
		}
		// 常に手前に表示
		if (typeof windowOptions.alwaysOnTop === "boolean") {
			this.options.windowOptions.alwaysOnTop = windowOptions.alwaysOnTop;
			this.el.classList.toggle(`${LIBRARY_NAME}-always-on-top`, windowOptions.alwaysOnTop);
			// z-indexを再評価するためにフォーカスする
			this.focus();
		}
		// ゴーストウィンドウ
		if (typeof windowOptions.useGhostWindow === "boolean") {
			this.options.windowOptions.useGhostWindow = windowOptions.useGhostWindow;
		}
	}
}
