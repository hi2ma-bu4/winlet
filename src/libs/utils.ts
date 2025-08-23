export default class Utils {
	/**
	 * ユニークなIDを生成します。
	 * @param prefix - IDのプレフィックス
	 * @returns 生成されたID
	 */
	public static generateId(prefix: string = "win"): string {
		return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
	}

	public static deepCopy<T>(value: T, seen: WeakMap<object, any> = new WeakMap()): T {
		if (value === null || typeof value !== "object") return value;

		if (value instanceof Date) return new Date(value.getTime()) as T;

		if (value instanceof Map) {
			const copiedMap = new Map();
			value.forEach((v, k) => {
				copiedMap.set(this.deepCopy(k, seen), this.deepCopy(v, seen));
			});
			return copiedMap as T;
		}

		if (value instanceof Set) {
			const copiedSet = new Set();
			value.forEach((v) => {
				copiedSet.add(this.deepCopy(v, seen));
			});
			return copiedSet as T;
		}

		if (Array.isArray(value)) {
			if (seen.has(value)) return seen.get(value);
			const arrCopy: any[] = [];
			seen.set(value, arrCopy);
			for (const item of value) {
				arrCopy.push(this.deepCopy(item, seen));
			}
			return arrCopy as T;
		}

		if (seen.has(value)) return seen.get(value);

		if (value instanceof HTMLElement) return value;
		if (value instanceof RegExp) return value;

		const copiedObj: { [key: string]: any } = {};
		seen.set(value, copiedObj);
		for (const key in value) {
			if (Object.prototype.hasOwnProperty.call(value, key)) {
				copiedObj[key] = this.deepCopy((value as any)[key], seen);
			}
		}
		return copiedObj as T;
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
	 * オブジェクトが空でないかとどうかを判定します。
	 * @param obj - 判定するオブジェクト
	 * @returns オブジェクトが空である場合はfalse、そうでない場合はtrue
	 */
	public static isNonEmptyObject<T extends object>(obj: T | undefined): obj is T & Record<string | symbol, unknown> {
		if (!obj) return false;
		for (const _ in obj) return true;
		return false;
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

	/**
	 * 正規表現をエスケープします。
	 * @param string - エスケープする文字列
	 */
	public static escapeRegex(string: string): string {
		return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	}

	/**
	 * 関数をスロットリングします。指定された時間内に複数回呼び出されても、最後の呼び出しから一定時間後に一度だけ実行します。
	 * @param func - スロットリングする関数
	 * @param delay - 遅延時間 (ミリ秒)
	 * @returns スロットリングされた関数
	 */
	public static throttle(func: (...args: any[]) => void, delay: number): (...args: any[]) => void {
		let timeoutId: number | null = null;
		let lastArgs: any[] | null = null;

		return function (...args: any[]) {
			lastArgs = args;
			if (timeoutId === null) {
				timeoutId = window.setTimeout(() => {
					if (lastArgs) {
						func(...lastArgs);
					}
					timeoutId = null;
				}, delay);
			}
		};
	}
}
