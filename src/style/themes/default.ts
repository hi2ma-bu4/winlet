// src/themes/default.ts
import { Theme } from "../../const/types";

export const defaultTheme: Theme = {
	name: "default",
	variables: {
		// 基本色・シャドウ
		"--$[prefix]-text-color": "#000",
		"--$[prefix]-bg": "#f0f0f0",
		"--$[prefix]-border": "#a0a0a0",
		"--$[prefix]-shadow-color-light": "rgba(0,0,0,0.15)",
		"--$[prefix]-shadow-color-strong": "rgba(0,0,0,0.3)",
		"--$[prefix]-shadow-color-active": "rgba(0,0,0,0.45)",

		// タイトルバー
		"--$[prefix]-title-bar-bg": "#e0e0e0",
		"--$[prefix]-title-bar-active-bg": "#0078d7",
		"--$[prefix]-title-text-color": "#000",
		"--$[prefix]-title-text-active-color": "#fff",

		// コントロールボタン
		"--$[prefix]-control-bg": "#d0d0d0",
		"--$[prefix]-control-hover-bg": "#e5e5e5",
		"--$[prefix]-control-close-hover-bg": "#e81123",
		"--$[prefix]-control-close-hover-color": "#fff",

		// メニュー
		"--$[prefix]-menu-bg": "#fff",
		"--$[prefix]-menu-border": "#ccc",
		"--$[prefix]-menu-item-color": "#000",
		"--$[prefix]-menu-item-hover-bg": "#0078d7",
		"--$[prefix]-menu-item-hover-color": "#fff",
		"--$[prefix]-shortcut-text-color": "#666",

		// タブ
		"--$[prefix]-tab-bg": "#dcdcdc",
		"--$[prefix]-tab-active-bg": "#f0f0f0",
		"--$[prefix]-tab-border": "#b0b0b0",
		"--$[prefix]-tab-bar-bg": "#e1e1e1",
		"--$[prefix]-tab-close-btn-hover-bg": "#ccc",
		"--$[prefix]-tab-active-close-btn-hover-bg": "#ddd",

		// 検索ハイライト
		"--$[prefix]-search-highlight-bg": "yellow",
		"--$[prefix]-search-highlight-active-bg": "orange",

		// ポップアップボタン
		"--$[prefix]-popup-button-hover-bg": "#e9e9e9",
		"--$[prefix]-popup-button-hover-border-color": "#bbb",

		// タスクバー
		"--$[prefix]-taskbar-bg": "rgba(240, 240, 240, 0.9)",
		"--$[prefix]-taskbar-border": "#a0a0a0",
		"--$[prefix]-taskbar-item-bg": "#d0d0d0",
		"--$[prefix]-taskbar-item-active-bg": "#0078d7",
		"--$[prefix]-taskbar-item-active-color": "#fff",

		/* ローディングインジケーター */
		"--$[prefix]-loader-bg": "rgba(255, 255, 255, 0.7)",
		"--$[prefix]-loader-color": "var(--$[prefix]-title-bar-active-bg)",

		// その他
		"--$[prefix]-scrollbar-thumb-bg": "rgba(100, 100, 100, 0.5)",
	},
};
