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
        /**
         * srcdocで生成されるiframe内にWinLetライブラリ自身を読み込むかどうか。
         * trueにする場合、GlobalConfigOptionsでlibraryPathを指定する必要があります。
         */
        loadWinLet?: boolean;
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
    /**
     * ウィンドウを閉じます。
     */
    close(): void;
    /**
     * ウィンドウを最小化します。
     */
    minimize(): void;
    /**
     * ウィンドウを最大化/元に戻します。
     */
    toggleMaximize(): void;
    /**
     * ウィンドウを最大化します。
     */
    maximize(): void;
    /**
     * ウィンドウを元に戻します。
     */
    restore(): void;
    /**
     * ウィンドウをフォーカスします。
     */
    focus(): void;
    /**
     * ウィンドウからフォーカスを外します。
     */
    blur(): void;
    /**
     * 注意を引くためにウィンドウを揺らします。
     */
    shake(): void;
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
    /**
     * ウィンドウの不透明度を設定します。
     * @param opacity 0.0 (透明) から 1.0 (不透明) の間の値
     */
    setOpacity(opacity: number): void;
    /**
     * 現在のウィンドウの不透明度を取得します。
     * @returns 0.0 から 1.0 の間の値
     */
    reload(): void;
    /**
     * ウィンドウのコンテンツ要素（またはiframe要素）を取得します。
     * @returns コンテンツを内包するHTMLElement、またはiframeウィンドウの場合はHTMLIFrameElement
     */
    getContent(): HTMLElement | HTMLIFrameElement;
    /**
     * このウィンドウの内部に新しいウィンドウを作成します。
     * @param options - 新しいウィンドウのオプション
     * @returns 作成されたIWindowインスタンス
     */
    createWindow(options?: WindowOptions): IWindow;
    /**
     * このウィンドウの内部に新しいポップアップを作成します。
     * @param options - 新しいポップアップのオプション
     * @returns 作成されたIWindowインスタンス
     */
    createPopup(options: PopupOptions): IWindow;
    /**
     * ウィンドウのオプションを動的に変更します。
     * @param options - 変更したいオプション
     */
    setOptions(options: Partial<WindowOptions>): void;
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
     * メニューの表示形式
     * - default: 通常のメニューバー
     * - merged: タイトルバーに統合
     */
    menuStyle?: "default" | "merged";
    /**
     * タブ
     */
    tabs?: TabItem[];
    /**
     * タブの表示形式
     * - default: 通常のタブバー
     * - merged: タイトルバーに統合されたChrome風タブ
     */
    tabStyle?: "default" | "merged";
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
         * タブをドラッグして新しいウィンドウとして分離できるようにするか
         */
        detachable?: boolean;
        /**
         * タブを別の既存のウィンドウにマージすることができます。
         */
        mergeable?: boolean;
        /**
         * このウィンドウが他のウィンドウからマージされたタブを受け入れることができます。
         */
        allowIncomingMerge?: boolean;
        /**
         * 追加ボタン押下時の処理
         */
        onAdd?: (win: IWindow) => TabItem;
        /**
         * マージが許可されているかどうかを動的に決定するコールバック関数。
         * @param sourceWindow タブの元ウィンドウ
         * @param targetWindow ドロップされたタブのウィンドウ
         * @returns true:マージ許可 false:マージ禁止
         */
        onMergeAttempt?: (sourceWindow: IWindow, targetWindow: IWindow) => boolean;
    };
    /**
     * タスクバーアイテムの表示設定
     */
    taskbarOptions?: {
        /**
         * trueにすると、タスクバーにタイトルではなくアイコンを表示します。
         * アイコンが設定されている必要があります。
         */
        showIconOnly?: boolean;
    };
    /**
     * 右クリックメニュー
     */
    contextMenu?: ContextMenuItem[];
    /**
     * 作成時にウィンドウにフォーカスを当てるか
     */
    focus?: boolean;
    /**
     * ウィンドウを常に最前面に表示するかどうか
     */
    alwaysOnTop?: boolean;
    /**
     * ドラッグ・リサイズ時にゴーストウィンドウ（輪郭）を表示するか
     */
    useGhostWindow?: boolean;
    /**
     * iframeや非同期コンテンツの読み込み中にローディングインジケーターを表示するか
     */
    showLoadingIndicator?: boolean;
    /**
     * ウィンドウの不透明度 (0.0 - 1.0)
     */
    opacity?: number;
    /**
     * ウィンドウをモーダルとして扱うか
     * trueの場合、このウィンドウ以外は操作できなくなります。
     */
    modal?: boolean;
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
    _isPopup?: boolean;
    /**
     * 親ウィンドウのインスタンス (内部利用)
     */
    _parent?: IWindow | null;
    /**
     * タスクバーのアイテム要素 (内部利用)
     */
    _taskbarItem?: HTMLElement | null;
}
declare const TIMEOUT_RESULT: unique symbol;
declare const CLOSE_BUTTON_RESULT: unique symbol;
type PopupResult = string | number | symbol | null;
interface PopupButton {
    text: string;
    value: PopupResult;
}
type PopupButtonPreset = "Ok" | "OkCancel" | "Yes" | "YesNo" | "YesNoCancel" | "Retry" | "RetryCancel" | "AbortRetryIgnore";
interface PopupOptions {
    message: string;
    title?: string;
    icon?: string | null;
    buttons?: PopupButton[] | PopupButtonPreset;
    timeout?: number;
    autoWidth?: boolean;
    focus?: boolean;
    alwaysOnTop?: boolean;
    modal?: boolean;
    /**
     * ウィンドウクローズ時
     */
    onClose?: (result: PopupResult) => void;
    /**
     * ウィンドウフォーカス時
     */
    onFocus?: (win: IWindow) => void;
    /**
     * ウィンドウブラー時
     */
    onBlur?: (win: IWindow) => void;
}
interface GlobalConfigOptions {
    windowSwitchShortcut?: string | null;
    /**
     * ウィンドウマネージャを内包する親要素。
     * セレクタ文字列またはHTMLElementを指定します。
     * 未指定の場合はbody直下に配置されます。
     */
    container?: string | HTMLElement;
    /**
     * `srcdoc` iframeでWinLetを自己読込する場合のライブラリのパス。
     */
    libraryPath?: string;
    /**
     * ウィンドウ操作時のアニメーションを有効にするか
     */
    enableAnimations?: boolean;
    /**
     * タスクバーを表示するか
     */
    enableTaskbar?: boolean;
    /**
     * モーダルウィンドウのフォーカストラップを有効にするか
     */
    enableFocusTrapping?: boolean;
    /**
     * 初期テーマ
     * 'dark'などの登録済みテーマ名、またはThemeオブジェクトを指定
     */
    theme?: string | Theme;
}
/**
 * テーマの定義
 */
