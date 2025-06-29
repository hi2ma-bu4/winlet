type WindowState = "normal" | "minimized" | "maximized";
interface WindowContentOptions {
    /**
     * 直接埋め込むHTML
     */
    html?: string;
    /**
     * iframe設定
     */
    iframe?: {
        src?: HTMLIFrameElement["src"];
        srcdoc?: HTMLIFrameElement["srcdoc"];
        allow?: HTMLIFrameElement["allow"];
        referrerPolicy?: HTMLIFrameElement["referrerPolicy"];
        loading?: HTMLIFrameElement["loading"];
        sandbox?: string[] | string;
    };
    /**
     * HTMLテンプレートのselector
     */
    template?: string;
}
interface IWindow {
    readonly id: string;
    options: Required<WindowOptions>;
    el: HTMLElement;
    state: WindowState;
    close(): void;
    minimize(): void;
    toggleMaximize(): void;
    maximize(): void;
    restore(): void;
    focus(): void;
    blur(): void;
    getTitle(): string;
    setTitle(title: string): void;
    setIcon(icon: string | null): void;
    getPosition(): {
        x: number;
        y: number;
    };
    setPosition(x: number | "center" | "left" | "right" | "auto", y: number | "center" | "top" | "bottom" | "auto"): void;
    getSize(): {
        width: number;
        height: number;
    };
    setSize(width: number | string, height: number | string): void;
    reload(): void;
}
interface MenuItem {
    name?: string;
    action?: (win: IWindow) => void;
    items?: MenuItem[];
    separator?: boolean;
    shortcut?: string;
}
interface TabItem {
    title: string;
    content: WindowContentOptions;
}
interface ContextMenuItem {
    name?: string;
    action?: (win: IWindow) => void;
    separator?: boolean;
}
interface WindowOptions {
    /**
     * ウィンドウのID
     */
    id?: string | null;
    /**
     * 既に同名のウィンドウが存在する場合の動作
     *
     * focus (デフォルト): 既存のウィンドウを復元し、フォーカスします。
     * prevent: 新しいウィンドウを作成せず、処理を中断します。
     * create: IDの重複を無視して、常に新しいウィンドウを作成します。
     */
    ifExists?: "focus" | "prevent" | "create";
    /**
     * ウィンドウのタイトル
     */
    title?: string;
    /**
     * ウィンドウのアイコン
     *
     * url / font-awesomeのクラス名の指定可能
     */
    icon?: string | null;
    /**
     * ウィンドウのX座標
     */
    x?: number | "center" | "left" | "right" | "auto";
    /**
     * ウィンドウのY座標
     */
    y?: number | "center" | "top" | "bottom" | "auto";
    /**
     * ウィンドウのサイズX
     */
    width?: number;
    /**
     * ウィンドウのサイズY
     */
    height?: number;
    /**
     * ウィンドウの最小サイズX
     */
    minWidth?: number;
    /**
     * ウィンドウの最小サイズY
     */
    minHeight?: number;
    /**
     * 水平方向のリサイズ
     */
    resizableX?: boolean;
    /**
     * 垂直方向のリサイズ
     */
    resizableY?: boolean;
    /**
     * ウィンドウの移動
     */
    movable?: boolean;
    /**
     * ウィンドウを閉じるボタンの表示
     */
    closable?: boolean;
    /**
     * ウィンドウを最小化するボタンの表示
     */
    minimizable?: boolean;
    /**
     * ウィンドウを最大化するボタンの表示
     */
    maximizable?: boolean;
    /**
     * タイトルバーのダブルクリックで最大化
     */
    maximizableOnDblClick?: boolean;
    /**
     * ショートカットキーを有効化
     */
    enableShortcuts?: boolean;
    /**
     * コントロールの位置
     */
    controlsPosition?: "left" | "right";
    /**
     * ウィンドウのコンテンツ
     */
    content?: WindowContentOptions;
    /**
     * メニュー
     */
    menu?: MenuItem[];
    /**
     * タブ
     */
    tabs?: TabItem[];
    tabOptions?: {
        /**
         * タブの入れ替え
         */
        reorderable?: boolean;
        /**
         * タブを閉じるボタン
         */
        closable?: boolean;
        /**
         * タブ追加ボタン
         */
        addable?: boolean;
        /**
         * 追加ボタン押下時の処理
         */
        onAdd?: (win: IWindow) => TabItem;
    };
    /**
     * 右クリックメニュー
     */
    contextMenu?: ContextMenuItem[];
    /**
     * ウィンドウオープン時
     */
    onOpen?: (win: IWindow) => void;
    /**
     * ウィンドウクローズ時
     */
    onClose?: (win: IWindow) => void;
    /**
     * ウィンドウフォーカス時
     */
    onFocus?: (win: IWindow) => void;
    /**
     * ウィンドウブラー時
     */
    onBlur?: (win: IWindow) => void;
    /**
     * ウィンドウリサイズ時
     */
    onResize?: (win: IWindow) => void;
    /**
     * ウィンドウ移動時
     */
    onMove?: (win: IWindow) => void;
    /**
     * ウィンドウリロード時
     *
     * デフォルトのリロード動作（iframeの再読み込みやhtmlの再描画）をキャンセルする場合は `false` を返します。
     */
    onReload?: (win: IWindow) => boolean | void;
}
interface GlobalConfigOptions {
    windowSwitchShortcut?: string | null;
}
interface WinLetApi {
    init: () => void;
    createWindow: (options?: WindowOptions) => IWindow;
    getWindow: (id: string) => IWindow | undefined;
    getActiveWindow: () => IWindow | null;
    setDefaultConfig: (options: WindowOptions) => void;
    setGlobalConfig: (options: GlobalConfigOptions) => void;
    get version(): string;
}
declare global {
    interface Window {
        WinLet: WinLetApi;
    }
}

declare const api: WinLetApi;

export { api as default };
