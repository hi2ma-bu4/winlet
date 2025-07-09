import { Theme } from "../../const/types";

/**
 * 高コントラストテーマ
 * @see https://github.com/hi2ma-bu4/winlet/blob/main/src/style/style.ts (prefers-contrast: more)
 */
export const highContrastTheme: Theme = {
	name: "high-contrast",
	variables: {
		// 基本色・シャドウ
		"--$[prefix]-text-color": "#fff",
		"--$[prefix]-bg": "#000",
		"--$[prefix]-border": "#fff",
		"--$[prefix]-shadow-color-light": "transparent",
		"--$[prefix]-shadow-color-strong": "transparent",
		"--$[prefix]-shadow-color-active": "transparent",

		// タイトルバー
		"--$[prefix]-title-bar-bg": "#000",
		"--$[prefix]-title-bar-active-bg": "#0000ff",
		"--$[prefix]-title-text-color": "#fff",
		"--$[prefix]-title-text-active-color": "#000",

		// コントロールボタン
		"--$[prefix]-control-bg": "#000",
		"--$[prefix]-control-hover-bg": "#444",
		"--$[prefix]-control-close-hover-bg": "#ff0000",
		"--$[prefix]-control-close-hover-color": "#fff",

		// メニュー
		"--$[prefix]-menu-bg": "#000",
		"--$[prefix]-menu-border": "#fff",
		"--$[prefix]-menu-item-color": "#fff",
		"--$[prefix]-menu-item-hover-bg": "#0000ff",
		"--$[prefix]-menu-item-hover-color": "#fff",

		// タブ
		"--$[prefix]-tab-bg": "#000",
		"--$[prefix]-tab-active-bg": "#000",
		"--$[prefix]-tab-border": "#fff",

		// タスクバー
		"--$[prefix]-taskbar-bg": "rgba(0, 0, 0, 0.9)",
		"--$[prefix]-taskbar-border": "#fff",
		"--$[prefix]-taskbar-item-bg": "#000",
		"--$[prefix]-taskbar-item-active-bg": "#0000ff",
		"--$[prefix]-taskbar-item-active-color": "#fff",
	},
};
