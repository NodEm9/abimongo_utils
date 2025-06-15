[**abimongo_utils v0.3.5**](../README.md)

***

[abimongo_utils](../README.md) / DefaultLogger

# Variable: DefaultLogger

> `const` **DefaultLogger**: `object`

Defined in: [logger/defaultLogger.ts:3](https://github.com/NodEm9/abimongo_utils/blob/62e08380578108b0497622fb9a13efb3beac383a/src/logger/defaultLogger.ts#L3)

## Type declaration

### debug()

> **debug**: (...`args`) => `void`

#### Parameters

##### args

...`any`[]

#### Returns

`void`

### error()

> **error**: (...`args`) => `void`

#### Parameters

##### args

...`any`[]

#### Returns

`void`

### fatal()

> **fatal**: (...`args`) => `void`

#### Parameters

##### args

...`any`[]

#### Returns

`void`

### info()

> **info**: (...`args`) => `void`

#### Parameters

##### args

...`any`[]

#### Returns

`void`

### log()

> **log**: (`level`, `message`, `meta?`) => `void`

#### Parameters

##### level

[`LogLevel`](../type-aliases/LogLevel.md)

##### message

`string`

##### meta?

[`LogMeta`](../interfaces/LogMeta.md)

#### Returns

`void`

### trace()

> **trace**: (...`args`) => `void`

#### Parameters

##### args

...`any`[]

#### Returns

`void`

### warn()

> **warn**: (...`args`) => `void`

#### Parameters

##### args

...`any`[]

#### Returns

`void`
