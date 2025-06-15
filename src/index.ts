import { createLogger } from './logger';


// declare global {
// 	interface Window {
// 		abimongoUtils: typeof createLogger;
// 	}
// }


// if (typeof window !== 'undefined') {
// 	window.abimongoUtils = createLogger;
// 	window.Buffer = Buffer;
// }

export * from './logger';
export { setupLogger } from './logger';
export { createLogger } from './logger';
export { DefaultLogger } from './logger/defaultLogger';
export { createRotatingFileTransporter } from './transports/rotating.transporter';
export { consoleTransport } from './transports/consoleTransport';
export { FileTransporter } from './transports/fileTransport';
export { AsyncBatchTransporter } from './transports/async-batch.transporter';
export { BufferedTransporter } from './transports/buffered.transporter';
export { createResilientTransporter } from './transports/remote.transport';
export { createHttpTransport } from './transports/remote.transport';
export { createElasticTransport } from './transports/remote.transport';
export { createLokiTransport } from './transports/remote.transport';
export { createCircuitBreaker } from './utils/circuitBreaker/circuitBreaker';
export { retryWithBackoff } from './utils/retry/retryWithBackoff';
export * from './types';
export * from './utils';
