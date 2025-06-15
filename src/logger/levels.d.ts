import { LogLevel } from "../types/logger.types";
export declare const LOG_LEVELS: Record<LogLevel, number>;
export declare function shouldLog(level: keyof typeof LOG_LEVELS, configLevel: keyof typeof LOG_LEVELS): boolean;
export declare const getLogLevel: (level: LogLevel) => LogLevel;
export declare const isLogLevel: (level: string) => level is LogLevel;
export declare const getLogLevelPriority: (level: LogLevel) => number;
