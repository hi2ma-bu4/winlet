interface ErrorConstructor {
	captureStackTrace?(targetObject: object, constructorOpt?: Function): void;
}

/**
 * すべてのカスタムエラーの基底クラス
 */
export class WinLetBaseError extends Error {
	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;

		const BuiltInError: ErrorConstructor = Error as ErrorConstructor;
		if (BuiltInError.captureStackTrace) {
			BuiltInError.captureStackTrace(this, this.constructor);
		}
	}
}

/**
 * 単純なメッセージのみのエラー
 */
export class SimpleError extends WinLetBaseError {
	constructor(message: string) {
		super(message);
	}
}

export class WinLetError extends SimpleError {}
