[carbyne-db](../README.md) > ["lib/stores/memory"](../modules/_lib_stores_memory_.md) > [CarbyneMemoryStore](../classes/_lib_stores_memory_.carbynememorystore.md)

# Class: CarbyneMemoryStore

## Hierarchy

**CarbyneMemoryStore**

## Implements

* [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)

## Index

### Constructors

* [constructor](_lib_stores_memory_.carbynememorystore.md#constructor)

### Methods

* [clear](_lib_stores_memory_.carbynememorystore.md#clear)
* [genID](_lib_stores_memory_.carbynememorystore.md#genid)
* [getData](_lib_stores_memory_.carbynememorystore.md#getdata)
* [getKey](_lib_stores_memory_.carbynememorystore.md#getkey)
* [getKeys](_lib_stores_memory_.carbynememorystore.md#getkeys)
* [getLength](_lib_stores_memory_.carbynememorystore.md#getlength)
* [getRef](_lib_stores_memory_.carbynememorystore.md#getref)
* [getType](_lib_stores_memory_.carbynememorystore.md#gettype)
* [push](_lib_stores_memory_.carbynememorystore.md#push)
* [setData](_lib_stores_memory_.carbynememorystore.md#setdata)
* [setKey](_lib_stores_memory_.carbynememorystore.md#setkey)
* [setRef](_lib_stores_memory_.carbynememorystore.md#setref)

### Object literals

* [model](_lib_stores_memory_.carbynememorystore.md#model)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CarbyneMemoryStore**(): [CarbyneMemoryStore](_lib_stores_memory_.carbynememorystore.md)

*Defined in [lib/stores/memory.ts:12](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L12)*

**Returns:** [CarbyneMemoryStore](_lib_stores_memory_.carbynememorystore.md)

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(newRoot?: *`any`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[clear](../interfaces/_lib_types_.icarbynestore.md#clear)*

*Defined in [lib/stores/memory.ts:33](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` newRoot | `any` |

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[genID](../interfaces/_lib_types_.icarbynestore.md#genid)*

*Defined in [lib/stores/memory.ts:40](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L40)*

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[getData](../interfaces/_lib_types_.icarbynestore.md#getdata)*

*Defined in [lib/stores/memory.ts:97](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L97)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`any`>

*Defined in [lib/stores/memory.ts:55](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L55)*

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

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[getKeys](../interfaces/_lib_types_.icarbynestore.md#getkeys)*

*Defined in [lib/stores/memory.ts:70](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`string`[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[getLength](../interfaces/_lib_types_.icarbynestore.md#getlength)*

*Defined in [lib/stores/memory.ts:66](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getref"></a>

### `<Protected>` getRef

▸ **getRef**(id: *`string`*): `Promise`< [TCarbyneRef](../modules/_lib_types_.md#tcarbyneref) & `object`>

*Defined in [lib/stores/memory.ts:21](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L21)*

Gets an object specified by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`< [TCarbyneRef](../modules/_lib_types_.md#tcarbyneref) & `object`>
{Promise<TCarbyneRefInternal>

___
<a id="gettype"></a>

###  getType

▸ **getType**(id: *`string`*): `Promise`<[TCarbyneTypeObj](../modules/_lib_types_.md#tcarbynetypeobj)>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[getType](../interfaces/_lib_types_.icarbynestore.md#gettype)*

*Defined in [lib/stores/memory.ts:62](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<[TCarbyneTypeObj](../modules/_lib_types_.md#tcarbynetypeobj)>

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[push](../interfaces/_lib_types_.icarbynestore.md#push)*

*Defined in [lib/stores/memory.ts:90](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L90)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| value | [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue) |

**Returns:** `Promise`<`void`>

___
<a id="setdata"></a>

###  setData

▸ **setData**(id: *`string`*, value: *[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/stores/memory.ts:101](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| value | [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue) |

**Returns:** `Promise`<`void`>

___
<a id="setkey"></a>

###  setKey

▸ **setKey**(id: *`string`*, key: * `number` &#124; `string`*, value: *[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/stores/memory.ts:82](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L82)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|
| value | [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue) |

**Returns:** `Promise`<`void`>

___
<a id="setref"></a>

###  setRef

▸ **setRef**(id: *`string`*, obj: *`any`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[setRef](../interfaces/_lib_types_.icarbynestore.md#setref)*

*Defined in [lib/stores/memory.ts:44](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L44)*

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

*Defined in [lib/stores/memory.ts:9](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L9)*

<a id="model.refs"></a>

####  refs

**● refs**: *`object`*

*Defined in [lib/stores/memory.ts:11](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L11)*

#### Type declaration

___
<a id="model.root"></a>

####  root

**● root**: *`null`* =  null

*Defined in [lib/stores/memory.ts:10](https://github.com/allotropelabs/carbyne/blob/e902363/lib/stores/memory.ts#L10)*

___

___

