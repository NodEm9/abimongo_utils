import { ILogger, LoggerConfig } from '../types';
export declare function setupLogger(config: LoggerConfig): ILogger;
export declare class Logger {
    private static logger;
    static get instance(): ILogger;
    constructor();
    static initialize(config: LoggerConfig): void;
}
