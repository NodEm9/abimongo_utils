[**abimongo_utils v0.4.0**](../README.md)

***

[abimongo_utils](../README.md) / createCircuitBreaker

# Function: createCircuitBreaker()

> **createCircuitBreaker**\<`T`\>(`fn`, `failureThreshold`, `cooldownPeriod`): (...`args`) => `Promise`\<`ReturnType`\<`T`\>\>

Defined in: [utils/circuitBreaker/circuitBreaker.ts:1](https://github.com/NodEm9/abimongo_utils/blob/a65cd6462ac155e030ff8f62ef498bb805490cbf/src/utils/circuitBreaker/circuitBreaker.ts#L1)

## Type Parameters

### T

`T` *extends* (...`args`) => `Promise`\<`any`\>

## Parameters

### fn

`T`

### failureThreshold

`number` = `3`

### cooldownPeriod

`number` = `10_000`

## Returns

> (...`args`): `Promise`\<`ReturnType`\<`T`\>\>

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`Promise`\<`ReturnType`\<`T`\>\>
