# winlet

[![GitHub License](https://img.shields.io/github/license/hi2ma-bu4/winlet)](https://github.com/hi2ma-bu4/winlet/blob/main/LICENSE)
[![GitHub Release](https://img.shields.io/github/v/release/hi2ma-bu4/winlet?label=latest)](https://github.com/hi2ma-bu4/winlet/releases/latest)
[![GitHub Tag](https://img.shields.io/github/v/tag/hi2ma-bu4/winlet?label=newest)](https://github.com/hi2ma-bu4/winlet/releases)
[![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/hi2ma-bu4/winlet?logo=jsdelivr&logoColor=%23fff)](https://cdn.jsdelivr.net/gh/hi2ma-bu4/winlet/dist/winlet.js)

[![GitHub repo size](https://img.shields.io/github/repo-size/hi2ma-bu4/winlet)](https://github.com/hi2ma-bu4/winlet)
[![GitHub file size in bytes](https://img.shields.io/github/size/hi2ma-bu4/winlet/dist/winlet.js?label=winlet.js)](https://github.com/hi2ma-bu4/winlet/blob/main/dist/winlet.js)
[![GitHub minify file size in bytes](https://img.shields.io/github/size/hi2ma-bu4/winlet/dist/winlet.min.js?label=winlet.min.js)](https://github.com/hi2ma-bu4/winlet/blob/main/dist/winlet.min.js)

A JavaScript window management library for building desktop-like interfaces in the browser.

ブラウザ上でデスクトップアプリのようなウィンドウUIを構築するための、JavaScript製ウィンドウ管理ライブラリです。

## Features

- ウィンドウの作成・管理
- ウィンドウの移動・リサイズ
- 最小化・最大化・復元
- フォーカス管理
- タスクバー
- HTML / iframe / `<template>` によるコンテンツ表示
- ポップアップウィンドウ
- 非同期ポップアップ
- ウィンドウ内への子ウィンドウ作成
- タブ
- Split View
- ウィンドウ内検索
- メニュー・コンテキストメニュー
- カスタムコントロール
- ステータスバー
- ウィンドウイベント
- グローバルイベント
- テーマ
- ウィンドウアニメーション
- ウィンドウの仮想化
- ウィンドウのキャプチャ
- 印刷
- 不透明度変更
- ショートカットキー
- TypeScript型定義

## Demo

winletでは、ブラウザ上に複数のウィンドウを持つデスクトップライクなUIを構築できます。

```text
┌─────────────────────────────────────────────────────────────┐
│ Desktop                                                     │
│                                                             │
│   ┌──────────────────────────┐   ┌──────────────────────┐   │
│   │ Hello                    │   │ Settings             │   │
│   │ ──────────────────────── │   │ ──────────────────── │   │
│   │                          │   │                      │   │
│   │  Window content          │   │  Settings            │   │
│   │                          │   │                      │   │
│   └──────────────────────────┘   └──────────────────────┘   │
│                                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ Hello              Settings                                 │
└─────────────────────────────────────────────────────────────┘
```

## Installation

### npm

GitHubリポジトリをnpmの依存関係として直接インストールできます。

```bash
npm install github:hi2ma-bu4/winlet
```

```js
import WinLet from "winlet";
```

### GitHub

リポジトリを直接取得してビルドすることもできます。

```bash
git clone https://github.com/hi2ma-bu4/winlet.git
cd winlet
npm install
npm run build
```

### CDN

ビルド済みのファイルはjsDelivr経由でも利用できます。

```html
<script src="https://cdn.jsdelivr.net/gh/hi2ma-bu4/winlet/dist/winlet.js"></script>
```

CDNから読み込んだ場合は、グローバルの `WinLet` からAPIを利用できます。

## Quick Start

```js
import WinLet from "winlet";

WinLet.init();

const win = WinLet.createWindow({
    title: "Hello, WinLet",
    width: 500,
    height: 300,
    content: {
        html: "<h1>Hello, WinLet!</h1>"
    }
});
```

CDNの場合も同様です。

```html
<script src="https://cdn.jsdelivr.net/gh/hi2ma-bu4/winlet/dist/winlet.js"></script>

<script>
    WinLet.init();

    const win = WinLet.createWindow({
        title: "Hello, WinLet",
        width: 500,
        height: 300,
        content: {
            html: "<h1>Hello, WinLet!</h1>"
        }
    });
</script>
```

`WinLet.init()` はDOMの準備ができた後に呼び出してください。

```js
document.addEventListener("DOMContentLoaded", () => {
    WinLet.init();
});
```

## Creating Windows

基本的なウィンドウは `createWindow()` で作成できます。

```js
const win = WinLet.createWindow({
    title: "My Window",
    width: 600,
    height: 400,
    content: {
        html: `
            <h1>Hello</h1>
            <p>This is a WinLet window.</p>
        `
    }
});
```

### Window ID

ウィンドウにIDを設定できます。

```js
const win = WinLet.createWindow({
    id: "settings",
    title: "Settings"
});
```

同じIDのウィンドウがすでに存在する場合の動作は `ifExists` で指定できます。

```js
WinLet.createWindow({
    id: "settings",
    ifExists: "focus",
    title: "Settings"
});
```

利用できる値は以下の通りです。

| 値 | 動作 |
| --- | --- |
| `focus` | 既存ウィンドウを復元してフォーカス |
| `prevent` | 新しいウィンドウを作成しない |
| `create` | IDの重複を無視して新しく作成 |

デフォルトは `focus` です。

## Position and Size

ウィンドウの位置とサイズを指定できます。

```js
WinLet.createWindow({
    x: 100,
    y: 80,
    width: 600,
    height: 400
});
```

位置には特定のキーワードも使用できます。

```js
WinLet.createWindow({
    x: "center",
    y: "center"
});
```

### Position

`x`:

- `number`
- `"center"`
- `"left"`
- `"right"`
- `"auto"`

`y`:

- `number`
- `"center"`
- `"top"`
- `"bottom"`
- `"auto"`

### Minimum Size

```js
WinLet.createWindow({
    width: 600,
    height: 400,
    minWidth: 300,
    minHeight: 200
});
```

### Runtime Position / Size

作成後にも位置やサイズを変更できます。

```js
win.setPosition(100, 100);

win.setSize(800, 600);
```

現在の位置・サイズは取得できます。

```js
const position = win.getPosition();

console.log(position.x);
console.log(position.y);

const size = win.getSize();

console.log(size.width);
console.log(size.height);
```

## Window Controls

ウィンドウの状態を操作できます。

```js
win.minimize();

win.maximize();

win.restore();

win.toggleMaximize();

win.focus();

win.blur();

win.close();
```

注意を引くためにウィンドウを揺らすこともできます。

```js
win.shake();
```

## Window Options

ウィンドウの操作機能を個別に設定できます。

```js
WinLet.createWindow({
    title: "Example",
    windowOptions: {
        movable: true,
        resizableX: true,
        resizableY: true,
        closable: true,
        minimizable: true,
        maximizable: true,
        maximizableOnDblClick: true,
        focus: true,
        alwaysOnTop: false,
        useGhostWindow: false,
        opacity: 1.0,
        modal: false
    }
});
```

### Movable / Resizable

```js
windowOptions: {
    movable: true,
    resizableX: true,
    resizableY: true
}
```

### Window Buttons

```js
windowOptions: {
    closable: true,
    minimizable: true,
    maximizable: true
}
```

### Always on Top

```js
windowOptions: {
    alwaysOnTop: true
}
```

### Modal

```js
windowOptions: {
    modal: true
}
```

### Opacity

```js
windowOptions: {
    opacity: 0.8
}
```

作成後に変更することもできます。

```js
win.setOpacity(0.8);
```

## Window Content

ウィンドウのコンテンツにはHTML、iframe、HTMLテンプレートを使用できます。

### HTML

```js
WinLet.createWindow({
    title: "HTML",
    content: {
        html: `
            <h1>Hello</h1>
            <p>Window content.</p>
        `
    }
});
```

### iframe

```js
WinLet.createWindow({
    title: "Web Page",
    content: {
        iframe: {
            src: "https://example.com",
            loading: "lazy"
        }
    }
});
```

iframeには以下のような設定を指定できます。

```js
content: {
    iframe: {
        src: "https://example.com",
        srcdoc: "",
        allow: "",
        referrerPolicy: "no-referrer",
        loading: "lazy",
        sandbox: ["allow-scripts", "allow-same-origin"]
    }
}
```

### iframe内でWinLetを利用する

`loadWinLet` を有効にすると、`srcdoc` で生成されたiframe内にWinLet自身を読み込めます。

```js
WinLet.createWindow({
    title: "Embedded App",
    content: {
        iframe: {
            srcdoc: `
                <h1>Embedded App</h1>
            `,
            loadWinLet: true
        }
    }
});
```

この機能を使用する場合は、グローバル設定で `libraryPath` を指定してください。

### HTML Template

既存の `<template>` を利用できます。

```html
<template id="my-template">
    <h1>Template Content</h1>
    <p>Hello from template.</p>
</template>
```

```js
WinLet.createWindow({
    title: "Template",
    content: {
        template: "#my-template"
    }
});
```

## Accessing Window Content

ウィンドウのコンテンツ要素を取得できます。

```js
const content = win.getContent();
```

通常のHTMLコンテンツでは `HTMLElement`、iframeの場合は `HTMLIFrameElement` が返されます。

## Nested Windows

ウィンドウの内部に別のウィンドウを作成できます。

```js
const parent = WinLet.createWindow({
    title: "Parent",
    width: 800,
    height: 600
});

const child = parent.createWindow({
    title: "Child",
    width: 300,
    height: 200,
    content: {
        html: "<p>Child window</p>"
    }
});
```

これにより、アプリケーションウィンドウの内部にさらにウィンドウを持つようなUIを構築できます。

## Popup

ポップアップウィンドウを作成できます。

```js
const popup = WinLet.createPopup({
    title: "Popup",
    width: 400,
    height: 250,
    content: {
        html: "<p>Popup content</p>"
    }
});
```

ウィンドウから作成することもできます。

```js
const popup = win.createPopup({
    title: "Popup",
    content: {
        html: "<p>Hello</p>"
    }
});
```

## Async Popup

非同期ポップアップを利用できます。

```js
const result = await WinLet.createAsyncPopup({
    title: "Confirm",
    width: 400,
    height: 250,
    content: {
        html: "<p>Continue?</p>"
    }
});
```

ポップアップの結果には、通常の終了結果とタイムアウト結果を区別するための定数が用意されています。

```js
WinLet.POPUP_TIMEOUT_RESULT
WinLet.POPUP_CLOSE_BUTTON_RESULT
```

## Tabs

ウィンドウにタブを設定できます。

```js
WinLet.createWindow({
    title: "Tabbed Window",
    tabs: [
        {
            title: "Home",
            content: {
                html: "<h1>Home</h1>"
            }
        },
        {
            title: "Settings",
            content: {
                html: "<h1>Settings</h1>"
            }
        }
    ]
});
```

タブの動作は `tabOptions` で設定できます。

```js
WinLet.createWindow({
    title: "Tabs",
    tabs: [
        {
            title: "Tab 1",
            content: {
                html: "<p>Tab 1</p>"
            }
        }
    ],
    tabOptions: {
        reorderable: true,
        closable: true,
        addable: true,
        detachable: true,
        mergeable: true,
        allowIncomingMerge: true
    }
});
```

## Split View

1つのウィンドウ内を複数のペインに分割できます。

### Horizontal

```js
WinLet.createWindow({
    title: "Split View",
    splitView: {
        direction: "horizontal",
        panes: [
            {
                id: "left",
                size: "50%",
                content: {
                    html: "<h2>Left</h2>"
                }
            },
            {
                id: "right",
                size: "50%",
                content: {
                    html: "<h2>Right</h2>"
                }
            }
        ]
    }
});
```

### Vertical

```js
WinLet.createWindow({
    title: "Split View",
    splitView: {
        direction: "vertical",
        panes: [
            {
                id: "top",
                size: "50%",
                content: {
                    html: "<h2>Top</h2>"
                }
            },
            {
                id: "bottom",
                size: "50%",
                content: {
                    html: "<h2>Bottom</h2>"
                }
            }
        ]
    }
});
```

各ペインには最小サイズやリサイズ可否も設定できます。

```js
{
    id: "left",
    size: "300px",
    minSize: "200px",
    resizable: true,
    content: {
        html: "<p>Left</p>"
    }
}
```

## Search

ウィンドウ内検索を利用できます。

```js
WinLet.createWindow({
    title: "Searchable",
    search: {
        enabled: true
    },
    content: {
        html: `
            <h1>Hello</h1>
            <p>Search this content.</p>
        `
    }
});
```

検索オプションでは、大文字小文字、正規表現、単語単位検索などのUIを設定できます。

```js
search: {
    enabled: true,
    caseSensitive: false,
    showCaseSensitiveButton: true,
    showRegexButton: true,
    showWholeWordButton: true
}
```

検索対象をセレクタで限定することもできます。

```js
search: {
    enabled: true,
    targetSelector: ".search-content"
}
```

作成後に検索UIを操作することもできます。

```js
win.openSearch();

win.closeSearch();
```

## Status Bar

ステータスバーを表示できます。

```js
WinLet.createWindow({
    title: "Status Bar",
    statusBar: {
        enabled: true,
        text: "Ready"
    },
    content: {
        html: "<p>Content</p>"
    }
});
```

HTMLを許可することもできます。

```js
statusBar: {
    enabled: true,
    text: "<strong>Ready</strong>",
    allowHTML: true
}
```

作成後にテキストを変更できます。

```js
win.setStatusBarText("Processing...");
```

## Taskbar

WinLetはウィンドウを管理するタスクバーを備えています。

デフォルトでは画面下部に表示されます。

グローバル設定から位置を変更できます。

```js
WinLet.init({
    taskbar: {
        position: "bottom"
    }
});
```

タスクバー上のアイテム表示もウィンドウごとに設定できます。

```js
WinLet.createWindow({
    title: "Example",
    taskbarOptions: {
        showIconOnly: true
    }
});
```

## Menus

ウィンドウにメニューを追加できます。

```js
WinLet.createWindow({
    title: "Menu Example",
    menu: [
        {
            name: "File",
            items: [
                {
                    name: "New",
                    action: (win) => {
                        console.log("New", win);
                    }
                },
                {
                    name: "Open",
                    action: (win) => {
                        console.log("Open", win);
                    }
                }
            ]
        },
        {
            name: "Help",
            action: (win) => {
                console.log("Help", win);
            }
        }
    ]
});
```

メニュー項目にはショートカットを表示できます。

```js
{
    name: "Save",
    shortcut: "Ctrl+S",
    action: (win) => {
        // ...
    }
}
```

メニューはネストできます。

```js
{
    name: "File",
    items: [
        {
            name: "Export",
            items: [
                {
                    name: "JSON",
                    action: (win) => {
                        // ...
                    }
                }
            ]
        }
    ]
}
```

## Context Menu

ウィンドウにコンテキストメニューを設定できます。

```js
WinLet.createWindow({
    title: "Context Menu",
    contextMenu: [
        {
            name: "Reload",
            action: (win) => {
                win.reload();
            }
        },
        {
            separator: true
        },
        {
            name: "Close",
            action: (win) => {
                win.close();
            }
        }
    ]
});
```

## Custom Controls

タイトルバーに独自のコントロールを追加できます。

```js
WinLet.createWindow({
    title: "Custom Control",
    customControls: [
        {
            name: "help",
            html: "?",
            title: "Help",
            action: (win) => {
                console.log("Help", win);
            }
        }
    ]
});
```

## Controls Position

標準のウィンドウコントロールは左右どちらにも配置できます。

```js
WinLet.createWindow({
    controlsPosition: "right"
});
```

## Events

ウィンドウ単位でイベントを購読できます。

```js
const win = WinLet.createWindow({
    title: "Events"
});

win.on("focus", (win) => {
    console.log("Focused:", win.id);
});

win.on("close", (win) => {
    console.log("Closed:", win.id);
});
```

利用できる主なイベントは以下です。

- `open`
- `close`
- `before-close`
- `focus`
- `blur`
- `move-start`
- `move-end`
- `move`
- `resize-start`
- `resize-end`
- `resize`
- `reload`

### before-close

`before-close` では閉じる処理をキャンセルできます。

```js
win.on("before-close", () => {
    return false;
});
```

### once

一度だけ実行するリスナーも設定できます。

```js
win.on("open", (win) => {
    console.log("Opened once:", win.id);
}, {
    once: true
});
```

リスナーは `off()` で解除できます。

```js
const listener = (win) => {
    console.log(win.id);
};

win.on("focus", listener);

win.off("focus", listener);
```

## Global Events

WinLet全体のイベントも購読できます。

```js
WinLet.on("window-created", (win) => {
    console.log("Created:", win.id);
});

WinLet.on("window-destroyed", (win) => {
    console.log("Destroyed:", win.id);
});
```

## Window Management

IDからウィンドウを取得できます。

```js
const win = WinLet.getWindow("settings");
```

存在しない場合は `undefined` が返ります。

アクティブなウィンドウは以下から取得できます。

```js
const activeWindow = WinLet.getActiveWindow();
```

指定されたDOM要素を内包するウィンドウも取得できます。

```js
const win = WinLet.getWindowFromElement(element);
```

## Window State

ウィンドウの状態は `state` から確認できます。

```js
console.log(win.state);
```

状態には以下があります。

- `"normal"`
- `"minimized"`
- `"maximized"`

## Virtualization

大量のウィンドウを扱う場合に備えて、ウィンドウの仮想化機能を備えています。

グローバル設定で有効・無効を切り替えられます。

```js
WinLet.init({
    enableVirtualization: true
});
```

ウィンドウ単位でも仮想化対象かどうかを設定できます。

```js
WinLet.createWindow({
    title: "Virtualizable",
    virtualizable: true
});
```

仮想化には複数のレベルがあります。

- `none`
- `frozen`
- `suspended`
- `unloaded`

デフォルトでは、一定時間非アクティブなウィンドウを対象に仮想化が行われます。

```js
WinLet.init({
    virtualizationThreshold: 5,
    virtualizationDelay: 10000
});
```

## Animations

ウィンドウの開閉・最小化・復元などにはアニメーションを利用できます。

```js
WinLet.init({
    enableAnimations: true
});
```

アニメーションの基点も指定できます。

```js
WinLet.createWindow({
    title: "Animated",
    animationOrigin: "#open-button"
});
```

`animationOrigin` には以下を指定できます。

- DOMセレクタ
- `HTMLElement`
- `MouseEvent`
- `{ x, y }`

例えばボタンを基点にできます。

```js
const button = document.querySelector("#open-button");

WinLet.createWindow({
    title: "Animated",
    animationOrigin: button
});
```

## Theme

テーマを登録して切り替えることができます。

```js
WinLet.registerTheme({
    name: "my-theme"
});
```

登録済みテーマは取得できます。

```js
const themes = WinLet.getRegisteredThemes();

console.log(themes);
```

テーマを切り替えます。

```js
WinLet.setTheme("my-theme");
```

現在のテーマは取得できます。

```js
const theme = WinLet.getTheme();
```

テーマオブジェクトを直接指定することもできます。

```js
WinLet.setTheme({
    name: "my-theme"
});
```

## Capture

ウィンドウを画像としてキャプチャできます。

```js
const dataUrl = await win.capture();
```

デフォルトではウィンドウ全体をキャプチャします。

コンテンツ部分のみをキャプチャすることもできます。

```js
const dataUrl = await win.capture("content");
```

返される値はPNG形式のData URLです。

キャプチャ機能では
[html2canvas](https://github.com/niklasvh/html2canvas)
を利用します。

## Print

ウィンドウのコンテンツを印刷できます。

```js
win.print();
```

## Reload

ウィンドウを再読み込みできます。

```js
win.reload();
```

iframeコンテンツなどを再読み込みしたい場合にも利用できます。

## Runtime Options

ウィンドウ作成後に一部の設定を変更できます。

```js
win.setOptions({
    title: "Updated Title",
    width: 800,
    height: 600
});
```

タイトルやアイコンは専用メソッドでも変更できます。

```js
win.setTitle("New Title");

win.setIcon("/images/icon.png");
```

## Keyboard Shortcuts

WinLetにはウィンドウ切り替え用のショートカットがあります。

デフォルトでは、

```text
Ctrl+`
```

が使用されます。

グローバル設定から変更できます。

```js
WinLet.init({
    windowSwitchShortcut: "Ctrl+Tab"
});
```

ショートカット機能そのものをウィンドウ単位で無効化することもできます。

```js
WinLet.createWindow({
    title: "No Shortcuts",
    enableShortcuts: false
});
```

## Global Configuration

WinLet全体の動作を `init()` で設定できます。

```js
WinLet.init({
    windowSwitchShortcut: "Ctrl+`",
    enableAnimations: true,
    animateFromTaskbar: true,
    enableFocusTrapping: true,
    enableVirtualization: true,
    indicateVirtualizationInTaskbar: true,
    virtualizationThreshold: 5,
    virtualizationDelay: 10000,
    taskbar: {
        position: "bottom"
    },
    autoDetectBootstrapTheme: true,
    enableDebugMode: false
});
```

また、初期化後に変更可能なグローバル設定は `setGlobalConfig()` から変更できます。

```js
WinLet.setGlobalConfig({
    enableAnimations: false
});
```

## Default Configuration

ウィンドウのデフォルト設定は `setDefaultConfig()` で変更できます。

```js
WinLet.setDefaultConfig({
    width: 600,
    height: 400,
    windowOptions: {
        resizableX: true,
        resizableY: true
    }
});
```

これ以降に作成されるウィンドウへデフォルト設定として適用されます。

## API

### Global API

| API | 説明 |
| --- | --- |
| `init(options?)` | WinLetを初期化 |
| `createWindow(options?)` | ウィンドウを作成 |
| `createPopup(options)` | ポップアップを作成 |
| `createAsyncPopup(options)` | 非同期ポップアップを作成 |
| `getWindow(id)` | IDからウィンドウを取得 |
| `getWindowFromElement(element)` | DOM要素からウィンドウを取得 |
| `getActiveWindow()` | アクティブなウィンドウを取得 |
| `updateTaskbarItem(win, state)` | タスクバー項目を更新 |
| `setDefaultConfig(options)` | ウィンドウのデフォルト設定を変更 |
| `setGlobalConfig(options)` | グローバル設定を変更 |
| `registerTheme(theme)` | テーマを登録 |
| `getRegisteredThemes()` | 登録済みテーマを取得 |
| `setTheme(theme)` | テーマを変更 |
| `getTheme()` | 現在のテーマを取得 |
| `on(event, listener, options?)` | グローバルイベントを購読 |
| `off(event, listener)` | グローバルイベントを解除 |
| `emit(event, ...args)` | グローバルイベントを発火 |
| `version` | WinLetのバージョン |

### Window API

| API | 説明 |
| --- | --- |
| `close()` | ウィンドウを閉じる |
| `minimize(options?)` | 最小化 |
| `maximize()` | 最大化 |
| `restore(options?)` | 復元 |
| `toggleMaximize()` | 最大化/復元 |
| `focus()` | フォーカス |
| `blur()` | フォーカスを外す |
| `shake()` | ウィンドウを揺らす |
| `capture(mode?)` | ウィンドウを画像として取得 |
| `print()` | 印刷 |
| `getTitle()` | タイトルを取得 |
| `setTitle(title)` | タイトルを変更 |
| `setIcon(icon)` | アイコンを変更 |
| `getPosition()` | 位置を取得 |
| `setPosition(x, y)` | 位置を変更 |
| `getSize()` | サイズを取得 |
| `setSize(width, height)` | サイズを変更 |
| `setOpacity(opacity)` | 不透明度を変更 |
| `reload()` | 再読み込み |
| `getContent()` | コンテンツ要素を取得 |
| `setStatusBarText(text)` | ステータスバーを変更 |
| `openSearch()` | 検索UIを開く |
| `closeSearch()` | 検索UIを閉じる |
| `createWindow(options?)` | 子ウィンドウを作成 |
| `createPopup(options)` | 子ポップアップを作成 |
| `createAsyncPopup(options)` | 子非同期ポップアップを作成 |
| `setOptions(options)` | オプションを変更 |
| `on(event, listener, options?)` | ウィンドウイベントを購読 |
| `off(event, listener)` | ウィンドウイベントを解除 |
| `emit(event, ...args)` | ウィンドウイベントを発火 |

## TypeScript

winletはTypeScriptで実装されており、型定義を提供しています。

```ts
import WinLet from "winlet";

const win = WinLet.createWindow({
    title: "TypeScript",
    width: 600,
    height: 400
});

win.on("focus", (window) => {
    console.log(window.id);
});
```

ウィンドウ、イベント、メニュー、タブ、Split ViewなどのAPIに型が提供されています。

## Browser Usage

winletはブラウザ上で動作するウィンドウUIライブラリです。

CDNを利用する場合は、ビルド済みの `dist/winlet.js` を読み込めます。

```html
<script src="https://cdn.jsdelivr.net/gh/hi2ma-bu4/winlet/dist/winlet.js"></script>
```

minified版も利用できます。

```html
<script src="https://cdn.jsdelivr.net/gh/hi2ma-bu4/winlet/dist/winlet.min.js"></script>
```

## Development

リポジトリをcloneします。

```bash
git clone https://github.com/hi2ma-bu4/winlet.git
cd winlet
```

依存関係をインストールします。

```bash
npm install
```

ビルドします。

```bash
npm run build
```

ビルド済みファイルは `dist/` に生成されます。
