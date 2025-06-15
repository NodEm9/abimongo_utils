[**abimongo_utils v0.3.5**](../README.md)

***

[abimongo_utils](../README.md) / FileTransporter

# Class: FileTransporter

Defined in: [transports/fileTransport.ts:6](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/fileTransport.ts#L6)

## Implements

- [`Transporter`](../interfaces/Transporter.md)

## Constructors

### Constructor

> **new FileTransporter**(`stream`): `FileTransporter`

Defined in: [transports/fileTransport.ts:7](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/fileTransport.ts#L7)

#### Parameters

##### stream

`WriteStream`

#### Returns

`FileTransporter`

## Methods

### log()

> **log**(`level`, `message`, `meta`): `void`

Defined in: [transports/fileTransport.ts:14](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/fileTransport.ts#L14)

#### Parameters

##### level

[`LogLevel`](../type-aliases/LogLevel.md)

##### message

`string`

##### meta

`any`[] = `[]`

#### Returns

`void`

#### Implementation of

[`Transporter`](../interfaces/Transporter.md).[`log`](../interfaces/Transporter.md#log)

***

### write()

> **write**(`message`): `void`

Defined in: [transports/fileTransport.ts:9](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/fileTransport.ts#L9)

#### Parameters

##### message

`string`

#### Returns

`void`

#### Implementation of

[`Transporter`](../interfaces/Transporter.md).[`write`](../interfaces/Transporter.md#write)
