import { ListenerOptions } from "../const/types";

type EventHandler<T extends (...args: any[]) => any> = T;
interface EventHandlerObject<T extends (...args: any[]) => any> {
	handler: EventHandler<T>;
	original: T;
}

export default class WinLetBaseClass<EventMap extends Record<string, (...args: any[]) => any>> {
	private events: Map<keyof EventMap, EventHandlerObject<EventMap[keyof EventMap]>[]>;

	constructor() {
		this.events = new Map();
	}

	public on<K extends keyof EventMap>(eventName: K, listener: EventMap[K], options?: ListenerOptions): void {
		if (!this.events.has(eventName)) {
			this.events.set(eventName, []);
		}

		let handler: EventHandler<EventMap[K]> = listener;
		if (options?.once) {
			handler = ((...args: Parameters<EventMap[K]>) => {
				this.off(eventName, listener);
				listener(...args);
			}) as EventMap[K];
		}

		this.events.get(eventName)!.push({
			handler: handler,
			original: listener,
		});
	}

	public off<K extends keyof EventMap>(eventName: K, listener: EventMap[K]): void {
		const handlers = this.events.get(eventName);
		if (handlers) {
			const index = handlers.findIndex((h) => h.original === listener);
			if (index > -1) {
				handlers.splice(index, 1);
			}
		}
	}

	public emit<K extends keyof EventMap>(eventName: K, ...args: Parameters<EventMap[K]>): (ReturnType<EventMap[K]>)[] | undefined {
		const handlers = this.events.get(eventName);
		if (handlers) {
			const results: (ReturnType<EventMap[K]>)[] = [];
			[...handlers].forEach((handlerObj) => {
				try {
					results.push(handlerObj.handler(...args));
				} catch (e) {
					console.error(`Error in event handler for "${String(eventName)}":`, e);
				}
			});
			return results;
		}
	}
}
