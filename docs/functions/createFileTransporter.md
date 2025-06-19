[**abimongo_utils v1.1.0**](../README.md)

***

[abimongo_utils](../README.md) / createFileTransporter

# Function: createFileTransporter()

> **createFileTransporter**(`filePath`): `object`

Defined in: [transports/fileTransport.ts:45](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/fileTransport.ts#L45)

Creates a file transporter that can be used to log messages.
 This is a convenience function that wraps the FileTransporter.

## Parameters

### filePath

`string`

The path to the file where logs will be written.

## Returns

`object`

### log()

> **log**: (`level`, `message`, `meta`) => `void`

#### Parameters

##### level

[`LogLevel`](../type-aliases/LogLevel.md)

##### message

`string`

##### meta

`any`[] = `[]`

#### Returns

`void`

### write()

> **write**: (`message`) => `void`

#### Parameters

##### message

`string`

#### Returns

`void`
