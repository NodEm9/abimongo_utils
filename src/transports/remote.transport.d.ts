import { RemoteTransporter } from "../types";
export declare const createHttpTransport: (url: string) => RemoteTransporter;
export declare function createElasticTransport(url: string, index: string): RemoteTransporter;
export declare function createLokiTransport(pushUrl: string, labels: Record<string, string>): RemoteTransporter;
export declare function createResilientTransporter(baseTransporter: RemoteTransporter): RemoteTransporter;
