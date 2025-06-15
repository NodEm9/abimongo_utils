[**abimongo_utils v0.3.5**](../README.md)

***

[abimongo_utils](../README.md) / BufferedTransporter

# Class: BufferedTransporter

Defined in: [transports/buffered.transporter.ts:10](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/buffered.transporter.ts#L10)

## Constructors

### Constructor

> **new BufferedTransporter**(`transporter`, `options?`): `BufferedTransporter`

Defined in: [transports/buffered.transporter.ts:17](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/buffered.transporter.ts#L17)

#### Parameters

##### transporter

###### write

(`message`) => `void`

##### options?

###### flushInterval?

`number`

###### flushSize?

`number`

#### Returns

`BufferedTransporter`

## Methods

### flush()

> **flush**(): `void`

Defined in: [transports/buffered.transporter.ts:40](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/buffered.transporter.ts#L40)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [transports/buffered.transporter.ts:54](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/buffered.transporter.ts#L54)

#### Returns

`void`

***

### write()

> **write**(`level`, `message`, `meta`): `void`

Defined in: [transports/buffered.transporter.ts:27](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/transports/buffered.transporter.ts#L27)

#### Parameters

##### level

`string`

##### message

`string`

##### meta

`any`[]

#### Returns

`void`
