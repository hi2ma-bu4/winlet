// src/index.ts

import { defaultConfig } from "./const/config";
import { GlobalConfigOptions, IWindow, WindowOptions, WinLetApi } from "./const/types";
import WindowManager from "./function/window_manager";
import Utils from "./libs/utils";

const globalConfig: Required<GlobalConfigOptions> = {
	windowSwitchShortcut: "Ctrl+`", // デフォルトショートカット（バッククォート）
};

// シングルトンインスタンス
const manager = new WindowManager(globalConfig);

// 公開するAPI
const api: WinLetApi = {
	/**
	 * ライブラリを初期化します。DOMの準備ができた後に呼び出してください。
	 * (例: document.addEventListener('DOMContentLoaded', WinLet.init);)
	 */
	init: (): void => {
		manager.init();
	},

	/**
	 * 新しいウィンドウを作成
	 */
	createWindow: (options: WindowOptions = {}): IWindow => {
		return manager.createWindow(options);
	},

	/**
	 * ウィンドウを取得
	 */
	getWindow: (id: string): IWindow | undefined => {
		return manager.getWindow(id);
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
		Object.assign(globalConfig, options);
		manager.applyGlobalConfig(globalConfig);
	},
};

// グローバルスコープにAPIをアタッチ
window.WinLet = api;

// モジュールとしてエクスポートも可能
export default api;
