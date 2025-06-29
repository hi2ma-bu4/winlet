import WinLetBaseClass from "./baseclass";

export default class Utils extends WinLetBaseClass {
	/**
	 * ユニークなIDを生成します。
	 * @param prefix - IDのプレフィックス
	 * @returns 生成されたID
	 */
	public static generateId(prefix: string = "win"): string {
		return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
	}

	/**
	 * オブジェクトをディープマージします。
	 */
	public static deepMerge<T extends object, U extends object>(target: T, source: U): T & U {
		const output = { ...target } as T & U;

		for (const key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				const sourceValue = source[key];
				const targetValue = (target as any)[key];

				if (Array.isArray(sourceValue)) {
					// ソースの値が配列の場合は、そのまま上書きする
					(output as any)[key] = sourceValue;
				} else if (sourceValue instanceof Object && typeof sourceValue !== "function" && targetValue instanceof Object) {
					(output as any)[key] = this.deepMerge(targetValue, sourceValue);
				} else {
					(output as any)[key] = sourceValue;
				}
			}
		}

		return output;
	}

	/**
	 * HTML文字列をサニタイズします。
	 * @param str - サニタイズする文字列
	 * @returns サニタイズされたHTML文字列
	 */
	public static sanitizeHTML(str: string): string {
		const temp = document.createElement("div");
		temp.textContent = str;
		return temp.innerHTML;
	}
}
