[carbyne-db](../README.md) > [ICarbyneStore](../interfaces/icarbynestore.md)

# Interface: ICarbyneStore

The interface you need to implement in a class passed to [Carbyne.constructor](../classes/carbyne.md#constructor).

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
* [push](icarbynestore.md#push)
* [setData](icarbynestore.md#setdata)
* [setKey](icarbynestore.md#setkey)
* [setRef](icarbynestore.md#setref)

---

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

*Defined in [lib/types.ts:221](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L221)*

Clears the database, immediately and irreversibly dropping all data. [Carbyne.fromObject](../classes/carbyne.md#fromobject) uses this.

**Returns:** `Promise`<`void`>

___
<a id="delkey"></a>

###  delKey

▸ **delKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`void`>

*Defined in [lib/types.ts:276](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L276)*

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

*Defined in [lib/types.ts:229](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L229)*

Generates a new ID to use for objects. The default implementation simply calls `uuid.v4 ()` and calls it a day.

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Defined in [lib/types.ts:325](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L325)*

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

*Defined in [lib/types.ts:250](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L250)*

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

*Defined in [lib/types.ts:306](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L306)*

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

*Defined in [lib/types.ts:297](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L297)*

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

*Defined in [lib/types.ts:288](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L288)*

Gets the type of an object specified by ID. This is used by [Carbyne.deserialize](../classes/carbyne.md#deserialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |

**Returns:** `Promise`<[TCarbyneTypeObj](../#tcarbynetypeobj)>

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/types.ts:314](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L314)*

Pushes an object to an array. This is used by [Carbyne.push](../classes/carbyne.md#push).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| value | [TCarbyneValue](../#tcarbynevalue) |   |

**Returns:** `Promise`<`void`>

___
<a id="setdata"></a>

###  setData

▸ **setData**(id: *`string`*, data: *`any`*): `Promise`<`void`>

*Defined in [lib/types.ts:334](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L334)*

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

*Defined in [lib/types.ts:263](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L263)*

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

*Defined in [lib/types.ts:238](https://github.com/allotropelabs/carbyne/blob/373c3f0/lib/types.ts#L238)*

Sets a reference by ID. This is used by [Carbyne.serialize](../classes/carbyne.md#serialize).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  - |
| obj | `any` |  - |

**Returns:** `Promise`<`void`>

___

