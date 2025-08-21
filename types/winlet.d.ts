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
/**
 * 分割ビューのペイン定義
 */
interface SplitViewPane {
    id: string;
    content: WindowContentOptions;
    size?: string;
    minSize?: string;
    resizable?: boolean;
}
/**
 * 分割ビューのレイアウト定義
 */
interface SplitViewOptions {
    direction: "horizontal" | "vertical";
    panes: SplitViewPane[];
}
/**
 * ステータスバーのオプション
 */
interface StatusBarOptions {
    /**
     * ステータスバーを表示するかどうか
     * @default false
     */
    enabled?: boolean;
    /**
     * 初期テキスト
     */
    text?: string;
    /**
     * HTMLを許可するか
     * @default false
     */
    allowHTML?: boolean;
}
/**
 * ウィンドウ内検索機能のオプション
 */
interface SearchOptions {
    /**
     * 検索UIを有効にするか
     * @default true
     */
    enabled?: boolean;
    /**
     * 検索時に大文字小文字を区別するか
     * @default false
     */
    caseSensitive?: boolean;
    /**
     * 「大文字/小文字の区別」ボタンを表示するか
     * @default true
     */
    showCaseSensitiveButton?: boolean;
    /**
     * 「正規表現」ボタンを表示するか
     * @default true
     */
    showRegexButton?: boolean;
    /**
     * 「単語単位」ボタンを表示するか
     * @default true
     */
    showWholeWordButton?: boolean;
    /**
     * 検索対象のセレクタ
     * 指定しない場合はウィンドウのコンテンツ全体
     */
    targetSelector?: string;
}
interface ListenerOptions {
    once?: boolean;
}
interface WindowEventMap {
    open: (win: IWindow) => void;
    close: (win: IWindow) => void;
    "before-close": (win: IWindow) => boolean | void;
    focus: (win: IWindow) => void;
    blur: (win: IWindow) => void;
    "move-start": (win: IWindow) => void;
    "move-end": (win: IWindow) => void;
    move: (win: IWindow) => void;
    "resize-start": (win: IWindow) => void;
    "resize-end": (win: IWindow) => void;
    resize: (win: IWindow) => void;
    reload: (win: IWindow) => boolean | void;
    [key: string]: (...args: any[]) => any;
}
interface GlobalEventMap {
    "window-created": (win: IWindow) => void;
    "window-destroyed": (win: IWindow) => void;
    [key: string]: (...args: any[]) => any;
}
interface IWindow {
    readonly id: string;
    options: Required<WindowOptions>;
    el: HTMLElement;
    state: WindowState;
    on<K extends keyof WindowEventMap>(eventName: K, listener: WindowEventMap[K], options?: ListenerOptions): void;
    off<K extends keyof WindowEventMap>(eventName: K, listener: WindowEventMap[K]): void;
    emit<K extends keyof WindowEventMap>(eventName: K, ...args: Parameters<WindowEventMap[K]>): (ReturnType<WindowEventMap[K]>)[] | undefined;
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
    /**
     * ウィンドウの内容をキャプチャして、画像データとして取得します。
     * @returns PNG形式のデータURLを含むPromise
     * @see https://github.com/niklasvh/html2canvas
     */
    capture(): Promise<string>;
    /**
     * ウィンドウのコンテンツを印刷します。
     */
    print(): void;
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
     * ウィンドウをリロードします。
     */
    reload(): void;
    /**
     * ウィンドウのコンテンツ要素（またはiframe要素）を取得します。
     * @returns コンテンツを内包するHTMLElement、またはiframeウィンドウの場合はHTMLIFrameElement
     */
    getContent(): HTMLElement | HTMLIFrameElement;
    /**
     * ステータスバーのテキストを更新します。
     * @param text - 表示するテキストまたはHTML
     */
    setStatusBarText(text: string): void;
    /**
     * ウィンドウ内検索UIを開きます。
     */
    openSearch(): void;
    /**
     * ウィンドウ内検索UIを閉じます。
     */
    closeSearch(): void;
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
     * このウィンドウの内部に新しいポップアップを作成します。
     * @param options - 新しいポップアップのオプション
     * @returns Promiseオブジェクト
     */
    createAsyncPopup(options: PopupOptions): Promise<PopupResult>;
    /**
     * ウィンドウのオプションを動的に変更します。
     *
     * (初期化時に使用されるオプションは変更されず、警告なども出力されません。)
     *
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
interface CustomControlButton {
    /**
     * ボタンを識別するための一意の名前
     */
    name: string;
    /**
     * ボタンのHTMLコンテンツ (例: '<i class="fa fa-question"></i>')
     */
    html: string;
    /**
     * ボタンのツールチップテキスト
     */
    title?: string;
    /**
     * ボタンクリック時のアクション
     */
    action: (win: IWindow) => void;
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
     * ウィンドウが仮想化の対象となるかどうか。
     * `enableVirtualization` がtrueの場合にのみ有効です。
     * @default true
     */
    virtualizable?: boolean;
    /**
     * ウィンドウのオプション
     */
    windowOptions?: {
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
         * ウィンドウを常に最前面に表示するかどうか
         */
        alwaysOnTop?: boolean;
        /**
         * ドラッグ・リサイズ時にゴーストウィンドウ（輪郭）を表示するか
         */
        useGhostWindow?: boolean;
        /**
         * 作成時にウィンドウにフォーカスを当てるか
         */
        focus?: boolean;
        /**
         * ウィンドウの不透明度 (0.0 - 1.0)
         */
        opacity?: number;
        /**
         * ウィンドウをモーダルとして扱うか
         * trueの場合、このウィンドウ以外は操作できなくなります。
         */
        modal?: boolean;
    };
    /**
     * ウィンドウのコンテンツ
     */
    content?: WindowContentOptions;
    /**
     * 分割ビューの定義。
     * `content`オプションと同時に指定された場合、こちらが優先されます。
     */
    splitView?: SplitViewOptions;
    /**
     * ステータスバーのオプション
     */
    statusBar?: StatusBarOptions;
    /**
     * ウィンドウ内検索のオプション
     */
    search?: SearchOptions;
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
     * タイトルバーに追加するカスタムコントロールボタン
     */
    customControls?: CustomControlButton[];
    /**
     * ショートカットキーを有効化
     */
    enableShortcuts?: boolean;
    /**
     * コントロールの位置
     */
    controlsPosition?: "left" | "right";
    /**
     * iframeや非同期コンテンツの読み込み中にローディングインジケーターを表示するか
     */
    showLoadingIndicator?: boolean;
    /**
     * ウィンドウオープン時
     */
    onOpen?: (win: IWindow) => void;
    /**
     * ウィンドウクローズ時
     */
    onClose?: (win: IWindow) => void;
    /**
     * ウィンドウが閉じる前に呼び出され、falseを返すとクローズをキャンセルします。
     */
    onBeforeClose?: (win: IWindow) => boolean | void;
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
     * ウィンドウの移動開始時
     */
    onMoveStart?: (win: IWindow) => void;
    /**
     * ウィンドウの移動終了時
     */
    onMoveEnd?: (win: IWindow) => void;
    /**
     * ウィンドウのリサイズ開始時
     */
    onResizeStart?: (win: IWindow) => void;
    /**
     * ウィンドウのリサイズ終了時
     */
    onResizeEnd?: (win: IWindow) => void;
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
interface TaskbarOptions {
    /**
     * タスクバーの表示位置
     * @default 'bottom'
     */
    position?: "top" | "bottom" | "left" | "right";
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
     * @default true
     */
    enableAnimations?: boolean;
    /**
     * タスクバーを表示するか
     * @default false
     */
    enableTaskbar?: boolean;
    /**
     * タスクバーの設定
     */
    taskbar?: TaskbarOptions;
    /**
     * モーダルウィンドウのフォーカストラップを有効にするか
     * @default true
     */
    enableFocusTrapping?: boolean;
    /**
     * ウィンドウ仮想化を有効にするか。
     * 大量のウィンドウを扱う際のパフォーマンスを向上させます。
     * @default true
     */
    enableVirtualization?: boolean;
    /**
     * 仮想化されたウィンドウをタスクバーで視覚的に示すか
     * @default true
     */
    indicateVirtualizationInTaskbar?: boolean;
    /**
     * 仮想化がアクティブになる最小ウィンドウ数。
     * この数を超えると、非表示のウィンドウの仮想化が開始されます。
     * @default 5
     */
    virtualizationThreshold?: number;
    /**
     * 最小化されたウィンドウを仮想化するまでの遅延時間（ミリ秒）。
     * `enableVirtualization` がtrueの場合にのみ有効です。
     * @default 10000
     */
    virtualizationDelay?: number;
    /**
     * 初期テーマ
     * 'dark'などの登録済みテーマ名、またはThemeオブジェクトを指定
     * @default 'default'
     */
    theme?: string | Theme;
    /**
     * Bootstrapのカラースキームを自動検出し、テーマを同期させるか
     * @default true
     */
    autoDetectBootstrapTheme?: boolean;
    /**
     * デバッグモードを有効にするか。
     * ウィンドウにID、座標、状態などのデバッグ情報をオーバーレイ表示します。
     * @default false
     */
    enableDebugMode?: boolean;
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
    on<K extends keyof GlobalEventMap>(eventName: K, listener: GlobalEventMap[K], options?: ListenerOptions): void;
    off<K extends keyof GlobalEventMap>(eventName: K, listener: GlobalEventMap[K]): void;
    emit<K extends keyof GlobalEventMap>(eventName: K, ...args: Parameters<GlobalEventMap[K]>): (ReturnType<GlobalEventMap[K]>)[] | undefined;
    /**
     * ウィンドウを作成します。
     * @param options - 新しいウィンドウのオプション
     * @returns 作成されたIWindowインスタンス
     */
    createWindow: (options?: WindowOptions) => IWindow;
    /**
     * ポップアップウィンドウを作成します。
     * @param options - 新しいポップアップのオプション
     * @returns 作成されたIWindowインスタンス
     */
    createPopup: (options: PopupOptions) => IWindow;
    /**
     * ポップアップウィンドウを作成します。
     * @param options - 新しいポップアップのオプション
     * @returns Promiseオブジェクト
     */
    createAsyncPopup(options: PopupOptions): Promise<PopupResult>;
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
     * タスクバーのアイテムを更新します。
     * @param win - 更新するウィンドウ
     * @param state - 更新する状態
     */
    updateTaskbarItem: (win: IWindow, state: "minimized" | "restored" | "titleChanged" | "iconChanged" | "virtualized" | "unvirtualized") => void;
    /**
     * ウィンドウのデフォルトの設定を変更します。
     * @param options - 新しいウィンドウのオプション
     */
    setDefaultConfig: (options: WindowOptions) => void;
    /**
     * グローバル設定を変更します。
     * @param options - 新しいウィンドウのオプション
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
        html2canvas?: (element: HTMLElement, options?: any) => Promise<HTMLCanvasElement>;
    }
}

declare const api: WinLetApi;

export { api as default };
