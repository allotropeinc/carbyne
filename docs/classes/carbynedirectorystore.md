[carbyne-db](../README.md) > [CarbyneDirectoryStore](../classes/carbynedirectorystore.md)

# Class: CarbyneDirectoryStore

A store that uses a directory to store data rather than memory or a single file. Example:

```typescript
import { Carbyne, CarbyneDirectoryStore } from 'carbyne-db'

const store = new CarbyneDirectoryStore ( 'test-db' )
const db = new Carbyne ( store )

// hurray!
```

## Hierarchy

**CarbyneDirectoryStore**

## Implements

* [ICarbyneStore](../interfaces/icarbynestore.md)

## Index

### Constructors

* [constructor](carbynedirectorystore.md#constructor)

### Properties

* [dirName](carbynedirectorystore.md#dirname)

### Methods

* [clear](carbynedirectorystore.md#clear)
* [delKey](carbynedirectorystore.md#delkey)
* [genID](carbynedirectorystore.md#genid)
* [getData](carbynedirectorystore.md#getdata)
* [getKey](carbynedirectorystore.md#getkey)
* [getKeys](carbynedirectorystore.md#getkeys)
* [getLength](carbynedirectorystore.md#getlength)
* [getObjectDir](carbynedirectorystore.md#getobjectdir)
* [getType](carbynedirectorystore.md#gettype)
* [hasKey](carbynedirectorystore.md#haskey)
* [push](carbynedirectorystore.md#push)
* [setData](carbynedirectorystore.md#setdata)
* [setKey](carbynedirectorystore.md#setkey)
* [setRef](carbynedirectorystore.md#setref)
* [supportsKeys](carbynedirectorystore.md#supportskeys)
* [pack](carbynedirectorystore.md#pack)
* [unpack](carbynedirectorystore.md#unpack)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CarbyneDirectoryStore**(dirName: *`string`*): [CarbyneDirectoryStore](carbynedirectorystore.md)

*Defined in [lib/stores/directory.ts:62](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L62)*

Initialize the store with the given `dirName`.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| dirName | `string` |   |

**Returns:** [CarbyneDirectoryStore](carbynedirectorystore.md)

___

## Properties

<a id="dirname"></a>

### `<Protected>` dirName

**● dirName**: *`string`*

*Defined in [lib/stores/directory.ts:62](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L62)*

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[clear](../interfaces/icarbynestore.md#clear)*

*Defined in [lib/stores/directory.ts:113](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L113)*

**Returns:** `Promise`<`void`>

___
<a id="delkey"></a>

###  delKey

▸ **delKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`void`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[delKey](../interfaces/icarbynestore.md#delkey)*

*Defined in [lib/stores/directory.ts:293](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L293)*

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

*Defined in [lib/stores/directory.ts:120](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L120)*

**Returns:** `Promise`<`string`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getData](../interfaces/icarbynestore.md#getdata)*

*Defined in [lib/stores/directory.ts:269](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L269)*

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

*Defined in [lib/stores/directory.ts:197](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L197)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|

**Returns:** `Promise`<`any`>

___
<a id="getkeys"></a>

###  getKeys

▸ **getKeys**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getKeys](../interfaces/icarbynestore.md#getkeys)*

*Defined in [lib/stores/directory.ts:247](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L247)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(id: *`string`*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getLength](../interfaces/icarbynestore.md#getlength)*

*Defined in [lib/stores/directory.ts:243](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L243)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getobjectdir"></a>

### `<Protected>` getObjectDir

▸ **getObjectDir**(id: *`string`*): `Promise`<`string`>

*Defined in [lib/stores/directory.ts:98](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L98)*

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

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[getType](../interfaces/icarbynestore.md#gettype)*

*Defined in [lib/stores/directory.ts:233](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L233)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`< "symbol" &#124; "object" &#124; "array">

___
<a id="haskey"></a>

###  hasKey

▸ **hasKey**(id: *`string`*, key: * `number` &#124; `string`*): `Promise`<`boolean`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[hasKey](../interfaces/icarbynestore.md#haskey)*

*Defined in [lib/stores/directory.ts:306](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L306)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| key |  `number` &#124; `string`|

**Returns:** `Promise`<`boolean`>

___
<a id="push"></a>

###  push

▸ **push**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`any`>

*Implementation of [ICarbyneStore](../interfaces/icarbynestore.md).[push](../interfaces/icarbynestore.md#push)*

*Defined in [lib/stores/directory.ts:254](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L254)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |
| value | [TCarbyneValue](../#tcarbynevalue) |

**Returns:** `Promise`<`any`>

___
<a id="setdata"></a>

###  setData

▸ **setData**(id: *`string`*, value: *[TCarbyneValue](../#tcarbynevalue)*): `Promise`<`void`>

*Defined in [lib/stores/directory.ts:280](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L280)*

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

*Defined in [lib/stores/directory.ts:212](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L212)*

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

*Defined in [lib/stores/directory.ts:124](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L124)*

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

*Defined in [lib/stores/directory.ts:326](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L326)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="pack"></a>

### `<Static>``<Protected>` pack

▸ **pack**(obj: *`any`*): `Promise`<`Buffer`>

*Defined in [lib/stores/directory.ts:80](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L80)*

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

*Defined in [lib/stores/directory.ts:89](https://github.com/allotropelabs/carbyne/blob/a18f788/lib/stores/directory.ts#L89)*

Unpacks an object encoded in a packed format.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buf | `Buffer` |  - |

**Returns:** `Promise`<`any`>

___

