const styleData: string = `
/* ========================================================================
    1. 基本設定・変数
   ======================================================================== */
:root {
    /* 基本色・シャドウ */
    --$[prefix]-text-color: #000;
    --$[prefix]-bg: #f0f0f0;
    --$[prefix]-border: #a0a0a0;
    --$[prefix]-shadow-color-light: rgba(0,0,0,0.15);
    --$[prefix]-shadow-color-strong: rgba(0,0,0,0.3);
    --$[prefix]-shadow-color-active: rgba(0,0,0,0.45);

    /* タイトルバー */
    --$[prefix]-title-bar-height: 32px;
    --$[prefix]-title-bar-bg: #e0e0e0;
    --$[prefix]-title-bar-active-bg: #0078d7;
    --$[prefix]-title-text-color: #000;
    --$[prefix]-title-text-active-color: #fff;

    /* コントロールボタン */
    --$[prefix]-control-bg: #d0d0d0;
    --$[prefix]-control-hover-bg: #e5e5e5;
    --$[prefix]-control-close-hover-bg: #e81123;
    --$[prefix]-control-close-hover-color: #fff;

    /* メニュー */
    --$[prefix]-menu-bg: #fff;
    --$[prefix]-menu-border: #ccc;
    --$[prefix]-menu-item-color: #000;
    --$[prefix]-menu-item-hover-bg: #0078d7;
    --$[prefix]-menu-item-hover-color: #fff;
    --$[prefix]-shortcut-text-color: #666;

    /* タブ */
    --$[prefix]-tab-bg: #dcdcdc;
    --$[prefix]-tab-active-bg: #f0f0f0;
    --$[prefix]-tab-border: #b0b0b0;
    --$[prefix]-tab-bar-bg: #e1e1e1;
    --$[prefix]-tab-close-btn-hover-bg: #ccc;
    --$[prefix]-tab-active-close-btn-hover-bg: #ddd;

    /* 検索ハイライト */
    --$[prefix]-search-highlight-bg: yellow;
    --$[prefix]-search-highlight-active-bg: orange;

    /* ポップアップボタン */
    --$[prefix]-popup-button-hover-bg: #e9e9e9;
    --$[prefix]-popup-button-hover-border-color: #bbb;

    /* リサイズハンドル */
    --$[prefix]-resize-handle-size: 8px;
    --$[prefix]-resize-handle-offset: -4px;
    --$[prefix]-resize-handle-distance: calc(var(--$[prefix]-resize-handle-offset) * -1);

    /* タスクバー */
    --$[prefix]-taskbar-bg: rgba(240, 240, 240, 0.9);
    --$[prefix]-taskbar-border: #a0a0a0;
    --$[prefix]-taskbar-item-bg: #d0d0d0;
    --$[prefix]-taskbar-item-active-bg: #0078d7;
    --$[prefix]-taskbar-item-active-color: #fff;
    --$[prefix]-taskbar-height: 40px;
    --$[prefix]-taskbar-width: 40px;

    /* ローディングインジケーター */
    --$[prefix]-loader-bg: rgba(255, 255, 255, 0.7);
    --$[prefix]-loader-color: var(--$[prefix]-title-bar-active-bg);

    /* その他 */
    --$[prefix]-scrollbar-thumb-bg: rgba(100, 100, 100, 0.5);
}

/* ========================================================================
    2. ユーティリティクラス
   ========================================================================= */
/**
 * テキスト選択を無効化
 */
.$[prefix]-us-none {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
/**
 * テキスト選択を有効化
 */
.$[prefix]-us-auto {
    user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
}

/* ========================================================================
    3. コンテナ
   ========================================================================= */
/**
 * 全てのウィンドウを内包する最上位コンテナ
 */
.$[prefix]-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    pointer-events: none;
    overflow: hidden;
    z-index: 999;
    display: flex;
    pointer-events: none;
}
.$[prefix]-container > * {
    pointer-events: all; /* 子要素(workspace, taskbar)のイベントは有効化 */
}
/**
 * 特定の要素内にネストされた場合のコンテナ
 */
.$[prefix]-container.$[prefix]-is-nested {
    position: absolute;
}

.$[prefix]-workspace {
    position: relative;
    flex-grow: 1; /* 残りのスペースをすべて占有 */
    overflow: hidden; /* ウィンドウがはみ出さないように */
    min-width: 0; /* flexアイテムの縮小問題を回避 */
    min-height: 0; /* flexアイテムの縮小問題を回避 */
    pointer-events: none;
}
/**
 * タブのドラッグ中にポインターイベントを有効化し、ドロップを受け付ける
 */
.$[prefix]-workspace.$[prefix]-is-tab-dragging {
    pointer-events: auto;
}

/* ========================================================================
    4. 仮想化技術
   ======================================================================== */
/**
 * 仮想化(アンロード)されたウィンドウ
 */
.$[prefix]-window.$[prefix]-is-virtualized > .$[prefix]-main-content {
    display: none;
}
.$[prefix]-window.$[prefix]-is-virtualized::after {
    content: "Unloaded";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--$[prefix]-border);
    font-size: 1.5em;
    font-weight: bold;
    pointer-events: none;
}

/**
 * 中断されたウィンドウ
 */
.$[prefix]-window.$[prefix]-is-suspended > .$[prefix]-main-content {
    display: none;
}
.$[prefix]-window.$[prefix]-is-suspended::after {
    content: "Suspended";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--$[prefix]-border);
    font-size: 1.5em;
    font-weight: bold;
    pointer-events: none;
    z-index: 15;
}

/**
 * フリーズされたウィンドウ
 */
.$[prefix]-window.$[prefix]-is-frozen > .$[prefix]-main-content {
    pointer-events: none; /* コンテンツの操作を無効化 */
}
.$[prefix]-window.$[prefix]-is-frozen > .$[prefix]-main-content iframe {
    visibility: hidden;
}
.$[prefix]-window.$[prefix]-is-frozen::after {
    content: "Frozen";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--$[prefix]-border);
    background: rgba(128, 128, 128, 0.1);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
    pointer-events: none;
    z-index: 15; /* ローダーより手前 */
}

/**
 * 仮想化時の操作制限
 */
.$[prefix]-window.$[prefix]-virtualization-lock .$[prefix]-menu-bar,
.$[prefix]-window.$[prefix]-virtualization-lock .$[prefix]-tab-bar,
.$[prefix]-window.$[prefix]-virtualization-lock .$[prefix]-custom-control-btn {
    pointer-events: none;
    opacity: 0.5;
}
/* ========================================================================
    5. ウィンドウ
   ======================================================================== */
/* --- ウィンドウ基本スタイル --- */
.$[prefix]-window {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    min-height: 150px;
    border: 1px solid var(--$[prefix]-border);
    background-color: var(--$[prefix]-bg);
    box-shadow: 0 5px 15px var(--$[prefix]-shadow-color-strong);
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;
    pointer-events: all;
    transition: opacity 0.25s, transform 0.25s;
    touch-action: none;
}

/* --- ウィンドウ状態別スタイル --- */
/**
 * 最小化中のウィンドウ
 */
.$[prefix]-window.$[prefix]-is-minimizing {
    transform: scale(0);
    opacity: 0;
    pointer-events: none;
}

/**
 * 最小化完了状態のウィンドウ
 */
.$[prefix]-window.$[prefix]-minimized {
    /* アニメーションの最終状態を維持 */
    transform: scale(0);
    opacity: 0;
    /* 表示と操作を無効化 */
    display: none;
    pointer-events: none;
}
/**
 * 最大化されたウィンドウ
 */
.$[prefix]-window.$[prefix]-maximized {
    border-radius: 0;
}
/**
 * 最大化状態ではリサイズハンドルを非表示
 */
.$[prefix]-window.$[prefix]-maximized > .$[prefix]-resize-handle {
    display: none;
}
/**
 * 復元中のアニメーション（現在は状態を示すマーカーとしてのみ利用）
 */
.$[prefix]-window.$[prefix]-is-restoring {
    /* The transition is now handled by the base .winlet-window class */
}

/**
 * ドラッグ中・リサイズ中のトランジションを短縮し、操作性を向上
 */
.$[prefix]-window.$[prefix]-is-dragging,
.$[prefix]-window.$[prefix]-is-resizing {
    transition: opacity 0.1s, transform 0.1s;
}

/**
 * アクティブ（フォーカスされている）ウィンドウ
 */
.$[prefix]-window.$[prefix]-active {
    box-shadow: 0 8px 25px var(--$[prefix]-shadow-color-active); /* アクティブ時のシャドウ */
}
/**
 * アクティブ（フォーカスされている）ウィンドウのタイトルバー
 */
.$[prefix]-window.$[prefix]-active .$[prefix]-title-bar {
    background-color: var(--$[prefix]-title-bar-active-bg);
    color: var(--$[prefix]-title-text-active-color);
}
.$[prefix]-window.$[prefix]-active .$[prefix]-title-bar .$[prefix]-title {
    color: var(--$[prefix]-title-text-active-color);
}

/* --- ウィンドウ特殊スタイル --- */
/**
 * 「常に手前に表示」が有効なウィンドウ
 */
.$[prefix]-window.$[prefix]-always-on-top .$[prefix]-title-bar {
    background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 4px,
        rgba(255, 255, 255, 0.05) 4px,
        rgba(255, 255, 255, 0.05) 8px
    );
}

/**
 * ウィンドウシェイクアニメーション
 */
@keyframes $[prefix]-shake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
}
.$[prefix]-window.$[prefix]-is-shaking {
    animation: $[prefix]-shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}

/* ========================================================================
    6. ゴーストウィンドウ
   ======================================================================== */
/**
 * ドラッグ・リサイズ時に表示される輪郭
 */
.$[prefix]-ghost-window {
    position: absolute;
    box-sizing: border-box;
    border: 2px dashed var(--$[prefix]-title-bar-active-bg);
    background-color: rgba(0, 120, 215, 0.1);
    z-index: 99999;
    pointer-events: none;
}

/* ========================================================================
    7. タイトルバー
   ======================================================================== */
/* --- タイトルバー基本スタイル --- */
.$[prefix]-title-bar {
    display: flex;
    align-items: center;
    height: var(--$[prefix]-title-bar-height);
    background-color: var(--$[prefix]-title-bar-bg);
    color: var(--$[prefix]-title-text-color);
    cursor: move;
    flex-shrink: 0;
    touch-action: none;
}
/**
 * コントロールが左側にある場合のタイトルバー
 */
.$[prefix]-title-bar.$[prefix]-controls-left {
    flex-direction: row-reverse;
}

/* --- アイコン・タイトル --- */
.$[prefix]-icon {
    min-width: calc(var(--$[prefix]-title-bar-height) * 0.75);
    height: calc(var(--$[prefix]-title-bar-height) * 0.75);
    margin: 0 4px;
    pointer-events: none;
    flex-shrink: 0;
}

.$[prefix]-icon:empty {
    display: none;
}

.$[prefix]-icon i {
    font-size: calc(var(--$[prefix]-title-bar-height) * 0.5);
    line-height: calc(var(--$[prefix]-title-bar-height) * 0.75);
    text-align: center;
    display: block;
    width: 100%;
    height: 100%;
}

.$[prefix]-icon img {
    display: block;
    width: 100%;
    height: 100%;
}

.$[prefix]-title {
    flex-grow: 1;
    padding: 0 8px;
    font-family: sans-serif;
    font-size: calc(var(--$[prefix]-title-bar-height) * 0.44);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
}

.$[prefix]-title-bar.$[prefix]-controls-left .$[prefix]-title {
    text-align: right;
}

/* --- コントロールボタン --- */
.$[prefix]-controls {
    display: flex;
    height: 100%;
    margin-left: auto;
    flex-shrink: 0;
}

.$[prefix]-title-bar.$[prefix]-controls-left .$[prefix]-controls {
    margin-left: 0;
    margin-right: auto;
    flex-direction: row-reverse;
}

.$[prefix]-control-btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: calc(var(--$[prefix]-title-bar-height) * 1.3);
    height: 100%;
    border: none;
    border-radius: 0;
    box-sizing: border-box;
    background-color: transparent;
    font-size: calc(var(--$[prefix]-title-bar-height) * 0.5);
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    font-family: sans-serif;
    transition: background-color 0.2s;
    touch-action: auto;
    padding: 0;
    margin: 0;
    color: inherit;
}

.$[prefix]-custom-control-btn > * {
    pointer-events: none;
}

.$[prefix]-control-btn:hover {
    background-color: var(--$[prefix]-control-hover-bg);
}

.$[prefix]-control-btn.$[prefix]-close-btn:hover {
    background-color: var(--$[prefix]-control-close-hover-bg);
    color: var(--$[prefix]-control-close-hover-color);
}

.$[prefix]-refresh-btn {
    display: none;
}

.$[prefix]-window.$[prefix]-is-virtualized-manual .$[prefix]-refresh-btn {
    display: inline-flex;
}

/* ========================================================================
    8. メインコンテンツエリア
   ======================================================================== */
.$[prefix]-main-content {
    all: initial;
    position: relative;
    display:flex;
    color: var(--$[prefix]-text-color);
    flex-direction:column;
    flex-grow:1;
    overflow:hidden;
}

.$[prefix]-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    overflow: auto;
    touch-action: auto;
}

.$[prefix]-content iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

/* --- ローディングインジケーター --- */
.$[prefix]-loader-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--$[prefix]-loader-bg);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 20;
}
@keyframes $[prefix]-spinner-rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.$[prefix]-loader-spinner {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-bottom-color: var(--$[prefix]-loader-color);
    animation: $[prefix]-spinner-rotation 1s linear infinite;
}

.$[prefix]-canvas-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 10;
}
.$[prefix]-canvas-overlay img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* ========================================================================
    9. メニューバー
   ======================================================================== */
.$[prefix]-menu-bar {
    color: var(--$[prefix]-menu-item-color);
    display: flex;
    background-color: var(--$[prefix]-bg);
    padding: 2px;
    flex-shrink: 0;
    border-bottom: 1px solid var(--$[prefix]-border);
    touch-action: auto;
}

.$[prefix]-menu-item {
    font-family: sans-serif;
    font-size: clamp(0px , calc(var(--winlet-title-bar-height) * 0.6), 14px);
    padding: 4px 8px;
    cursor: default;
    position: relative;
}

.$[prefix]-menu-item:hover {
    background-color: var(--$[prefix]-menu-item-hover-bg);
    color: var(--$[prefix]-menu-item-hover-color);
}

/* --- ドロップダウンメニュー --- */
.$[prefix]-menu-dropdown {
    color: var(--$[prefix]-menu-item-color);
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--$[prefix]-menu-bg);
    border: 1px solid var(--$[prefix]-menu-border);
    box-shadow: 0 2px 8px var(--$[prefix]-shadow-color-light);
    list-style: none;
    margin: 0;
    padding: 4px 0;
    min-width: 150px;
    z-index: 10;
    touch-action: auto;
}

.$[prefix]-menu-dropdown li {
    padding: 0 20px;
    font-size: 14px;
    cursor: pointer;
}

.$[prefix]-menu-dropdown li:hover {
    background-color: var(--$[prefix]-menu-item-hover-bg);
    color: var(--$[prefix]-menu-item-hover-color);
}

.$[prefix]-menu-dropdown li.$[prefix]-separator {
    height: 1px;
    background-color: var(--$[prefix]-menu-border);
    margin: 4px 0;
    padding: 0;
}

.$[prefix]-menu-dropdown-item {
    display: flex;
    line-height: 1.6em;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    white-space: nowrap;
}

/* --- サブメニュー --- */
.$[prefix]-menu-dropdown li.$[prefix]-has-submenu {
    position: relative;
}
.$[prefix]-menu-dropdown li.$[prefix]-has-submenu::after {
    content: '▶';
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: calc(var(--winlet-title-bar-height) * -0.5);
    font-size: 0.8em;
    color: inherit;
}
/**
 * ネストされたサブメニューの表示位置
 */
.$[prefix]-menu-dropdown li.$[prefix]-has-submenu > .$[prefix]-menu-dropdown {
    top: -5px; /* liのpaddingを考慮 */
    left: 100%;
}
/**
 * サブメニューはホバーで開く
 */
.$[prefix]-menu-dropdown li.$[prefix]-has-submenu:hover > .$[prefix]-menu-dropdown {
    display: block;
}

/* --- ショートカットテキスト --- */
.$[prefix]-shortcut-text {
    color: var(--$[prefix]-shortcut-text-color);
    margin-left: 1em;
}
.$[prefix]-menu-dropdown li:hover .$[prefix]-shortcut-text {
    color: inherit;
}

/* --- タブ --- */
.$[prefix]-tab-bar {
    color: var(--$[prefix]-menu-item-color);
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
    display: flex;
    background-color: var(--$[prefix]-tab-bar-bg);
    flex-shrink: 0;
    align-items: flex-end;
    touch-action: auto;
}

.$[prefix]-tab-bar::-webkit-scrollbar{
    width: 6px;
    height: 6px;
}

.$[prefix]-tab-bar::-webkit-scrollbar-thumb {
    background-color: var(--$[prefix]-scrollbar-thumb-bg);
    border-radius: 3px;
}

.$[prefix]-tab-bar::-webkit-scrollbar-track {
    background-color: transparent;
}

/* --- タブ --- */
.$[prefix]-tab {
    white-space: nowrap;
    padding: 8px 16px;
    font-family: sans-serif;
    font-size: 14px;
    cursor: pointer;
    border-right: 1px solid var(--$[prefix]-tab-border);
    background-color: var(--$[prefix]-tab-bg);
}

.$[prefix]-tab.$[prefix]-active {
    background-color: var(--$[prefix]-tab-active-bg);
    border-bottom: 2px solid var(--$[prefix]-title-bar-active-bg);
}

.$[prefix]-tab.$[prefix]-active .$[prefix]-tab-close-btn:hover {
    background-color: var(--$[prefix]-tab-active-close-btn-hover-bg);
}

/**
 * ドラッグ中のタブのスタイル
 */
.$[prefix]-tab.$[prefix]-dragging {
    opacity: 0.5;
}

/* --- タブ関連ボタン --- */
/**
 * タブの閉じるボタン
 */
.$[prefix]-tab-close-btn {
    margin-left: 8px;
    padding: 0 4px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
}
.$[prefix]-tab-close-btn:hover {
    background-color: var(--$[prefix]-tab-close-btn-hover-bg);
}

/**
 * タブ追加ボタン
 */
.$[prefix]-tab-add-btn {
    padding: 8px;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid var(--$[prefix]-tab-border);
}
.$[prefix]-tab-add-btn:hover {
    background-color: var(--$[prefix]-title-bar-bg);
}

/* --- タブコンテンツ --- */
.$[prefix]-tab-content {
    display: none;
}

.$[prefix]-tab-content.$[prefix]-active {
    display: block;
    width: 100%;
    height: 100%;
}

/* ========================================================================
    10. 分割ビュー (Split View)
   ======================================================================== */
.$[prefix]-split-view {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.$[prefix]-split-view-horizontal {
    flex-direction: row;
}
.$[prefix]-split-view-vertical {
    flex-direction: column;
}
.$[prefix]-split-pane {
    position: relative;
    overflow: auto;
}
.$[prefix]-split-resizer {
    background-color: var(--$[prefix]-border);
    flex-shrink: 0;
    z-index: 1;
    transition: background-color 0.2s;
}
.$[prefix]-split-resizer:hover {
    background-color: var(--$[prefix]-title-bar-active-bg);
}
.$[prefix]-split-view-horizontal > .$[prefix]-split-resizer {
    width: 4px;
    cursor: col-resize;
}
.$[prefix]-split-view-vertical > .$[prefix]-split-resizer {
    height: 4px;
    cursor: row-resize;
}

/* ========================================================================
    11. ステータスバー (Status Bar)
   ======================================================================== */
.$[prefix]-statusbar {
    flex-shrink: 0;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    background-color: var(--$[prefix]-title-bar-bg);
    border-top: 1px solid var(--$[prefix]-border);
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    user-select: none;
}

/* ========================================================================
    12. ウィンドウ内検索 (In-window Search)
   ======================================================================== */
.$[prefix]-search-bar {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--$[prefix]-bg);
    border: 1px solid var(--$[prefix]-border);
    box-shadow: var(--$[prefix]-shadow-color-light) -2px 2px 5px;
    padding: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 3px;
    z-index: 80;
}
.$[prefix]-search-input {
    border: 1px solid var(--$[prefix]-border);
    padding: 2px 4px;
    width: 150px;
}
.$[prefix]-search-results {
    font-size: 12px;
    padding: 0 4px;
}
.$[prefix]-search-btn {
    border: 1px solid var(--$[prefix]-border);
    background-color: var(--$[prefix]-bg);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 12px;
    min-width: 22px;
}
.$[prefix]-search-btn:hover {
    background-color: var(--$[prefix]-popup-button-hover-bg);
}
.$[prefix]-search-btn-active {
    background-color: var(--$[prefix]-title-bar-active-bg);
    color: var(--$[prefix]-title-bar-active-color);
}
.$[prefix]-search-highlight {
    background-color: var(--$[prefix]-search-highlight-bg);
    color: black;
}
.$[prefix]-search-highlight-active {
    background-color: var(--$[prefix]-search-highlight-active-bg);
}

/* ========================================================================
    13. リサイズハンドル
   ======================================================================== */
.$[prefix]-resize-handle {
    position: absolute;
    z-index: 5;
    touch-action: none;
}

.$[prefix]-resize-handle.$[prefix]-n { top: var(--$[prefix]-resize-handle-offset); left: var(--$[prefix]-resize-handle-distance); right: var(--$[prefix]-resize-handle-distance); height: var(--$[prefix]-resize-handle-size); cursor: n-resize; }
.$[prefix]-resize-handle.$[prefix]-s { bottom: var(--$[prefix]-resize-handle-offset); left: var(--$[prefix]-resize-handle-distance); right: var(--$[prefix]-resize-handle-distance); height: var(--$[prefix]-resize-handle-size); cursor: s-resize; }
.$[prefix]-resize-handle.$[prefix]-w { top: var(--$[prefix]-resize-handle-distance); bottom: var(--$[prefix]-resize-handle-distance); left: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); cursor: w-resize; }
.$[prefix]-resize-handle.$[prefix]-e { top: var(--$[prefix]-resize-handle-distance); bottom: var(--$[prefix]-resize-handle-distance); right: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); cursor: e-resize; }
.$[prefix]-resize-handle.$[prefix]-nw { top: var(--$[prefix]-resize-handle-offset); left: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: nw-resize; }
.$[prefix]-resize-handle.$[prefix]-ne { top: var(--$[prefix]-resize-handle-offset); right: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: ne-resize; }
.$[prefix]-resize-handle.$[prefix]-sw { bottom: var(--$[prefix]-resize-handle-offset); left: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: sw-resize; }
.$[prefix]-resize-handle.$[prefix]-se { bottom: var(--$[prefix]-resize-handle-offset); right: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: se-resize; }

/* ========================================================================
    14. コンテキストメニュー
   ======================================================================== */
.$[prefix]-context-menu {
    color: var(--$[prefix]-menu-item-color);
    pointer-events: all;
    position: fixed;
    z-index: 10000;
    background-color: var(--$[prefix]-menu-bg);
    border: 1px solid var(--$[prefix]-menu-border);
    box-shadow: 0 2px 8px var(--$[prefix]-shadow-color-light);
    list-style: none;
    margin: 0;
    padding: 4px 0;
    min-width: 160px;
}
.$[prefix]-context-menu li {
    padding: 6px 24px;
    font-family: sans-serif;
    font-size: 14px;
    cursor: pointer;
}
.$[prefix]-context-menu li:hover {
    background-color: var(--$[prefix]-menu-item-hover-bg);
    color: var(--$[prefix]-menu-item-hover-color);
}
.$[prefix]-context-menu li.$[prefix]-separator {
    height: 1px;
    background-color: var(--$[prefix]-menu-border);
    margin: 4px 0;
    padding: 0;
}

/* ========================================================================
    15. ポップアップ
   ======================================================================== */
.$[prefix]-popup-window .$[prefix]-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
}
.$[prefix]-popup-message {
    font-family: sans-serif;
    font-size: 14px;
    line-height: 1.5;
    flex-grow: 1;
    word-wrap: break-word;
}
.$[prefix]-popup-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
    flex-shrink: 0;
    touch-action: auto;
}
.$[prefix]-popup-button {
    color: var(--$[prefix]-menu-item-color);
    min-width: 80px;
    padding: 8px 12px;
    margin: 0;
    border: 1px solid var(--$[prefix]-menu-border);
    border-radius: 3px;
    background-color: var(--$[prefix]-bg);
    cursor: pointer;
    font-size: 14px;
    box-shadow: 0 1px 1px var(--$[prefix]-shadow-color-light);
}
.$[prefix]-popup-button:hover {
    border-color: var(--$[prefix]-popup-button-hover-border-color);
    background-color: var(--$[prefix]-popup-button-hover-bg);
}
.$[prefix]-popup-button:active {
    background-color: var(--$[prefix]-tab-bg);
}

/* ========================================================================
    16. 統合スタイル (Merged Styles)
   ======================================================================== */
/* --- メニュー/タブ統合時の基本タイトルバー --- */
.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-title-bar,
.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-title-bar {
    height: auto;
    align-items: flex-end;
    padding: 0;
}

/* --- メニュー統合スタイル --- */
.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-icon {
    margin-block: auto;
}
.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-title {
    flex-grow: 1;
    margin-block: auto;
}
.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-menu-bar {
    border-bottom: none;
    background: transparent;
    padding: 0 6px;
    align-self: center;
}
.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-menu-item {
    line-height: var(--$[prefix]-title-bar-height);
    padding-top: 0;
    padding-bottom: 0;
}
/* アクティブウィンドウの統合メニューの文字色 */
.$[prefix]-window.$[prefix]-menu-style-merged.$[prefix]-active:not(.$[prefix]-tab-style-merged) .$[prefix]-menu-item {
    color: var(--winlet-menu-item-hover-color);
}
.$[prefix]-window.$[prefix]-menu-style-merged.$[prefix]-active:not(.$[prefix]-tab-style-merged) .$[prefix]-menu-item:hover {
    background-color: var(--$[prefix]-title-bar-bg);
    color: var(--$[prefix]-menu-item-color);
}

/* --- タブ統合スタイル (Chrome風) --- */
.$[prefix]-window.$[prefix]-tab-style-merged.$[prefix]-window.$[prefix]-active .$[prefix]-title-bar {
    background-color: var(--$[prefix]-title-bar-bg);
}
.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-title {
    display: none;
}

.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-bar {
    background-color: transparent;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;
    align-items: flex-end;
    height: calc(var(--$[prefix]-title-bar-height) + 4px);
    margin: 0;
    order: 1; /* controlsより前に配置 */
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-bar::-webkit-scrollbar{
    display: none;
}
.$[prefix]-window.$[prefix]-title-bar.$[prefix]-controls-left .$[prefix]-tab-bar {
    order: -1;
}

.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab {
    border: 1px solid var(--$[prefix]-border);
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    margin-top: 4px;
    margin-left: -1px;
    position: relative;
    bottom: -1px;
}
.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab.$[prefix]-active {
    background-color: var(--$[prefix]-bg);
    border-color: var(--$[prefix]-border);
    border-bottom: 1px solid var(--$[prefix]-bg);
    z-index: 2;
}

.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-add-btn {
    border: none;
    align-self: center;
}
.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-main-content {
    border-top: none;
}

/* --- 統合時のコントロールボタン --- */
.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-controls,
.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-controls {
    align-self: flex-start;
    order: 2;
}

/* ========================================================================
    17. タスクバー
   ======================================================================== */
.$[prefix]-taskbar {
    position: absolute;
    background-color: var(--$[prefix]-taskbar-bg);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 5px;
    z-index: 50000;
    flex-shrink: 0;
    display: flex;
    gap: 5px;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    backdrop-filter: blur(5px);
    pointer-events: all;
}
.$[prefix]-taskbar::-webkit-scrollbar{
    display: none;
}

/* --- 位置 --- */
.$[prefix]-taskbar.$[prefix]-taskbar-bottom {
    bottom: 0;
    left: 0;
    border-top: 1px solid var(--$[prefix]-taskbar-border);
}
.$[prefix]-taskbar.$[prefix]-taskbar-top {
    top: 0;
    left: 0;
    border-bottom: 1px solid var(--$[prefix]-taskbar-border);
}
.$[prefix]-taskbar.$[prefix]-taskbar-left {
    top: 0;
    left: 0;
    border-right: 1px solid var(--$[prefix]-taskbar-border);
}
.$[prefix]-taskbar.$[prefix]-taskbar-right {
    top: 0;
    right: 0;
    border-left: 1px solid var(--$[prefix]-taskbar-border);
}

.$[prefix]-taskbar.$[prefix]-taskbar-bottom,
.$[prefix]-taskbar.$[prefix]-taskbar-top {
    --$[prefix]-taskbar-icon-size: var(--$[prefix]-taskbar-height);
    width: 100%;
    height: var(--$[prefix]-taskbar-height);
    flex-direction: row;
}
.$[prefix]-taskbar.$[prefix]-taskbar-left,
.$[prefix]-taskbar.$[prefix]-taskbar-right {
    --$[prefix]-taskbar-icon-size: var(--$[prefix]-taskbar-width);
    width: var(--$[prefix]-taskbar-width);
    height: 100%;
    flex-direction: column;
}


.$[prefix]-taskbar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: calc(var(--winlet-taskbar-icon-size) - 6px);
    padding: 0 10px;
    border-radius: 3px;
    background-color: var(--$[prefix]-taskbar-item-bg);
    cursor: pointer;
    flex-shrink: 0;
    max-width: 150px;
    transition: background-color 0.2s;
    font-family: sans-serif;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
}
/* 縦向きタスクバーのアイテム */
.$[prefix]-taskbar.$[prefix]-taskbar-left .$[prefix]-taskbar-item,
.$[prefix]-taskbar.$[prefix]-taskbar-right .$[prefix]-taskbar-item {
    width: calc(var(--winlet-taskbar-icon-size) - 6px);
    height: auto;
    min-height: 40px;
    max-width: none;
    padding: 10px 0;
    writing-mode: vertical-rl;
}

.$[prefix]-taskbar-item-icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.$[prefix]-taskbar-item-icon img {
    width: calc(var(--winlet-taskbar-icon-size) - 6px);
    height: calc(var(--winlet-taskbar-icon-size) - 6px);
    object-fit: contain;
}
.$[prefix]-taskbar-item-icon i {
    font-size: calc((var(--winlet-taskbar-icon-size) - 12px) * 0.8);
    line-height: calc(var(--winlet-taskbar-icon-size) - 18px);
    text-align: center;
    object-fit: contain;
}
.$[prefix]-taskbar-item.$[prefix]-icon-only {
    width: calc(var(--winlet-taskbar-icon-size) - 6px);
    height: calc(var(--winlet-taskbar-icon-size) - 6px);
    padding: 6px;
}
/* 縦向きアイコンモード */
.$[prefix]-taskbar.$[prefix]-taskbar-left .$[prefix]-taskbar-item.$[prefix]-icon-only,
.$[prefix]-taskbar.$[prefix]-taskbar-right .$[prefix]-taskbar-item.$[prefix]-icon-only {
    width: calc(var(--winlet-taskbar-icon-size) - 6px);
    height: calc(var(--winlet-taskbar-icon-size) - 6px);
}

.$[prefix]-taskbar-item.$[prefix]-active {
    background-color: var(--$[prefix]-taskbar-item-active-bg);
    color: var(--$[prefix]-taskbar-item-active-color);
}
.$[prefix]-taskbar-item.$[prefix]-minimized {
    opacity: 0.7;
}

/**
 * 仮想化されたウィンドウを示すタスクバーアイテム
 */
.$[prefix]-taskbar-item.$[prefix]-virtualized {
    filter: grayscale(80%);
    opacity: 0.7;
    font-style: italic;
}
.$[prefix]-taskbar-item.$[prefix]-virtualized .$[prefix]-taskbar-item-icon img {
    width: calc(var(--winlet-taskbar-icon-size) - 9px);
    height: calc(var(--winlet-taskbar-icon-size) - 9px);
}
.$[prefix]-taskbar-item.$[prefix]-virtualized .$[prefix]-taskbar-item-icon i {
    font-size: calc((var(--winlet-taskbar-icon-size) - 18px) * 0.8);
    line-height: calc(var(--winlet-taskbar-icon-size) - 27px);
}

/* ========================================================================
    18. モバイル・タッチデバイス対応
   ======================================================================== */
@media (pointer: coarse), (max-width: 768px) {
    /* リサイズハンドルとコントロールボタンを大きくして操作しやすくする */
    :root {
        --$[prefix]-resize-handle-size: 16px;
        --$[prefix]-resize-handle-offset: -8px;
    }
    .$[prefix]-control-btn {
        width: calc(var(--$[prefix]-title-bar-height) * 1.5);
    }
}

/* ========================================================================
    19. ハイコントラストモード対応
   ======================================================================== */
/* high-contrast.tsと合わせる */
@media (prefers-contrast: more) {
    .$[prefix]-window,
    .$[prefix]-window.$[prefix]-active {
        box-shadow: none;
    }
    .$[prefix]-window.$[prefix]-active {
        border: 2px solid var(--$[prefix]-title-bar-active-bg);
    }
}

/* ========================================================================
    20. アニメーション無効化
   ======================================================================== */
.$[prefix]-container.$[prefix]-animations-disabled .$[prefix]-window,
.$[prefix]-container.$[prefix]-animations-disabled .$[prefix]-window.$[prefix]-minimized,
.$[prefix]-container.$[prefix]-animations-disabled .$[prefix]-window.$[prefix]-maximized,
.$[prefix]-container.$[prefix]-animations-disabled .$[prefix]-window.$[prefix]-is-restoring {
    transition: none;
}

/* ========================================================================
    21. デバッグモード
   ======================================================================== */
.$[prefix]-debug-overlay {
    display: none;
    position: absolute;
    top: calc(var(--$[prefix]-title-bar-height) + 5px);
    left: 5px;
    background: rgba(0,0,0,0.5);
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-family: monospace;
    font-size: 12px;
    line-height: 1.4;
    pointer-events: none;
    z-index: 100;
    white-space: pre;
}

.$[prefix]-container.$[prefix]-debug-mode-enabled .$[prefix]-debug-overlay {
    display: block;
}
`;

export default styleData;
