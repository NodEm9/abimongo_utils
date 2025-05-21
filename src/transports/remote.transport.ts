import { LogEntry } from "types";
import axios from 'axios';
import { createCircuitBreaker, retryWithBackoff } from "../utils";
import { RemoteTransporter } from "types";


export function createHttpTransport(url: string): RemoteTransporter {
	return async (message, meta) => {
		await axios.post(url, {
			timestamp: new Date().toISOString(),
			level: meta.level,
			message,
			...meta.meta
		});
	};
}

export function createElasticTransport(url: string, index: string): RemoteTransporter {
  return async (message, meta) => {
    await axios.post(`${url}/${index}/_doc`, {
      timestamp: new Date().toISOString(),
      level: meta.level,
      message,
      ...meta.meta
    });
  };
}

export function createLokiTransport(pushUrl: string, labels: Record<string, string>): RemoteTransporter {
  return async (message, meta) => {
    await axios.post(pushUrl, {
      streams: [
        {
          stream: labels,
          values: [[`${Date.now()}000000`, message]]
        }
      ]
    });
  };
};

export function createResilientTransporter(baseTransporter: RemoteTransporter): RemoteTransporter {
	const breakerWrapped = createCircuitBreaker(baseTransporter);

	return async (formattedMessage, meta) => {
		await retryWithBackoff(() => breakerWrapped(formattedMessage, meta));
	};
}