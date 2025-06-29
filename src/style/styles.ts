const styleData: string = `
:root {
    --$[prefix]-bg: #f0f0f0;
    --$[prefix]-border: #a0a0a0;
    --$[prefix]-title-bar-height: 32px;
    --$[prefix]-title-bar-bg: #e0e0e0;
    --$[prefix]-title-bar-active-bg: #0078d7;
    --$[prefix]-title-text-color: #000;
    --$[prefix]-title-text-active-color: #fff;
    --$[prefix]-control-bg: #d0d0d0;
    --$[prefix]-control-hover-bg: #e5e5e5;
    --$[prefix]-control-close-hover-bg: #e81123;
    --$[prefix]-control-close-hover-color: #fff;
    --$[prefix]-menu-bg: #fff;
    --$[prefix]-menu-border: #ccc;
    --$[prefix]-menu-item-color: #000;
    --$[prefix]-menu-item-hover-bg: #0078d7;
    --$[prefix]-menu-item-hover-color: #fff;
    --$[prefix]-tab-bg: #dcdcdc;
    --$[prefix]-tab-active-bg: #f0f0f0;
    --$[prefix]-tab-border: #b0b0b0;
}

.$[prefix]-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 999;
}

.$[prefix]-window {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    min-height: 150px;
    border: 1px solid var(--$[prefix]-border);
    background-color: var(--$[prefix]-bg);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    border-radius: 5px;
    overflow: hidden;
    pointer-events: all;
    transition: opacity 0.1s, transform 0.1s;
}

.$[prefix]-window.minimized {
    display: none; /* Simple hide, could be enhanced with a taskbar */
}

.$[prefix]-window.maximized {
    border-radius: 0;
    border: none;
}

/* Focus State */
.$[prefix]-window.active .$[prefix]-title-bar {
    background-color: var(--$[prefix]-title-bar-active-bg);
    color: var(--$[prefix]-title-text-active-color);
}
.$[prefix]-window.active .$[prefix]-title-bar .$[prefix]-title {
    color: var(--$[prefix]-title-text-active-color);
}

.$[prefix]-title-bar {
    display: flex;
    align-items: center;
    height: var(--$[prefix]-title-bar-height);
    background-color: var(--$[prefix]-title-bar-bg);
    color: var(--$[prefix]-title-text-color);
    user-select: none;
    cursor: move;
    flex-shrink: 0;
}

.$[prefix]-title-bar.controls-left {
    flex-direction: row-reverse;
}

.$[prefix]-icon {
    min-width: calc(var(--$[prefix]-title-bar-height) * 0.75);
    height: calc(var(--$[prefix]-title-bar-height) * 0.75);
    margin: 0 4px;
    pointer-events: none;
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

.$[prefix]-title-bar.controls-left .$[prefix]-title {
    text-align: right;
}

.$[prefix]-controls {
    display: flex;
    height: 100%;
    margin-left: auto;
}

.$[prefix]-title-bar.controls-left .$[prefix]-controls {
    margin-left: 0;
    margin-right: auto;
    flex-direction: row-reverse;
}

.$[prefix]-control-btn {
    width: calc(var(--$[prefix]-title-bar-height) * 1.3);
    height: 100%;
    border: none;
    box-sizing: border-box;
    background-color: transparent;
    font-size: calc(var(--$[prefix]-title-bar-height) * 0.5);
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    font-family: sans-serif;
    transition: background-color 0.2s;
}

.$[prefix]-control-btn:hover {
    background-color: var(--$[prefix]-control-hover-bg);
}

.$[prefix]-control-btn.$[prefix]-close-btn:hover {
    background-color: var(--$[prefix]-control-close-hover-bg);
    color: var(--$[prefix]-control-close-hover-color);
}

.$[prefix]-main-content {
    all: initial;
    display:flex;
    flex-direction:column;
    flex-grow:1;
    overflow:hidden;
}

.$[prefix]-menu-bar {
    display: flex;
    background-color: var(--$[prefix]-bg);
    padding: 2px;
    flex-shrink: 0;
    border-bottom: 1px solid var(--$[prefix]-border);
}

.$[prefix]-menu-item {
    font-family: sans-serif;
    font-size: 14px;
    padding: 4px 8px;
    cursor: default;
    position: relative;
}

.$[prefix]-menu-item:hover {
    background-color: var(--$[prefix]-menu-item-hover-bg);
    color: var(--$[prefix]-menu-item-hover-color);
}

.$[prefix]-menu-dropdown {
    color: var(--$[prefix]-menu-item-color);
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--$[prefix]-menu-bg);
    border: 1px solid var(--$[prefix]-menu-border);
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    list-style: none;
    margin: 0;
    padding: 4px 0;
    min-width: 150px;
    z-index: 10;
}

.$[prefix]-menu-dropdown li {
    padding: 5px 20px;
    font-size: 14px;
    cursor: pointer;
}

.$[prefix]-menu-dropdown li:hover {
    background-color: var(--$[prefix]-menu-item-hover-bg);
    color: var(--$[prefix]-menu-item-hover-color);
}

.$[prefix]-menu-dropdown li.separator {
    height: 1px;
    background-color: var(--$[prefix]-menu-border);
    margin: 4px 0;
    padding: 0;
}

.$[prefix]-menu-dropdown-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    white-space: nowrap;
}

/* --- メニュー --- */
/* サブメニューを持つ項目のスタイル */
.$[prefix]-menu-dropdown li.has-submenu {
    position: relative;
}
.$[prefix]-menu-dropdown li.has-submenu::after {
    content: '▶';
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -0.65em;
    font-size: 0.8em;
    color: inherit;
}

/* ネストされたサブメニューの表示位置 */
.$[prefix]-menu-dropdown li.has-submenu > .$[prefix]-menu-dropdown {
    top: -5px; /* liのpaddingを考慮 */
    left: 100%;
}

/* サブメニューはホバーで開く */
.$[prefix]-menu-dropdown li.has-submenu > .$[prefix]-menu-dropdown {
    display: none;
}

.$[prefix]-menu-dropdown li.has-submenu:hover > .$[prefix]-menu-dropdown {
    display: block;
}

/* ショートカットキーテキストのスタイル */
.$[prefix]-shortcut-text {
    color: #666;
    margin-left: 1em;
}
.$[prefix]-menu-dropdown li:hover .$[prefix]-shortcut-text {
    color: inherit;
}

/* --- タブ --- */
.$[prefix]-tab-bar {
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
    display: flex;
    background-color: #e1e1e1;
    flex-shrink: 0;
    align-items: flex-end;
}

.$[prefix]-tab-bar::-webkit-scrollbar{
    width: 6px;
    height: 6px;
}

.$[prefix]-tab-bar::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.5);
    border-radius: 3px;
}

.$[prefix]-tab-bar::-webkit-scrollbar-track {
    background-color: transparent;
}

.$[prefix]-tab {
    white-space: nowrap;
    padding: 8px 16px;
    font-family: sans-serif;
    font-size: 14px;
    cursor: pointer;
    border-right: 1px solid var(--$[prefix]-tab-border);
    background-color: var(--$[prefix]-tab-bg);
}

.$[prefix]-tab.active {
    background-color: var(--$[prefix]-tab-active-bg);
    border-bottom: 2px solid var(--$[prefix]-title-bar-active-bg);
}

.$[prefix]-tab.active .$[prefix]-tab-close-btn:hover {
    background-color: #ddd;
}

/* ドラッグ中のタブのスタイル */
.$[prefix]-tab.dragging {
    opacity: 0.5;
}
/* タブの閉じるボタン */
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
    background-color: #ccc;
}

.$[prefix]-tab-content {
    display: none;
}

.$[prefix]-tab-content.active {
    display: block;
    width: 100%;
    height: 100%;
}

/* タブ追加ボタン */
.$[prefix]-tab-add-btn {
    padding: 8px;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid var(--$[prefix]-tab-border);
}
.$[prefix]-tab-add-btn:hover {
    background-color: #e0e0e0;
}

.$[prefix]-content {
    flex-grow: 1;
    position: relative;
    overflow: auto;
}

.$[prefix]-content iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.$[prefix]-resize-handle {
    position: absolute;
    z-index: 5;
}

.$[prefix]-resize-handle.n { top: -4px; left: 0; right: 0; height: 8px; cursor: n-resize; }
.$[prefix]-resize-handle.s { bottom: -4px; left: 0; right: 0; height: 8px; cursor: s-resize; }
.$[prefix]-resize-handle.w { top: 0; bottom: 0; left: -4px; width: 8px; cursor: w-resize; }
.$[prefix]-resize-handle.e { top: 0; bottom: 0; right: -4px; width: 8px; cursor: e-resize; }
.$[prefix]-resize-handle.nw { top: -4px; left: -4px; width: 8px; height: 8px; cursor: nw-resize; }
.$[prefix]-resize-handle.ne { top: -4px; right: -4px; width: 8px; height: 8px; cursor: ne-resize; }
.$[prefix]-resize-handle.sw { bottom: -4px; left: -4px; width: 8px; height: 8px; cursor: sw-resize; }
.$[prefix]-resize-handle.se { bottom: -4px; right: -4px; width: 8px; height: 8px; cursor: se-resize; }

.$[prefix]-context-menu {
    color: var(--$[prefix]-menu-item-color);
    pointer-events: all;
    position: fixed;
    z-index: 10000;
    background-color: var(--$[prefix]-menu-bg);
    border: 1px solid var(--$[prefix]-menu-border);
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
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
.$[prefix]-context-menu li.separator {
    height: 1px;
    background-color: var(--$[prefix]-menu-border);
    margin: 4px 0;
    padding: 0;
}
`;

export default styleData;
