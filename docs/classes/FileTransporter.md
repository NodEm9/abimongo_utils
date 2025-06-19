[**abimongo_utils v1.1.0**](../README.md)

***

[abimongo_utils](../README.md) / FileTransporter

# Class: FileTransporter

Defined in: [transports/fileTransport.ts:6](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/fileTransport.ts#L6)

## Implements

- [`Transporter`](../interfaces/Transporter.md)

## Constructors

### Constructor

> **new FileTransporter**(`stream`): `FileTransporter`

Defined in: [transports/fileTransport.ts:7](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/fileTransport.ts#L7)

#### Parameters

##### stream

`WriteStream`

#### Returns

`FileTransporter`

## Properties

### stream

> **stream**: `WriteStream`

Defined in: [transports/fileTransport.ts:7](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/fileTransport.ts#L7)

#### Implementation of

[`Transporter`](../interfaces/Transporter.md).[`stream`](../interfaces/Transporter.md#stream)

## Methods

### log()

> **log**(`level`, `message`, `meta`): `void`

Defined in: [transports/fileTransport.ts:12](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/fileTransport.ts#L12)

#### Parameters

##### level

[`LogLevel`](../type-aliases/LogLevel.md)

##### message

`string`

##### meta

`any`[] = `[]`

#### Returns

`void`

***

### write()

> **write**(`message`): `void`

Defined in: [transports/fileTransport.ts:8](https://github.com/NodEm9/abimongo_utils/blob/ee68e61821a92d10b78d3ea90016374fc2d4aef0/src/transports/fileTransport.ts#L8)

#### Parameters

##### message

`string`

#### Returns

`void`

#### Implementation of

[`Transporter`](../interfaces/Transporter.md).[`write`](../interfaces/Transporter.md#write)
