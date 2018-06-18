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

*Defined in [lib/stores/memory.ts:12](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L12)*

**Returns:** [CarbyneMemoryStore](carbynememorystore.md)

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(newRoot?: *`any`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[clear](../interfaces/icarbynestore.md#clear)*

*Defined in [lib/stores/memory.ts:33](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` newRoot | `any` |

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[genID](../interfaces/icarbynestore.md#genid)*

*Defined in [lib/stores/memory.ts:40](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L40)*

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getData](../interfaces/icarbynestore.md#getdata)*

*Defined in [lib/stores/memory.ts:97](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L97)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getKey](../interfaces/icarbynestore.md#getkey)*

*Defined in [lib/stores/memory.ts:55](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|

**Returns:** `Promise`<`any`>

___
<a id="getkeys"></a>

###  getKeys

▸ **getKeys**(id: *`string`*): `Promise`<`string`[]>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getKeys](../interfaces/icarbynestore.md#getkeys)*

*Defined in [lib/stores/memory.ts:70](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`string`[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getLength](../interfaces/icarbynestore.md#getlength)*

*Defined in [lib/stores/memory.ts:66](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getref"></a>

### `<Protected>` getRef

▸ **getRef**(id: *`string`*): `Promise`< [TCarbyneRef](../#tcarbyneref) & `object`>

*Defined in [lib/stores/memory.ts:21](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L21)*

Gets an object specified by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`< [TCarbyneRef](../#tcarbyneref) & `object`>
{Promise<TCarbyneRefInternal>

___
<a id="gettype"></a>

###  getType

▸ **getType**(id: *`string`*): `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getType](../interfaces/icarbynestore.md#gettype)*

*Defined in [lib/stores/memory.ts:62](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L62)*

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

*Defined in [lib/stores/memory.ts:90](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L90)*

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

*Defined in [lib/stores/memory.ts:101](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L101)*

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

*Defined in [lib/stores/memory.ts:82](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L82)*

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

*Defined in [lib/stores/memory.ts:44](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L44)*

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

*Defined in [lib/stores/memory.ts:9](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L9)*

<a id="model.refs"></a>

####  refs

**● refs**: *`object`*

*Defined in [lib/stores/memory.ts:11](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L11)*

#### Type declaration

___
<a id="model.root"></a>

####  root

**● root**: *`null`* =  null

*Defined in [lib/stores/memory.ts:10](https://github.com/allotropelabs/carbyne/blob/70b4949/lib/stores/memory.ts#L10)*

___

___

