**abimongo_utils v1.1.0**

***

# abimongo_utils v1.1.0

## Classes

- [AsyncBatchTransporter](classes/AsyncBatchTransporter.md)
- [BufferedTransporter](classes/BufferedTransporter.md)
- [FileTransporter](classes/FileTransporter.md)
- [Logger](classes/Logger.md)
- [NoOpLogger](classes/NoOpLogger.md)

## Interfaces

- [AsyncBatchTransporterOptions](interfaces/AsyncBatchTransporterOptions.md)
- [ILogger](interfaces/ILogger.md)
- [LogEntry](interfaces/LogEntry.md)
- [LoggerConfig](interfaces/LoggerConfig.md)
- [LoggerFormatOptions](interfaces/LoggerFormatOptions.md)
- [LoggerHooks](interfaces/LoggerHooks.md)
- [LoggerTransporter](interfaces/LoggerTransporter.md)
- [LogMeta](interfaces/LogMeta.md)
- [LogTransport](interfaces/LogTransport.md)
- [RotatingFileTransporterOptions](interfaces/RotatingFileTransporterOptions.md)
- [Transporter](interfaces/Transporter.md)

## Type Aliases

- [AbimongoConfig](type-aliases/AbimongoConfig.md)
- [LogLevel](type-aliases/LogLevel.md)
- [RemoteTransporter](type-aliases/RemoteTransporter.md)

## Variables

- [DefaultLogger](variables/DefaultLogger.md)
- [LOG\_LEVELS](variables/LOG_LEVELS.md)

## Functions

- [colorByLevel](functions/colorByLevel.md)
- [consoleTransport](functions/consoleTransport.md)
- [createCircuitBreaker](functions/createCircuitBreaker.md)
- [createElasticTransport](functions/createElasticTransport.md)
- [createFileTransport](functions/createFileTransport.md)
- [createFileTransporter](functions/createFileTransporter.md)
- [createHttpTransport](functions/createHttpTransport.md)
- [createLogger](functions/createLogger.md)
- [createLokiTransport](functions/createLokiTransport.md)
- [createResilientTransporter](functions/createResilientTransporter.md)
- [formatConsole](functions/formatConsole.md)
- [formatError](functions/formatError.md)
- [formatJSON](functions/formatJSON.md)
- [formatLog](functions/formatLog.md)
- [formatMessage](functions/formatMessage.md)
- [getLogLevel](functions/getLogLevel.md)
- [getLogLevelPriority](functions/getLogLevelPriority.md)
- [isLogLevel](functions/isLogLevel.md)
- [now](functions/now.md)
- [retryWithBackoff](functions/retryWithBackoff.md)
- [setupLogger](functions/setupLogger.md)
- [shouldLog](functions/shouldLog.md)
