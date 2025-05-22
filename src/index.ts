import { createLogger } from './logger/loggerFactory';



declare global {
	interface Window {
		abimongoUtils: typeof createLogger;
	}
}


if (typeof window !== 'undefined') {
	window.abimongoUtils = createLogger;
	// window.Buffer = Buffer;
}



export * from './logger';
export * from './types';
export * from './transports';
export * from './utils';
