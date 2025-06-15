import { ILogger } from '../types/ILogger';
export declare class NoOpLogger implements ILogger {
    debug(): void;
    info(): void;
    warn(): void;
    error(): void;
    trace(): void;
}
