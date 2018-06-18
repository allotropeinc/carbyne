[carbyne](../README.md) > ["lib/stores/directory"](../modules/_lib_stores_directory_.md) > [CarbyneDirectoryStore](../classes/_lib_stores_directory_.carbynedirectorystore.md)

# Class: CarbyneDirectoryStore

## Hierarchy

**CarbyneDirectoryStore**

## Implements

* [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)

## Index

### Constructors

* [constructor](_lib_stores_directory_.carbynedirectorystore.md#constructor)

### Properties

* [dirName](_lib_stores_directory_.carbynedirectorystore.md#dirname)

### Methods

* [clear](_lib_stores_directory_.carbynedirectorystore.md#clear)
* [genID](_lib_stores_directory_.carbynedirectorystore.md#genid)
* [getData](_lib_stores_directory_.carbynedirectorystore.md#getdata)
* [getKey](_lib_stores_directory_.carbynedirectorystore.md#getkey)
* [getKeys](_lib_stores_directory_.carbynedirectorystore.md#getkeys)
* [getLength](_lib_stores_directory_.carbynedirectorystore.md#getlength)
* [getObjectDir](_lib_stores_directory_.carbynedirectorystore.md#getobjectdir)
* [getType](_lib_stores_directory_.carbynedirectorystore.md#gettype)
* [push](_lib_stores_directory_.carbynedirectorystore.md#push)
* [setData](_lib_stores_directory_.carbynedirectorystore.md#setdata)
* [setKey](_lib_stores_directory_.carbynedirectorystore.md#setkey)
* [setRef](_lib_stores_directory_.carbynedirectorystore.md#setref)
* [pack](_lib_stores_directory_.carbynedirectorystore.md#pack)
* [unpack](_lib_stores_directory_.carbynedirectorystore.md#unpack)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CarbyneDirectoryStore**(dirName: *`string`*): [CarbyneDirectoryStore](_lib_stores_directory_.carbynedirectorystore.md)

*Defined in lib/stores/directory.ts:12*

**Parameters:**

| Param | Type |
| ------ | ------ |
| dirName | `string` |

**Returns:** [CarbyneDirectoryStore](_lib_stores_directory_.carbynedirectorystore.md)

___

## Properties

<a id="dirname"></a>

### `<Protected>` dirName

**● dirName**: *`string`*

*Defined in lib/stores/directory.ts:12*

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[clear](../interfaces/_lib_types_.icarbynestore.md#clear)*

*Defined in lib/stores/directory.ts:58*

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[genID](../interfaces/_lib_types_.icarbynestore.md#genid)*

*Defined in lib/stores/directory.ts:62*

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[getData](../interfaces/_lib_types_.icarbynestore.md#getdata)*

*Defined in lib/stores/directory.ts:199*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`any`>

*Defined in lib/stores/directory.ts:137*

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

*Defined in lib/stores/directory.ts:181*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`string`[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`number`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[getLength](../interfaces/_lib_types_.icarbynestore.md#getlength)*

*Defined in lib/stores/directory.ts:177*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`number`>

___
<a id="getobjectdir"></a>

### `<Protected>` getObjectDir

▸ **getObjectDir**(id: *`string`*): `Promise`<`string`>

*Defined in lib/stores/directory.ts:43*

Gets the directory an object is stored in.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`string`>

___
<a id="gettype"></a>

###  getType

▸ **getType**(id: *`string`*): `Promise`< "symbol" &#124; "object" &#124; "array">

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[getType](../interfaces/_lib_types_.icarbynestore.md#gettype)*

*Defined in lib/stores/directory.ts:167*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`< "symbol" &#124; "object" &#124; "array">

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md).[push](../interfaces/_lib_types_.icarbynestore.md#push)*

*Defined in lib/stores/directory.ts:188*

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

*Defined in lib/stores/directory.ts:210*

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

*Defined in lib/stores/directory.ts:152*

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

*Defined in lib/stores/directory.ts:66*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| obj | `any` |

**Returns:** `Promise`<`void`>

___
<a id="pack"></a>

### `<Static>``<Protected>` pack

▸ **pack**(obj: *`any`*): `Promise`<`Buffer`>

*Defined in lib/stores/directory.ts:25*

Packs an object into a packed format for storage.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |

**Returns:** `Promise`<`Buffer`>

___
<a id="unpack"></a>

### `<Static>``<Protected>` unpack

▸ **unpack**(buf: *`Buffer`*): `Promise`<`any`>

*Defined in lib/stores/directory.ts:34*

Unpacks an object encoded in a packed format.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buf | `Buffer` |  - |

**Returns:** `Promise`<`any`>

___

