try {
	const { default: WinLet } = require("../types/winlet.d.ts");
	console.log("is loaded?!");
} catch (e) {}

jasc.on("DOMContentLoaded", () => {
	WinLet.init();

	WinLet.setGlobalConfig({
		windowSwitchShortcut: "Ctrl+@",
	});
});

function createBasicWindow() {
	WinLet.createWindow({
		id: "basic-window",
		title: "基本的なウィンドウ",
		icon: "https://img.icons8.com/color/48/000000/html-5.png",
		width: 400,
		height: 250,
		x: 50,
		y: 50,
		content: {
			html: `
                <div style="padding: 20px;">
                    <h2>ようこそ！</h2>
                    <p>これは最も基本的なウィンドウです。</p>
                    <p>ドラッグして移動したり、端を掴んでリサイズしたりできます。</p>
                </div>
            `,
		},
	});
}

function createIframeWindow() {
	WinLet.createWindow({
		id: "iframe-window",
		title: "Iframe - Wikipedia",
		icon: "fab fa-wikipedia-w", // Font Awesome icon
		width: 800,
		height: 600,
		content: {
			iframe: "https://www.wikipedia.org/",
		},
		onClose: (w) => {
			console.log("Iframe window was closed.", w);
		},
	});
}

function createTemplateWindow() {
	WinLet.createWindow({
		id: "template-window",
		title: "Templateコンテンツ",
		icon: "fas fa-copy",
		width: 450,
		height: 300,
		x: 150,
		y: 150,
		controlsPosition: "left", // コントロールを左側に
		content: {
			template: "#my-template",
		},
	});
}

function createFullFeatureWindow() {
	WinLet.createWindow({
		id: "full-feature-window",
		title: "フル機能ウィンドウ",
		icon: "fas fa-star",
		width: 700,
		height: 500,
		menu: [
			{
				name: "ファイル",
				items: [
					{
						name: "新規作成",
						action: (win) => alert(`[${win.options.title}] で「新規作成」がクリックされました。`),
					},
					{
						name: "開く",
						shortcut: "Ctrl+O",
						action: (win) => alert(`[${win.options.title}] で「開く」がクリックされました。`),
					},
					{
						separator: true,
					},
					{
						name: "閉じる",
						shortcut: "Ctrl+Shift+C",
						action: (win) => win.close(),
					},
				],
			},
			{
				name: "ヘルプ",
				items: [
					{
						name: "バージョン情報",
						shortcut: "Ctrl+I",
						action: () => alert("WinLet Version 0.0.0.1"),
					},
				],
			},
		],
		tabs: [
			{
				title: "タブ 1",
				content: {
					html: '<div style="padding:1em;"><h2>タブ1のコンテンツ</h2><p>タブ機能のデモです。</p></div>',
				},
			},
			{
				title: "タブ 2",
				content: {
					html: '<div style="padding:1em;"><h2>タブ2のコンテンツ</h2><p>タブをクリックしてコンテンツを切り替えられます。</p><input type="text" placeholder="テキスト入力..."/></div>',
				},
			},
			{
				title: "フォーム",
				content: {
					template: "#my-template",
				}, // 既存のテンプレートも使える
			},
		],
		tabOptions: {
			reorderable: true,
			closable: true,
			addable: true,
			onAdd: (win) => {
				const newTab = {
					title: "新しいタブ",
					content: {
						html: '<div style="padding:1em;"><h2>新しいタブのコンテンツ</h2><p>新しいタブを追加しました。</p></div>',
					},
				};
				return newTab;
			},
		},
		contextMenu: [
			{
				name: "ウィンドウをリロード (ダミー)",
				action: (win) => console.log(`${win.options.title}をリロードします。`),
			},
			{
				name: "タイトルを変更",
				action: (win) => {
					const newTitle = prompt("新しいタイトルを入力してください:", win.options.title);
					if (newTitle) win.setTitle(newTitle);
				},
			},
			{
				separator: true,
			},
			{
				name: "中央に移動",
				action: (win) => win.setPosition("center", "center"),
			},
		],
	});
}
