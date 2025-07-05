// src/themes/dark.ts
import { Theme } from "../../const/types";

export const darkTheme: Theme = {
	name: "dark",
	variables: {
		// 基本色・シャドウ
		"--$[prefix]-text-color": "#e0e0e0",
		"--$[prefix]-bg": "#2d2d2d",
		"--$[prefix]-border": "#555",
		"--$[prefix]-shadow-color-light": "rgba(0,0,0,0.3)",
		"--$[prefix]-shadow-color-strong": "rgba(0,0,0,0.5)",
		"--$[prefix]-shadow-color-active": "rgba(0,0,0,0.7)",

		// タイトルバー
		"--$[prefix]-title-bar-bg": "#3c3c3c",
		"--$[prefix]-title-text-color": "#e0e0e0",
		"--$[prefix]-title-text-active-color": "#fff",

		// コントロールボタン
		"--$[prefix]-control-bg": "#4a4a4a",
		"--$[prefix]-control-hover-bg": "#5a5a5a",

		// メニュー
		"--$[prefix]-menu-bg": "#252525",
		"--$[prefix]-menu-border": "#444",
		"--$[prefix]-menu-item-color": "#e0e0e0",
		"--$[prefix]-shortcut-text-color": "#b0b0b0",

		// タブ
		"--$[prefix]-tab-bg": "#383838",
		"--$[prefix]-tab-active-bg": "#2d2d2d",
		"--$[prefix]-tab-border": "#505050",
		"--$[prefix]-tab-bar-bg": "#383838",
		"--$[prefix]-tab-close-btn-hover-bg": "#5a5a5a",
		"--$[prefix]-tab-active-close-btn-hover-bg": "#6a6a6a",

		// ポップアップボタン
		"--$[prefix]-popup-button-hover-bg": "#5a5a5a",
		"--$[prefix]-popup-button-hover-border-color": "#777",

		// タスクバー
		"--$[prefix]-taskbar-bg": "rgba(45, 45, 45, 0.9)",
		"--$[prefix]-taskbar-border": "#555",
		"--$[prefix]-taskbar-item-bg": "#5a5a5a",

		// その他
		"--$[prefix]-scrollbar-thumb-bg": "rgba(180, 180, 180, 0.5)",
	},
};
