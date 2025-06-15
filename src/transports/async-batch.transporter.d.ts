import { AsyncBatchTransporterOptions, LogLevel } from '../types/logger.types';
export declare class AsyncBatchTransporter {
    private buffer;
    private readonly batchSize;
    private readonly flushInterval;
    private readonly sendBatch;
    private timer?;
    constructor(options: AsyncBatchTransporterOptions);
    log(level: LogLevel, message: string, meta: any[]): void;
    flush(): Promise<void>;
    private start;
    stop(): void;
}
