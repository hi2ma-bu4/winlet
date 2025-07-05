// src/index.ts

import { defaultConfig } from "./const/config";
import { CLOSE_BUTTON_RESULT, GlobalConfigOptions, IWindow, PopupOptions, Theme, TIMEOUT_RESULT, WindowOptions, WinLetApi } from "./const/types";
import WindowManager from "./function/window_manager";
import Utils from "./libs/utils";
import { LIB_VERSION } from "./version";

const selfUrl = (document?.currentScript as HTMLScriptElement)?.src || "";

const globalConfig: GlobalConfigOptions = {
	windowSwitchShortcut: "Ctrl+`", // デフォルトショートカット（バッククォート）
	libraryPath: selfUrl,
	enableAnimations: true,
	enableFocusTrapping: true,
};

// シングルトンインスタンス
const manager = new WindowManager(globalConfig);

// 公開するAPI
const api: WinLetApi = {
	/**
	 * ライブラリを初期化します。DOMの準備ができた後に呼び出してください。
	 * (例: document.addEventListener('DOMContentLoaded', WinLet.init);)
	 *
	 * @param options - グローバル設定。コンテナ要素などを指定できます。
	 */
	init: (options: GlobalConfigOptions = {}): void => {
		api.setGlobalConfig(options);
		manager.init();
	},

	/**
	 * 新しいウィンドウを作成
	 */
	createWindow: (options: WindowOptions = {}): IWindow => {
		return manager.createWindow(options);
	},

	/**
	 * 新しいポップアップウィンドウを作成
	 */
	createPopup: (options: PopupOptions): IWindow => {
		return manager.popup(options);
	},

	/**
	 * ウィンドウを取得
	 */
	getWindow: (id: string): IWindow | undefined => {
		return manager.getWindow(id);
	},

	/**
	 * 指定されたDOM要素を内包するウィンドウインスタンスを取得します。
	 */
	getWindowFromElement: (element: HTMLElement): IWindow | undefined => {
		return manager.getWindowFromElement(element);
	},

	/**
	 * アクティブなウィンドウを取得
	 */
	getActiveWindow: (): IWindow | null => {
		return manager.getActiveWindow();
	},

	/**
	 * デフォルトのウィンドウ設定を変更
	 */
	setDefaultConfig: (options: WindowOptions): void => {
		Utils.deepMerge(defaultConfig, options);
	},

	/**
	 * グローバル設定を変更
	 */
	setGlobalConfig: (options: GlobalConfigOptions): void => {
		// 初期化後にコンテナを変更しようとした場合は警告を出す
		if (manager.isInitialized && options.container) {
			console.warn("WinLet: The container cannot be changed after initialization.");
			delete options.container;
		}
		Object.assign(globalConfig, options);
		manager.applyGlobalConfig(globalConfig);
	},

	/**
	 * 表示テーマを登録します。
	 */
	registerTheme: (theme: Theme): void => {
		manager.registerTheme(theme);
	},

	/**
	 * 登録済みのテーマ名の配列を取得します。
	 */
	getRegisteredThemes: () => {
		return manager.getRegisteredThemes();
	},

	/**
	 * 表示テーマを変更します。
	 */
	setTheme: (theme: string | Theme): void => {
		manager.setTheme(theme);
	},

	/**
	 * 現在の表示テーマを取得します。
	 */
	getTheme: (): Theme | null => {
		return manager.getTheme();
	},

	/**
	 * ライブラリのバージョンを取得
	 */
	get version() {
		return LIB_VERSION;
	},

	/**
	 * ポップアップウィンドウのタイムアウト結果
	 */
	POPUP_TIMEOUT_RESULT: TIMEOUT_RESULT,
	/**
	 * ポップアップウィンドウの閉じるボタンの結果
	 */
	POPUP_CLOSE_BUTTON_RESULT: CLOSE_BUTTON_RESULT,
};

// グローバルスコープにAPIをアタッチ
if (typeof window !== "undefined") {
	window.WinLet = api;
}

// モジュールとしてエクスポートも可能
export default api;
