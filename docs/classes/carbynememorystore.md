[carbyne-db](../README.md) > [CarbyneMemoryStore](../classes/carbynememorystore.md)

# Class: CarbyneMemoryStore

A store that uses exclusively memory to store a Carbyne database. **Does not** support saving to a file or otherwise persisting data. This is meant purely for testing or temporary data and should not be used for anything you want to save. Anyway, example:

```typescript
import { Carbyne, CarbyneMemoryStore } from 'carbyne-db'

const store = new CarbyneMemoryStore ()
const db = new Carbyne ( store )

// hurray!
```

## Hierarchy

**CarbyneMemoryStore**

## Implements

* [ICarbyneStore](../interfaces/icarbynestore.md)

## Index

### Constructors

* [constructor](carbynememorystore.md#constructor)

### Methods

* [clear](carbynememorystore.md#clear)
* [delKey](carbynememorystore.md#delkey)
* [genID](carbynememorystore.md#genid)
* [getData](carbynememorystore.md#getdata)
* [getKey](carbynememorystore.md#getkey)
* [getKeys](carbynememorystore.md#getkeys)
* [getLength](carbynememorystore.md#getlength)
* [getRef](carbynememorystore.md#getref)
* [getType](carbynememorystore.md#gettype)
* [hasKey](carbynememorystore.md#haskey)
* [push](carbynememorystore.md#push)
* [setData](carbynememorystore.md#setdata)
* [setKey](carbynememorystore.md#setkey)
* [setRef](carbynememorystore.md#setref)
* [supportsKeys](carbynememorystore.md#supportskeys)

### Object literals

* [model](carbynememorystore.md#model)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CarbyneMemoryStore**(): [CarbyneMemoryStore](carbynememorystore.md)

*Defined in [lib/stores/memory.ts:36](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L36)*

Initializes the store. Ish. This does absolutely nothing, and it doesn't need to do anything. [Carbyne](carbyne.md) will call methods on it when it needs to use the store.

**Returns:** [CarbyneMemoryStore](carbynememorystore.md)

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[clear](../interfaces/icarbynestore.md#clear)*

*Defined in [lib/stores/memory.ts:62](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L62)*

**Returns:** `Promise`<`void`>

___
<a id="delkey"></a>

###  delKey

▸ **delKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[delKey](../interfaces/icarbynestore.md#delkey)*

*Defined in [lib/stores/memory.ts:141](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L141)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[genID](../interfaces/icarbynestore.md#genid)*

*Defined in [lib/stores/memory.ts:69](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L69)*

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getData](../interfaces/icarbynestore.md#getdata)*

*Defined in [lib/stores/memory.ts:130](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L130)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`< `object` &#124; `object`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getKey](../interfaces/icarbynestore.md#getkey)*

*Defined in [lib/stores/memory.ts:84](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L84)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|

**Returns:** `Promise`< `object` &#124; `object`>

___
<a id="getkeys"></a>

###  getKeys

▸ **getKeys**(id: *`string`*): `Promise`<`string`[]>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getKeys](../interfaces/icarbynestore.md#getkeys)*

*Defined in [lib/stores/memory.ts:99](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L99)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`string`[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`number`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getLength](../interfaces/icarbynestore.md#getlength)*

*Defined in [lib/stores/memory.ts:95](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`number`>

___
<a id="getref"></a>

### `<Protected>` getRef

▸ **getRef**(id: *`string`*): `Promise`<[TCarbyneRefInternal](../#tcarbynerefinternal)>

*Defined in [lib/stores/memory.ts:50](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L50)*

Gets an object specified by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<[TCarbyneRefInternal](../#tcarbynerefinternal)>

___
<a id="gettype"></a>

###  getType

▸ **getType**(id: *`string`*): `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getType](../interfaces/icarbynestore.md#gettype)*

*Defined in [lib/stores/memory.ts:91](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L91)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

___
<a id="haskey"></a>

###  hasKey

▸ **hasKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`boolean`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[hasKey](../interfaces/icarbynestore.md#haskey)*

*Defined in [lib/stores/memory.ts:148](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L148)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|

**Returns:** `Promise`<`boolean`>

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`number`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[push](../interfaces/icarbynestore.md#push)*

*Defined in [lib/stores/memory.ts:119](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L119)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| value | [TCarbyneValue](../#tcarbynevalue) |

**Returns:** `Promise`<`number`>

___
<a id="setdata"></a>

###  setData

▸ **setData**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/stores/memory.ts:134](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L134)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| value | [TCarbyneValue](../#tcarbynevalue) |

**Returns:** `Promise`<`void`>

___
<a id="setkey"></a>

###  setKey

▸ **setKey**(id: *`string`*, key: * `number` &#124; `string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[setKey](../interfaces/icarbynestore.md#setkey)*

*Defined in [lib/stores/memory.ts:111](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|
| value | [TCarbyneValue](../#tcarbynevalue) |

**Returns:** `Promise`<`void`>

___
<a id="setref"></a>

###  setRef

▸ **setRef**(id: *`string`*, obj: *`any`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[setRef](../interfaces/icarbynestore.md#setref)*

*Defined in [lib/stores/memory.ts:73](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| obj | `any` |

**Returns:** `Promise`<`void`>

___
<a id="supportskeys"></a>

###  supportsKeys

▸ **supportsKeys**(id: *`string`*): `Promise`<`boolean`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[supportsKeys](../interfaces/icarbynestore.md#supportskeys)*

*Defined in [lib/stores/memory.ts:155](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L155)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`boolean`>

___

## Object literals

<a id="model"></a>

### `<Protected>` model

**model**: *`object`*

*Defined in [lib/stores/memory.ts:33](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L33)*

<a id="model.refs"></a>

####  refs

**● refs**: *`object`*

*Defined in [lib/stores/memory.ts:35](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L35)*

#### Type declaration

___
<a id="model.root"></a>

####  root

**● root**: *`null`* =  null

*Defined in [lib/stores/memory.ts:34](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/stores/memory.ts#L34)*

___

___

