[carbyne](../README.md) > ["lib/index"](../modules/_lib_index_.md) > [Carbyne](../classes/_lib_index_.carbyne.md)

# Class: Carbyne

## Hierarchy

**Carbyne**

## Index

### Constructors

* [constructor](_lib_index_.carbyne.md#constructor)

### Properties

* [customObjects](_lib_index_.carbyne.md#customobjects)
* [deserializeCache](_lib_index_.carbyne.md#deserializecache)
* [serializeCache](_lib_index_.carbyne.md#serializecache)
* [store](_lib_index_.carbyne.md#store)
* [symbolIds](_lib_index_.carbyne.md#symbolids)

### Methods

* [clear](_lib_index_.carbyne.md#clear)
* [deserialize](_lib_index_.carbyne.md#deserialize)
* [getData](_lib_index_.carbyne.md#getdata)
* [getKey](_lib_index_.carbyne.md#getkey)
* [getType](_lib_index_.carbyne.md#gettype)
* [push](_lib_index_.carbyne.md#push)
* [registerCustomObject](_lib_index_.carbyne.md#registercustomobject)
* [serialize](_lib_index_.carbyne.md#serialize)
* [setData](_lib_index_.carbyne.md#setdata)
* [setKey](_lib_index_.carbyne.md#setkey)
* [toObject](_lib_index_.carbyne.md#toobject)
* [fromObject](_lib_index_.carbyne.md#fromobject)
* [getValue](_lib_index_.carbyne.md#getvalue)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Carbyne**(store?: *[ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)*): [Carbyne](_lib_index_.carbyne.md)

*Defined in lib/index.ts:36*

A model for a Carbyne database.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` store | [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md) |   |

**Returns:** [Carbyne](_lib_index_.carbyne.md)

___

## Properties

<a id="customobjects"></a>

### `<Protected>` customObjects

**● customObjects**: *`object`*

*Defined in lib/index.ts:36*

#### Type declaration

[name: `string`]: [ICarbyneCustomObjectConstructor](../interfaces/_lib_types_.icarbynecustomobjectconstructor.md)

___
<a id="deserializecache"></a>

### `<Protected>` deserializeCache

**● deserializeCache**: *[ICarbyneCache](../interfaces/_lib_types_.icarbynecache.md)*

*Defined in lib/index.ts:33*

___
<a id="serializecache"></a>

### `<Protected>` serializeCache

**● serializeCache**: *`any`*

*Defined in lib/index.ts:32*

___
<a id="store"></a>

### `<Protected>` store

**● store**: *[ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)*

*Defined in lib/index.ts:35*

___
<a id="symbolids"></a>

### `<Protected>` symbolIds

**● symbolIds**: *`any`*

*Defined in lib/index.ts:34*

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

*Defined in lib/index.ts:370*

Clears the database, immediately and irreversibly dropping all data.

**Returns:** `Promise`<`void`>

___
<a id="deserialize"></a>

### `<Protected>` deserialize

▸ **deserialize**(obj: * `string` &#124; [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`any`>

*Defined in lib/index.ts:259*

Converts a Carbyne object into a regular object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj |  `string` &#124; [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)|  - |

**Returns:** `Promise`<`any`>

___
<a id="getdata"></a>

###  getData

▸ **getData**(obj: *`any`*): `Promise`<`any`>

*Defined in lib/index.ts:509*

Gets the data of `obj`. `obj` can be an ID, reference, or deserialized object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |

**Returns:** `Promise`<`any`>

___
<a id="getkey"></a>

###  getKey

▸ **getKey**(obj: *`any`*, key: * `string` &#124; `number`*): `Promise`< `object` &#124; `object`>

*Defined in lib/index.ts:419*

Gets `key` of `obj`. `obj` can be an ID, reference, or deserialized object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| key |  `string` &#124; `number`|  - |

**Returns:** `Promise`< `object` &#124; `object`>

___
<a id="gettype"></a>

### `<Protected>` getType

▸ **getType**(obj: *`any`*): `Promise`< [TCarbyneTypeExt](../modules/_lib_types_.md#tcarbynetypeext) &#124; `string`>

*Defined in lib/index.ts:63*

Gets the type of an object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |

**Returns:** `Promise`< [TCarbyneTypeExt](../modules/_lib_types_.md#tcarbynetypeext) &#124; `string`>

___
<a id="push"></a>

###  push

▸ **push**(obj: *`any`*, value: * `string` &#124; `number`*): `Promise`<`void`>

*Defined in lib/index.ts:445*

Pushes an element to an array. `obj` can be an ID, reference, or deserialized object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| value |  `string` &#124; `number`|  - |

**Returns:** `Promise`<`void`>

___
<a id="registercustomobject"></a>

###  registerCustomObject

▸ **registerCustomObject**(name: *`string`*, cls: *[ICarbyneCustomObjectConstructor](../interfaces/_lib_types_.icarbynecustomobjectconstructor.md)*): `Promise`<`void`>

*Defined in lib/index.ts:529*

Registers a new object. `name` is the `type`, and `cls` is the class (not an instance of it!)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  - |
| cls | [ICarbyneCustomObjectConstructor](../interfaces/_lib_types_.icarbynecustomobjectconstructor.md) |  - |

**Returns:** `Promise`<`void`>

___
<a id="serialize"></a>

### `<Protected>` serialize

▸ **serialize**(obj: *`any`*, id: *`string`*): `Promise`<[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)>

*Defined in lib/index.ts:105*

Serializes an object into storage.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| id | `string` |  - |

**Returns:** `Promise`<[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)>

___
<a id="setdata"></a>

###  setData

▸ **setData**(obj: *`any`*, data: *`any`*): `Promise`<`void`>

*Defined in lib/index.ts:480*

Sets the data of `obj` to `data`. Only use on custom objects. `obj` can be an ID, reference, or deserialized object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| data | `any` |  - |

**Returns:** `Promise`<`void`>

___
<a id="setkey"></a>

###  setKey

▸ **setKey**(obj: *`any`*, key: * `string` &#124; `number`*, value: *`any`*): `Promise`<`void`>

*Defined in lib/index.ts:382*

**Parameters:**

| Param | Type |
| ------ | ------ |
| obj | `any` |
| key |  `string` &#124; `number`|
| value | `any` |

**Returns:** `Promise`<`void`>

___
<a id="toobject"></a>

###  toObject

▸ **toObject**(obj?: *`any`*): `Promise`<`any`>

*Defined in lib/index.ts:378*

Converts this Carbyne model into an object and returns it.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` obj | `any` |

**Returns:** `Promise`<`any`>

___
<a id="fromobject"></a>

### `<Static>` fromObject

▸ **fromObject**(obj: *`any`*, store?: *[ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)*): `Promise`<[Carbyne](_lib_index_.carbyne.md)>

*Defined in lib/index.ts:351*

Creates a Carbyne model from a regular object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| `Optional` store | [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md) |  - |

**Returns:** `Promise`<[Carbyne](_lib_index_.carbyne.md)>

___
<a id="getvalue"></a>

### `<Static>``<Protected>` getValue

▸ **getValue**(value: *[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`any`>

*Defined in lib/index.ts:227*

Gets a regular value from a Carbyne value.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue) |  - |

**Returns:** `Promise`<`any`>

___

