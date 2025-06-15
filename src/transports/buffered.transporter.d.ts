export declare class BufferedTransporter {
    private buffer;
    private readonly flushInterval;
    private readonly flushSize;
    private readonly transporter;
    private timer?;
    constructor(transporter: {
        write: (message: string) => void;
    }, options?: {
        flushInterval?: number;
        flushSize?: number;
    });
    write(level: string, message: string, meta: any[]): void;
    flush(): void;
    private startAutoFlush;
    stop(): void;
}
