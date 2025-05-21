import { createLogger } from '../logger/loggerFactory';
import { LoggerConfig, LogLevel } from '../types';

describe('createLogger', () => {
	let mockTransporter: { write: jest.Mock };
	let mockLogger: any;
	let mockHooks: any;
	let nowSpy: jest.SpyInstance;
	let formatMessageSpy: jest.SpyInstance;
	let colorByLevelSpy: jest.SpyInstance;

	beforeEach( async() => {
		mockTransporter = { write: jest.fn() };
		mockLogger = {
			debug: jest.fn(),
			info: jest.fn(),
			warn: jest.fn(),
			error: jest.fn(),
			trace: jest.fn(),
		};
		mockHooks = {
			onLog: jest.fn(),
			onError: jest.fn(),
		};
		nowSpy = jest.spyOn(require('../utils/timeUtils'), 'now').mockReturnValue(1234567890);
		const formatters = await import('../utils');
		const colorizer = await import('../logger');
		formatMessageSpy = jest.spyOn(formatters, 'formatMessage').mockImplementation(
			(level: string, message: string, meta: any[]) => `[${level}] ${message} ${JSON.stringify(meta)}`
		);
		colorByLevelSpy = jest.spyOn(colorizer, 'colorByLevel').mockImplementation(
			(level, formatted) => `colored:${formatted}`
		);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('should log info message and call all relevant functions', () => {
		const logger = createLogger({
			level: 'info',
			transports: [mockTransporter.write], 
			logger: mockLogger,
			hooks: mockHooks,
			formatOptions: { colorize: true },
		});

		logger.info('Hello', { foo: 'bar', source: 'test' });

		expect(nowSpy).toHaveBeenCalled();
		expect(formatMessageSpy).toHaveBeenCalled();
		expect(colorByLevelSpy).toHaveBeenCalled();
		expect(mockLogger.info).toHaveBeenCalledWith(expect.stringContaining('Hello'));
		expect(mockTransporter.write).toHaveBeenCalledWith(expect.stringContaining('Hello'));
		expect(mockHooks.onLog).toHaveBeenCalled();
	});

	it('should not log if source is excluded', () => {
		const logger = createLogger({
			level: 'info',
			transports: [mockTransporter.write],
			excludedSources: ['test'],
			logger: mockLogger,
			hooks: mockHooks,
		});

		logger.info('Should not log', { source: 'test' });

		expect(mockLogger.info).not.toHaveBeenCalled();
		expect(mockTransporter.write).not.toHaveBeenCalled();
		expect(mockHooks.onLog).not.toHaveBeenCalled();
	});

	it('should not log if shouldLog returns false', () => {
		jest.spyOn(require('../logger/levels'), 'shouldLog').mockReturnValue(false);
		const logger = createLogger({
			level: 'info',
			transports: [mockTransporter.write],
			logger: mockLogger,
			hooks: mockHooks,
		});

		logger.info('Should not log');

		expect(mockLogger.info).not.toHaveBeenCalled();
		expect(mockTransporter.write).not.toHaveBeenCalled();
		expect(mockHooks.onLog).not.toHaveBeenCalled();
	});

	it('should use enrichMetadata if provided', () => {
		const enrichMetadata = jest.fn((meta) => ({ ...meta, enriched: true }));
		const logger = createLogger({
			level: 'info',
			transports: [mockTransporter.write],
			logger: mockLogger,
			hooks: mockHooks,
			enrichMetadata,
		});

		logger.info('Enrich me', { foo: 'bar' });

		expect(enrichMetadata).toHaveBeenCalled();
		expect(mockLogger.info).toHaveBeenCalledWith(expect.stringContaining('Enrich me'));
	});

	it('should use shouldLogLevel from config', () => {
		const shouldLog = jest.fn().mockReturnValue(false);
		const logger = createLogger({
			level: 'info',
			transports: [mockTransporter.write],
			logger: mockLogger,
			hooks: mockHooks,
			shouldLog,
		});

		logger.info('Should not log', { foo: 'bar' });

		expect(shouldLog).toHaveBeenCalled();
		expect(mockLogger.info).not.toHaveBeenCalled();
	});

	it('should call onError hook if transporter throws', () => {
		const error = new Error('fail');
		const badTransporter = { write: jest.fn(() => { throw error; }) };
		const logger = createLogger({
			level: 'info',
			transports: [badTransporter.write],
			logger: mockLogger,
			hooks: mockHooks,
		});

		logger.info('Test error');

		expect(mockHooks.onError).toHaveBeenCalledWith(error);
	});

	it('should call correct log level method', () => {
		const logger = createLogger({
			level: 'error',
			transports: [mockTransporter.write],
			logger: mockLogger,
			hooks: mockHooks,
		});

		logger.debug('debug msg');
		logger.info('info msg');
		logger.warn('warn msg');
		logger.error('error msg');
		logger.trace('trace msg');

		expect(mockLogger.debug).toHaveBeenCalled();
		expect(mockLogger.info).toHaveBeenCalled();
		expect(mockLogger.warn).toHaveBeenCalled();
		expect(mockLogger.error).toHaveBeenCalled();
		expect(mockLogger.trace).toHaveBeenCalled();
	});
});