interface Theme {
    name: string;
    variables: Record<string, string>;
}
interface WinLetApi {
    init: (options?: GlobalConfigOptions) => void;
    /**
     * ウィンドウを作成します。
     */
    createWindow: (options?: WindowOptions) => IWindow;
    /**
     * ポップアップウィンドウを作成します。
     */
    createPopup: (options: PopupOptions) => IWindow;
    /**
     * 指定されたIDのウィンドウインスタンスを取得します。
     * @param id - 取得するウィンドウのID
     */
    getWindow: (id: string) => IWindow | undefined;
    /**
     * 指定されたDOM要素を内包するウィンドウインスタンスを取得します。
     * 入れ子ウィンドウの場合、最も内側にある子ウィンドウを返します。
     * @param element - 検索の起点となるDOM要素
     * @returns 発見されたIWindowインスタンス、またはundefined
     */
    getWindowFromElement: (element: HTMLElement) => IWindow | undefined;
    /**
     * 現在アクティブなウィンドウを取得します。
     */
    getActiveWindow: () => IWindow | null;
    /**
     * ウィンドウのデフォルトの設定を変更します。
     */
    setDefaultConfig: (options: WindowOptions) => void;
    /**
     * グローバル設定を変更します。
     */
    setGlobalConfig: (options: GlobalConfigOptions) => void;
    /**
     * 表示テーマを登録します。
     * @param theme - 登録するテーマ
     */
    registerTheme: (theme: Theme) => void;
    /**
     * 登録済みのテーマ名の配列を取得します。
     * @returns 登録済みのテーマ名の配列
     */
    getRegisteredThemes: () => string[];
    /**
     * 表示テーマを変更します。
     * @param theme - 登録済みのテーマ名（'default', 'dark'など）またはThemeオブジェクト
     */
    setTheme: (theme: string | Theme) => void;
    /**
     * 現在の表示テーマを取得します。
     * @returns 現在の表示テーマ
     */
    getTheme: () => Theme | null;
    /**
     * WinLetのバージョンを取得します。
     */
    get version(): string;
    POPUP_TIMEOUT_RESULT: typeof TIMEOUT_RESULT;
    POPUP_CLOSE_BUTTON_RESULT: typeof CLOSE_BUTTON_RESULT;
}
declare global {
    interface Window {
        WinLet: WinLetApi;
    }
}

declare const api: WinLetApi;

export { api as default };
