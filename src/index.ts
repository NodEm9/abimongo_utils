import { createLogger } from './logger';


declare global {
	interface Window {
		abimongoUtils: typeof createLogger;
	}
}


if (typeof window !== 'undefined') {
	window.abimongoUtils = createLogger;
	window.Buffer = Buffer;
}

export * from './logger';
export * from './transports'
export * from './types';
export * from './utils';
