[carbyne](../README.md) > ["lib/types"](../modules/_lib_types_.md) > [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)

# Interface: ICarbyneStore

## Hierarchy

**ICarbyneStore**

## Implemented by

* [CarbyneDirectoryStore](../classes/_lib_stores_directory_.carbynedirectorystore.md)
* [CarbyneMemoryStore](../classes/_lib_stores_memory_.carbynememorystore.md)

## Index

### Methods

* [clear](_lib_types_.icarbynestore.md#clear)
* [genID](_lib_types_.icarbynestore.md#genid)
* [getData](_lib_types_.icarbynestore.md#getdata)
* [getKey](_lib_types_.icarbynestore.md#getkey)
* [getKeys](_lib_types_.icarbynestore.md#getkeys)
* [getLength](_lib_types_.icarbynestore.md#getlength)
* [getType](_lib_types_.icarbynestore.md#gettype)
* [push](_lib_types_.icarbynestore.md#push)
* [setData](_lib_types_.icarbynestore.md#setdata)
* [setKey](_lib_types_.icarbynestore.md#setkey)
* [setRef](_lib_types_.icarbynestore.md#setref)

---

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

*Defined in lib/types.ts:83*

Clears the database.

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Defined in lib/types.ts:89*

Gets a new ID to use for objects.

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Defined in lib/types.ts:162*

Gets the data of a custom object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(obj: *`any`*, key: * `number` &#124; `string`*): `Promise`<[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)>

*Defined in lib/types.ts:108*

Gets the value of a key in an object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| key |  `number` &#124; `string`|  - |

**Returns:** `Promise`<[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)>

___
<a id="getkeys"></a>

###  getKeys

▸ **getKeys**(id: *`string`*): `Promise`<`string`[]>

*Defined in lib/types.ts:145*

Gets the keys of an object specified by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`string`[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`number`>

*Defined in lib/types.ts:138*

Gets the length of an array specified by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`number`>

___
<a id="gettype"></a>

###  getType

▸ **getType**(id: *`string`*): `Promise`<[TCarbyneTypeObj](../modules/_lib_types_.md#tcarbynetypeobj)>

*Defined in lib/types.ts:131*

Gets the type of an object specified by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<[TCarbyneTypeObj](../modules/_lib_types_.md#tcarbynetypeobj)>

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`void`>

*Defined in lib/types.ts:152*

Pushes an object to an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| value | [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue) |   |

**Returns:** `Promise`<`void`>

___
<a id="setdata"></a>

###  setData

▸ **setData**(id: *`string`*, data: *`any`*): `Promise`<`void`>

*Defined in lib/types.ts:170*

Sets the data of a custom object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| data | `any` |  - |

**Returns:** `Promise`<`void`>

___
<a id="setkey"></a>

###  setKey

▸ **setKey**(obj: *`any`*, key: * `number` &#124; `string`*, value: *[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`void`>

*Defined in lib/types.ts:120*

Sets the value of a key in an object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| key |  `number` &#124; `string`|  - |
| value | [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue) |  - |

**Returns:** `Promise`<`void`>

___
<a id="setref"></a>

###  setRef

▸ **setRef**(id: *`string`*, obj: *`any`*): `Promise`<`void`>

*Defined in lib/types.ts:97*

Sets a reference by ID.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| obj | `any` |  - |

**Returns:** `Promise`<`void`>

___

