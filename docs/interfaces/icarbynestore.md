[carbyne-db](../README.md) > [ICarbyneStore](../interfaces/icarbynestore.md)

# Interface: ICarbyneStore

This interface implements a Carbyne method of storage and is passed to [Carbyne.constructor](../classes/carbyne.md#constructor) to instruct Carbyne how to store its data. Any class implementing these methods is accepted by Carbyne.

A Carbyne store is expected to support concurrency because [Carbyne.serialize](../classes/carbyne.md#serialize) and [Carbyne.deserialize](../classes/carbyne.md#deserialize) perform parallel accesses.

It is your responsibility to fully test your store. Refer to the Carbyne tests if you need an inspiration. Refer to the existing Carbyne stores for examples of fully tested and working stores.

## Hierarchy

**ICarbyneStore**

## Implemented by

* [CarbyneDirectoryStore](../classes/carbynedirectorystore.md)
* [CarbyneMemoryStore](../classes/carbynememorystore.md)

## Index

### Methods

* [clear](icarbynestore.md#clear)
* [delKey](icarbynestore.md#delkey)
* [genID](icarbynestore.md#genid)
* [getData](icarbynestore.md#getdata)
* [getKey](icarbynestore.md#getkey)
* [getKeys](icarbynestore.md#getkeys)
* [getLength](icarbynestore.md#getlength)
* [getType](icarbynestore.md#gettype)
* [hasKey](icarbynestore.md#haskey)
* [push](icarbynestore.md#push)
* [setData](icarbynestore.md#setdata)
* [setKey](icarbynestore.md#setkey)
* [setRef](icarbynestore.md#setref)
* [supportsKeys](icarbynestore.md#supportskeys)

---

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

*Defined in [lib/types.ts:229](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L229)*

Clears the database, immediately and irreversibly dropping all data. [Carbyne.fromObject](../classes/carbyne.md#fromobject) uses this.

**Returns:** `Promise`<`void`>

___
<a id="delkey"></a>

###  delKey

▸ **delKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`void`>

*Defined in [lib/types.ts:284](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L284)*

Deletes a key from an object. This is used by [Carbyne.delKey](../classes/carbyne.md#delkey).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| key |  `number` &#124; `string`|  - |

**Returns:** `Promise`<`void`>

___
<a id="genid"></a>

###  genID

▸ **genID**(): `Promise`<`string`>

*Defined in [lib/types.ts:237](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L237)*

Generates a new ID to use for objects. The default implementation simply calls `uuid.v4 ()` and calls it a day.

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Defined in [lib/types.ts:334](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L334)*

Gets the data of a custom object. This is used by [Carbyne.getData](../classes/carbyne.md#getdata).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<[TCarbyneValue](../#tcarbynevalue)>

*Defined in [lib/types.ts:258](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L258)*

Gets the value of a key in an object. This is used by [Carbyne.getKey](../classes/carbyne.md#getkey).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| key |  `number` &#124; `string`|  - |

**Returns:** `Promise`<[TCarbyneValue](../#tcarbynevalue)>

___
<a id="getkeys"></a>

###  getKeys

▸ **getKeys**(id: *`string`*): `Promise`<`string`[]>

*Defined in [lib/types.ts:314](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L314)*

Gets the keys of an object specified by ID. This is used by [Carbyne.deserialize](../classes/carbyne.md#deserialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`string`[]>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`number`>

*Defined in [lib/types.ts:305](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L305)*

Gets the length of an array specified by ID. This is used by [Carbyne.deserialize](../classes/carbyne.md#deserialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<`number`>

___
<a id="gettype"></a>

###  getType

▸ **getType**(id: *`string`*): `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

*Defined in [lib/types.ts:296](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L296)*

Gets the type of an object specified by ID. This is used by [Carbyne.deserialize](../classes/carbyne.md#deserialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

___
<a id="haskey"></a>

###  hasKey

▸ **hasKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`boolean`>

*Defined in [lib/types.ts:356](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L356)*

Returns whether the object `id` has the key `key`. This is used by [Carbyne.hasKey](../classes/carbyne.md#haskey).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| key |  `number` &#124; `string`|  - |

**Returns:** `Promise`<`boolean`>

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`number`>

*Defined in [lib/types.ts:323](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L323)*

Pushes an object to an array. This is used by [Carbyne.push](../classes/carbyne.md#push).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| value | [TCarbyneValue](../#tcarbynevalue) |  - |

**Returns:** `Promise`<`number`>
The index of the newly pushed object.

___
<a id="setdata"></a>

###  setData

▸ **setData**(id: *`string`*, data: *`any`*): `Promise`<`void`>

*Defined in [lib/types.ts:343](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L343)*

Sets the data of a custom object. This is used by [Carbyne.setData](../classes/carbyne.md#setdata).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| data | `any` |  - |

**Returns:** `Promise`<`void`>

___
<a id="setkey"></a>

###  setKey

▸ **setKey**(id: *`string`*, key: * `number` &#124; `string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/types.ts:271](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L271)*

Sets the value of a key in an object. This is used by [Carbyne.setKey](../classes/carbyne.md#setkey).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| key |  `number` &#124; `string`|  - |
| value | [TCarbyneValue](../#tcarbynevalue) |  - |

**Returns:** `Promise`<`void`>

___
<a id="setref"></a>

###  setRef

▸ **setRef**(id: *`string`*, obj: *`any`*): `Promise`<`void`>

*Defined in [lib/types.ts:246](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L246)*

Sets a reference by ID. This is used by [Carbyne.serialize](../classes/carbyne.md#serialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| obj | `any` |  - |

**Returns:** `Promise`<`void`>

___
<a id="supportskeys"></a>

###  supportsKeys

▸ **supportsKeys**(id: *`string`*): `Promise`<`boolean`>

*Defined in [lib/types.ts:368](https://github.com/allotropelabs/carbyne/blob/bf65518/lib/types.ts#L368)*

Test if an object supports [Carbyne.getKey](../classes/carbyne.md#getkey)/[Carbyne.setKey](../classes/carbyne.md#setkey). See [Carbyne.supportsKeys](../classes/carbyne.md#supportskeys).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  The ID of the object to check. |

**Returns:** `Promise`<`boolean`>

___

