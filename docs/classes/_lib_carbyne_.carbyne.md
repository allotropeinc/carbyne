[carbyne-db](../README.md) > ["lib/carbyne"](../modules/_lib_carbyne_.md) > [Carbyne](../classes/_lib_carbyne_.carbyne.md)

# Class: Carbyne

## Hierarchy

**Carbyne**

## Index

### Constructors

* [constructor](_lib_carbyne_.carbyne.md#constructor)

### Properties

* [customObjects](_lib_carbyne_.carbyne.md#customobjects)
* [deserializeCache](_lib_carbyne_.carbyne.md#deserializecache)
* [serializeCache](_lib_carbyne_.carbyne.md#serializecache)
* [store](_lib_carbyne_.carbyne.md#store)
* [symbolIds](_lib_carbyne_.carbyne.md#symbolids)

### Methods

* [clear](_lib_carbyne_.carbyne.md#clear)
* [deserialize](_lib_carbyne_.carbyne.md#deserialize)
* [getData](_lib_carbyne_.carbyne.md#getdata)
* [getKey](_lib_carbyne_.carbyne.md#getkey)
* [getType](_lib_carbyne_.carbyne.md#gettype)
* [push](_lib_carbyne_.carbyne.md#push)
* [registerCustomObject](_lib_carbyne_.carbyne.md#registercustomobject)
* [serialize](_lib_carbyne_.carbyne.md#serialize)
* [setData](_lib_carbyne_.carbyne.md#setdata)
* [setKey](_lib_carbyne_.carbyne.md#setkey)
* [toObject](_lib_carbyne_.carbyne.md#toobject)
* [fromObject](_lib_carbyne_.carbyne.md#fromobject)
* [getValue](_lib_carbyne_.carbyne.md#getvalue)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Carbyne**(store?: *[ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)*): [Carbyne](_lib_carbyne_.carbyne.md)

*Defined in [lib/carbyne.ts:36](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L36)*

A model for a Carbyne database.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` store | [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md) |   |

**Returns:** [Carbyne](_lib_carbyne_.carbyne.md)

___

## Properties

<a id="customobjects"></a>

### `<Protected>` customObjects

**● customObjects**: *`object`*

*Defined in [lib/carbyne.ts:36](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L36)*

#### Type declaration

[name: `string`]: [ICarbyneCustomObjectConstructor](../interfaces/_lib_types_.icarbynecustomobjectconstructor.md)

___
<a id="deserializecache"></a>

### `<Protected>` deserializeCache

**● deserializeCache**: *[ICarbyneCache](../interfaces/_lib_types_.icarbynecache.md)*

*Defined in [lib/carbyne.ts:33](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L33)*

___
<a id="serializecache"></a>

### `<Protected>` serializeCache

**● serializeCache**: *`any`*

*Defined in [lib/carbyne.ts:32](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L32)*

___
<a id="store"></a>

### `<Protected>` store

**● store**: *[ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)*

*Defined in [lib/carbyne.ts:35](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L35)*

___
<a id="symbolids"></a>

### `<Protected>` symbolIds

**● symbolIds**: *`any`*

*Defined in [lib/carbyne.ts:34](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L34)*

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(newObj?: *`any`*): `Promise`<`void`>

*Defined in [lib/carbyne.ts:370](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L370)*

Clears the database, immediately and irreversibly dropping all data.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` newObj | `any` |

**Returns:** `Promise`<`void`>

___
<a id="deserialize"></a>

### `<Protected>` deserialize

▸ **deserialize**(obj: * `string` &#124; [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`any`>

*Defined in [lib/carbyne.ts:259](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L259)*

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

*Defined in [lib/carbyne.ts:514](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L514)*

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

*Defined in [lib/carbyne.ts:424](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L424)*

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

*Defined in [lib/carbyne.ts:63](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L63)*

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

*Defined in [lib/carbyne.ts:450](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L450)*

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

*Defined in [lib/carbyne.ts:534](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L534)*

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

*Defined in [lib/carbyne.ts:105](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L105)*

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

*Defined in [lib/carbyne.ts:485](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L485)*

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

*Defined in [lib/carbyne.ts:387](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L387)*

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

*Defined in [lib/carbyne.ts:383](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L383)*

Converts this Carbyne model into an object and returns it.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` obj | `any` |

**Returns:** `Promise`<`any`>

___
<a id="fromobject"></a>

### `<Static>` fromObject

▸ **fromObject**(obj: *`any`*, store?: *[ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)*): `Promise`<[Carbyne](_lib_carbyne_.carbyne.md)>

*Defined in [lib/carbyne.ts:351](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L351)*

Creates a Carbyne model from a regular object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  - |
| `Optional` store | [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md) |  - |

**Returns:** `Promise`<[Carbyne](_lib_carbyne_.carbyne.md)>

___
<a id="getvalue"></a>

### `<Static>``<Protected>` getValue

▸ **getValue**(value: *[TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue)*): `Promise`<`any`>

*Defined in [lib/carbyne.ts:227](https://github.com/allotropelabs/carbyne/blob/0bc7c32/lib/carbyne.ts#L227)*

Gets a regular value from a Carbyne value.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [TCarbyneValue](../modules/_lib_types_.md#tcarbynevalue) |  - |

**Returns:** `Promise`<`any`>

___

