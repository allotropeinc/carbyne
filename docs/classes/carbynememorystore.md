[carbyne-db](../README.md) > [CarbyneMemoryStore](../classes/carbynememorystore.md)

# Class: CarbyneMemoryStore

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
* [push](carbynememorystore.md#push)
* [setData](carbynememorystore.md#setdata)
* [setKey](carbynememorystore.md#setkey)
* [setRef](carbynememorystore.md#setref)

### Object literals

* [model](carbynememorystore.md#model)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CarbyneMemoryStore**(): [CarbyneMemoryStore](carbynememorystore.md)

*Defined in [lib/stores/memory.ts:21](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L21)*

**Returns:** [CarbyneMemoryStore](carbynememorystore.md)

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(newRoot?: *`any`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[clear](../interfaces/icarbynestore.md#clear)*

*Defined in [lib/stores/memory.ts:42](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` newRoot | `any` |

**Returns:** `Promise`<`void`>

___
<a id="delkey"></a>

###  delKey

▸ **delKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[delKey](../interfaces/icarbynestore.md#delkey)*

*Defined in [lib/stores/memory.ts:117](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L117)*

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

*Defined in [lib/stores/memory.ts:49](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L49)*

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getData](../interfaces/icarbynestore.md#getdata)*

*Defined in [lib/stores/memory.ts:106](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L106)*

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

*Defined in [lib/stores/memory.ts:64](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L64)*

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

*Defined in [lib/stores/memory.ts:79](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L79)*

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

*Defined in [lib/stores/memory.ts:75](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`number`>

___
<a id="getref"></a>

### `<Protected>` getRef

▸ **getRef**(id: *`string`*): `Promise`<[TCarbyneRefInternal](../#tcarbynerefinternal)>

*Defined in [lib/stores/memory.ts:30](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L30)*

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

*Defined in [lib/stores/memory.ts:71](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[push](../interfaces/icarbynestore.md#push)*

*Defined in [lib/stores/memory.ts:99](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L99)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| value | [TCarbyneValue](../#tcarbynevalue) |

**Returns:** `Promise`<`void`>

___
<a id="setdata"></a>

###  setData

▸ **setData**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/stores/memory.ts:110](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L110)*

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

*Defined in [lib/stores/memory.ts:91](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L91)*

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

*Defined in [lib/stores/memory.ts:53](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| obj | `any` |

**Returns:** `Promise`<`void`>

___

## Object literals

<a id="model"></a>

### `<Protected>` model

**model**: *`object`*

*Defined in [lib/stores/memory.ts:18](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L18)*

<a id="model.refs"></a>

####  refs

**● refs**: *`object`*

*Defined in [lib/stores/memory.ts:20](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L20)*

#### Type declaration

___
<a id="model.root"></a>

####  root

**● root**: *`null`* =  null

*Defined in [lib/stores/memory.ts:19](https://github.com/allotropelabs/carbyne/blob/1b38d61/lib/stores/memory.ts#L19)*

___

___

