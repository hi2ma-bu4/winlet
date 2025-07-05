try {
	const { default: WinLet } = require("../types/winlet.d.ts");
	console.log("is loaded?!");
} catch (e) {}

jasc.on("DOMContentLoaded", () => {
	WinLet.init({
		windowSwitchShortcut: "Ctrl+@",
		enableAnimations: true,
		enableTaskbar: true,
	});
});

// UI/UXの改善
// TODO: コントロールボタンの拡張: 現在の3つのボタン（最小化・最大化・閉じる）に加え、開発者がカスタムのコントロールボタンを追加できる仕組み
// ウィンドウ管理・レイアウト
// TODO: ウィンドウのスナップ機能: ドラッグ中に、画面の四隅や辺、または他のウィンドウの境界にウィンドウが吸着（スナップ）する機能
// TODO: ワークスペース機能: ウィンドウのセットを「ワークスペース」としてグループ化し、仮想デスクトップのように切り替えられる機能
// TODO: レイアウトの保存と復元: 現在表示されている全ウィンドウの位置やサイズ、状態をJSONオブジェクトとして保存し、後から完全に復元する機能
// TODO: ウィンドウのグルーピング: 複数のウィンドウを一つのグループとして扱い、一括で移動や最小化・復元ができる機能
// TODO: カスケード表示API: WinLet.cascadeWindows() のように、現在開いている全てのウィンドウを階段状に整列させるAPI
// 機能・コンテンツ
// TODO: ステータスバーの追加: ウィンドウ下部に、補足情報やフィードバックメッセージを表示するためのステータスバー領域を追加するオプション
// TODO: 分割ビュー機能: 一つのウィンドウ内を複数のペインに分割し、それぞれに異なるコンテンツを表示できる機能
// TODO: ウィンドウ内検索: ウィンドウのコンテンツ（特にHTML）に対して、Ctrl+Fのような検索UIを提供するヘルパー機能
// TODO: スクリーンショットAPI: win.capture()のように、ウィンドウの表示内容を画像データ（PNGなど）として取得できるAPI
// TODO: 印刷API: win.print()で、ウィンドウのコンテンツ部分を印刷プレビューに送る機能
// イベント・通信
// TODO: PromiseベースのPopup: createPopup()がPromiseを返すようにし、ユーザーのボタン操作の結果でresolveまたはrejectされるようにします。これにより、async/await構文でポップアップの応答を待てるように
// TODO: グローバルイベントバス: WinLet.on('event', ...)やWinLet.emit('event', ...)のように、特定のウィンドウに依存しないグローバルなイベントを発行・購読できる仕組み
// TODO: ブロードキャスト機能: あるウィンドウから、他の全てのウィンドウ（または特定の条件を満たすウィンドウ）へ一斉にメッセージを送信するwin.broadcast('message', data)機能
// TODO: 詳細なライフサイクルイベント: onBeforeClose（閉じる前に確認ダイアログを挟むなど）、onMoveStart/onMoveEnd、onResizeStart/onResizeEndなど、よりきめ細かいイベントフックを提供します
// 開発者体験・パフォーマンス
// TODO: プラグインアーキテクチャ: テーマやスナップ機能などを、コアライブラリを直接変更せずに機能追加できるプラグインシステムを導入
// TODO: 設定の動的変更: win.setOptions({ resizableX: false, title: 'New Title' })のように、インスタンス生成後にもオプションを動的に変更できるAPIを整備
// TODO: デバッグモード: 各ウィンドウにIDや座標、状態などのデバッグ情報をオーバーレイ表示するモード
// TODO: ウィンドウの仮想化: 大量のウィンドウ（例: 100以上）を扱う際に、画面外にあり非アクティブなウィンドウのレンダリングを一時停止してパフォーマンスを向上させる仕組み
// TODO: コンテンツのキャッシュ機構: templateやhtmlコンテンツをキャッシュし、同じコンテンツを再度開く際の表示を高速化するオプション
// アクセシビリティ
// TODO: ARIA属性の自動付与: ウィンドウ（role="dialog"）、タイトルバー、コントロールボタンなどに対し、適切なARIAロールと属性を自動的に付与してスクリーンリーダーの読み上げを改善
// TODO: ハイコントラストモード対応: OSのハイコントラスト設定を検知し、それに追従する専用の表示スタイルを適用
// TODO: メニューとタブのキーボード操作: メニューバーやタブバー内を矢印キーで移動し、Enterキーで選択や切り替えができるように

class Main {
	static createBasicWindow() {
		WinLet.createWindow({
			title: "基本的なウィンドウ",
			icon: "https://img.icons8.com/color/48/000000/html-5.png",
			width: 400,
			height: 250,
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

	static createIframeWindow() {
		WinLet.createWindow({
			id: "iframe-window",
			title: "Iframe - Wikipedia",
			icon: "fab fa-wikipedia-w", // Font Awesome icon
			width: 800,
			height: 600,
			content: {
				iframe: {
					src: "https://www.wikipedia.org/",
				},
			},
			onClose: (w) => {
				console.log("Iframe window was closed.", w);
			},
		});
	}

	static createTemplateWindow() {
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

	static createFullFeatureWindow() {
		WinLet.createWindow({
			//id: "full-feature-window",
			title: "フル機能ウィンドウ",
			icon: "fas fa-star",
			width: 700,
			height: 500,
			x: "center",
			y: "center",
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
							action: () => alert(`WinLet Version ${WinLet.version}`),
						},
						{
							name: "開発情報",
							items: [
								{
									name: "開発者情報",
									action: () => alert("author: @hi2ma-bu4"),
								},
							],
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
						iframe: {
							srcdoc: '<div style="padding:1em;"><h2>タブ2のコンテンツ</h2><p>タブをクリックしてコンテンツを切り替えられます。</p><input type="text" placeholder="テキスト入力..."/></div>',
						},
					},
				},
				{
					title: "フォーム",
					content: {
						template: "#my-template",
					},
				},
				{
					title: "入れ子",
					content: {
						iframe: {
							srcdoc: `
								<div style="padding:1em;">
									<h2>入れ子のコンテンツ</h2>
									<p>WinLetを入れ子にすることができます。</p>
									<input type="button" value="子ウィンドウを開く" onclick="WinLet.createWindow({ title: '子ウィンドウ', content: { html: '<div style=&quot;padding:1em;&quot;><h2>子ウィンドウ</h2><p>子ウィンドウのコンテンツ</p></div>' } })">
									<input type="button" value="ポップアップを開く" onclick="WinLet.createPopup({ title: 'ポップアップ', message: 'ポップアップのメッセージです', buttons: 'OkCancel', timeout: 5000, onClose: (r) => WinLet.createPopup({ title: '結果', message: 'ポップアップの結果: ' + r.toString() }) })">
								</div>`,
							loadWinLet: true,
						},
					},
				},
			],
			menuStyle: "merged",
			// tabStyle: "merged",
			tabOptions: {
				reorderable: true,
				closable: true,
				addable: true,
				detachable: true,
				mergeable: true,
				allowIncomingMerge: true,
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
					name: "ウィンドウをリロード(iframe)",
					action: (win) => win.reload(),
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

	static createAlwaysOnTopWindow() {
		WinLet.createWindow({
			title: "常に前面に表示",
			minimizable: false,
			modal: true,
			alwaysOnTop: true,
			content: {
				html: '<div style="padding:1em;"><h2>常に前面に表示</h2><p>常に前面に表示されます。</p></div>',
			},
		});
	}
}
