
#  carbyne-db

## Index

### Classes

* [Carbyne](classes/carbyne.md)
* [CarbyneBlob](classes/carbyneblob.md)
* [CarbyneDirectoryStore](classes/carbynedirectorystore.md)
* [CarbyneMemoryStore](classes/carbynememorystore.md)

### Interfaces

* [ICarbyneCustomObject](interfaces/icarbynecustomobject.md)
* [ICarbyneCustomObjectConstructor](interfaces/icarbynecustomobjectconstructor.md)
* [ICarbyneStore](interfaces/icarbynestore.md)

### Type aliases

* [TCarbyneCache](#tcarbynecache)
* [TCarbyneDesArray](#tcarbynedesarray)
* [TCarbyneDesCache](#tcarbynedescache)
* [TCarbyneDesCached](#tcarbynedescached)
* [TCarbyneDesObject](#tcarbynedesobject)
* [TCarbyneMemoryModel](#tcarbynememorymodel)
* [TCarbyneRef](#tcarbyneref)
* [TCarbyneRefArray](#tcarbynerefarray)
* [TCarbyneRefCustom](#tcarbynerefcustom)
* [TCarbyneRefInternal](#tcarbynerefinternal)
* [TCarbyneRefInternalArray](#tcarbynerefinternalarray)
* [TCarbyneRefInternalCustom](#tcarbynerefinternalcustom)
* [TCarbyneRefInternalObject](#tcarbynerefinternalobject)
* [TCarbyneRefInternalSymbol](#tcarbynerefinternalsymbol)
* [TCarbyneRefObject](#tcarbynerefobject)
* [TCarbyneRefSymbol](#tcarbynerefsymbol)
* [TCarbyneRefs](#tcarbynerefs)
* [TCarbyneTypeExt](#tcarbynetypeext)
* [TCarbyneTypeGeneral](#tcarbynetypegeneral)
* [TCarbyneTypeImplicit](#tcarbynetypeimplicit)
* [TCarbyneTypeObj](#tcarbynetypeobj)
* [TCarbyneValue](#tcarbynevalue)
* [TCarbyneValueGeneral](#tcarbynevaluegeneral)
* [TCarbyneValueImplicit](#tcarbynevalueimplicit)

### Object literals

* [generalTypes](#generaltypes)
* [implicitTypes](#implicittypes)
* [objTypes](#objtypes)

---

## Type aliases

<a id="tcarbynecache"></a>

###  TCarbyneCache

**ΤTCarbyneCache**: *`object`*

*Defined in [lib/types.ts:170](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L170)*

Cache used by [Carbyne.serialize](classes/carbyne.md#serialize). [TCarbyneCache](#tcarbynecache)

#### Type declaration

[id: `string`]: [TCarbyneValue](#tcarbynevalue)

___
<a id="tcarbynedesarray"></a>

###  TCarbyneDesArray

**ΤTCarbyneDesArray**: *`Array`<`any`>*

*Defined in [lib/types.ts:184](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L184)*

[TCarbyneDesCache](#tcarbynedescache)

___
<a id="tcarbynedescache"></a>

###  TCarbyneDesCache

**ΤTCarbyneDesCache**: *`object`*

*Defined in [lib/types.ts:198](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L198)*

Cache used by [Carbyne.deserialize](classes/carbyne.md#deserialize).

#### Type declaration

[id: `string`]: [TCarbyneDesCached](#tcarbynedescached)

___
<a id="tcarbynedescached"></a>

###  TCarbyneDesCached

**ΤTCarbyneDesCached**: * [TCarbyneDesObject](#tcarbynedesobject) &#124; [TCarbyneDesArray](#tcarbynedesarray) &#124; `Symbol` &#124; [ICarbyneCustomObject](interfaces/icarbynecustomobject.md)
*

*Defined in [lib/types.ts:189](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L189)*

[TCarbyneDesCache](#tcarbynedescache)

___
<a id="tcarbynedesobject"></a>

###  TCarbyneDesObject

**ΤTCarbyneDesObject**: *`object`*

*Defined in [lib/types.ts:177](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L177)*

[TCarbyneDesCache](#tcarbynedescache)

#### Type declaration

[key: `string`]: `any`

___
<a id="tcarbynememorymodel"></a>

###  TCarbyneMemoryModel

**ΤTCarbyneMemoryModel**: *`object`*

*Defined in [lib/types.ts:205](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L205)*

Model used by [CarbyneMemoryStore](classes/carbynememorystore.md).

#### Type declaration

 refs: [TCarbyneRefs](#tcarbynerefs)

 root:  [TCarbyneRef](#tcarbyneref) &#124; `null`

___
<a id="tcarbyneref"></a>

###  TCarbyneRef

**ΤTCarbyneRef**: * [TCarbyneRefObject](#tcarbynerefobject) &#124; [TCarbyneRefArray](#tcarbynerefarray) &#124; [TCarbyneRefSymbol](#tcarbynerefsymbol) &#124; [TCarbyneRefCustom](#tcarbynerefcustom)
*

*Defined in [lib/types.ts:113](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L113)*

A ref value, stored in [TCarbyneRefs](#tcarbynerefs). This includes objects, arrays, symbols, and custom objects, like [CarbyneBlob](classes/carbyneblob.md)s. Blobs are, in fact, custom, and we are using our own APIs to implement them.

___
<a id="tcarbynerefarray"></a>

###  TCarbyneRefArray

**ΤTCarbyneRefArray**: *`object`*

*Defined in [lib/types.ts:87](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L87)*

See [TCarbyneRef](#tcarbyneref)

#### Type declaration

 id: `string`

 type: "array"

___
<a id="tcarbynerefcustom"></a>

###  TCarbyneRefCustom

**ΤTCarbyneRefCustom**: *`object`*

*Defined in [lib/types.ts:103](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L103)*

See [TCarbyneRef](#tcarbyneref)

#### Type declaration

 id: `string`

 type: `string`

___
<a id="tcarbynerefinternal"></a>

###  TCarbyneRefInternal

**ΤTCarbyneRefInternal**: * [TCarbyneRefInternalObject](#tcarbynerefinternalobject) &#124; [TCarbyneRefInternalArray](#tcarbynerefinternalarray) &#124; [TCarbyneRefInternalSymbol](#tcarbynerefinternalsymbol) &#124; [TCarbyneRefInternalCustom](#tcarbynerefinternalcustom)
*

*Defined in [lib/types.ts:153](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L153)*

Internal refs used by [ICarbyneStore](interfaces/icarbynestore.md) methods. This includes a `data`/`obj` property that external methods don't have access to, hopefully.

___
<a id="tcarbynerefinternalarray"></a>

###  TCarbyneRefInternalArray

**ΤTCarbyneRefInternalArray**: * `object` & [TCarbyneRefArray](#tcarbynerefarray)
*

*Defined in [lib/types.ts:131](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L131)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefinternalcustom"></a>

###  TCarbyneRefInternalCustom

**ΤTCarbyneRefInternalCustom**: * `object` & [TCarbyneRefCustom](#tcarbynerefcustom)
*

*Defined in [lib/types.ts:145](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L145)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefinternalobject"></a>

###  TCarbyneRefInternalObject

**ΤTCarbyneRefInternalObject**: * `object` & [TCarbyneRefObject](#tcarbynerefobject)
*

*Defined in [lib/types.ts:122](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L122)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefinternalsymbol"></a>

###  TCarbyneRefInternalSymbol

**ΤTCarbyneRefInternalSymbol**: * `object` & [TCarbyneRefSymbol](#tcarbynerefsymbol)
*

*Defined in [lib/types.ts:138](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L138)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefobject"></a>

###  TCarbyneRefObject

**ΤTCarbyneRefObject**: *`object`*

*Defined in [lib/types.ts:79](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L79)*

See [TCarbyneRef](#tcarbyneref)

#### Type declaration

 id: `string`

 type: "object"

___
<a id="tcarbynerefsymbol"></a>

###  TCarbyneRefSymbol

**ΤTCarbyneRefSymbol**: *`object`*

*Defined in [lib/types.ts:95](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L95)*

See [TCarbyneRef](#tcarbyneref)

#### Type declaration

 id: `string`

 type: "symbol"

___
<a id="tcarbynerefs"></a>

###  TCarbyneRefs

**ΤTCarbyneRefs**: *`object`*

*Defined in [lib/types.ts:163](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L163)*

Internal ref store used by [ICarbyneStore](interfaces/icarbynestore.md) methods. This is basically an Object storing [TCarbyneRefInternal](#tcarbynerefinternal)s.

#### Type declaration

[id: `string`]: [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynetypeext"></a>

###  TCarbyneTypeExt

**ΤTCarbyneTypeExt**: * [TCarbyneTypeGeneral](#tcarbynetypegeneral) &#124; [TCarbyneTypeImplicit](#tcarbynetypeimplicit) &#124; [TCarbyneTypeObj](#tcarbynetypeobj)
*

*Defined in [lib/types.ts:46](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L46)*

All types. This doesn't include custom types, but we can't know in advance what those are, so they aren't included here. [CarbyneBlob](classes/carbyneblob.md)s are an exception to this, but we're not adding any special cases for that, as using only our exposed APIs to test if they are good enough is actually a good thing in some cases.

___
<a id="tcarbynetypegeneral"></a>

###  TCarbyneTypeGeneral

**ΤTCarbyneTypeGeneral**: * "bool" &#124; "number" &#124; "string" &#124; "reference"
*

*Defined in [lib/types.ts:10](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L10)*

These are general types that need a `data` property. This includes booleans, numbers, strings, and references, because the type does not tell Carbyne what the value should be.

For example, a number could be `1`, `2`, or `5`, Carbyne doesn't know. In contrast, Carbyne knows what a [TCarbyneTypeImplicit](#tcarbynetypeimplicit) is, because there is, for example, no two values that both have the type `null`, only one: `null`.

___
<a id="tcarbynetypeimplicit"></a>

###  TCarbyneTypeImplicit

**ΤTCarbyneTypeImplicit**: * "null" &#124; "undefined" &#124; "pinfinity" &#124; "ninfinity" &#124; "nan"
*

*Defined in [lib/types.ts:22](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L22)*

These are implicit types that don't need a `data` property. This includes `null`, `undefined`, `+Infinity`, `-Infinity`, and `NaN`. These are all special values that there are never more than one instance of, so there is no need for a data property like [TCarbyneTypeGeneral](#tcarbynetypegeneral) has.

___
<a id="tcarbynetypeobj"></a>

###  TCarbyneTypeObj

**ΤTCarbyneTypeObj**: * "object" &#124; "array" &#124; "symbol"
*

*Defined in [lib/types.ts:34](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L34)*

These are the types of objects. They have, instead of a `data` property, an `obj` property. However, only internal [ICarbyneStore](interfaces/icarbynestore.md) methods access the `obj` property.

___
<a id="tcarbynevalue"></a>

###  TCarbyneValue

**ΤTCarbyneValue**: * [TCarbyneValueGeneral](#tcarbynevaluegeneral) &#124; [TCarbyneValueImplicit](#tcarbynevalueimplicit)
*

*Defined in [lib/types.ts:72](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L72)*

All values. This includes both general values, [TCarbyneValueGeneral](#tcarbynevaluegeneral), and implicit values, [TCarbyneValueImplicit](#tcarbynevalueimplicit).

___
<a id="tcarbynevaluegeneral"></a>

###  TCarbyneValueGeneral

**ΤTCarbyneValueGeneral**: *`object`*

*Defined in [lib/types.ts:55](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L55)*

General values where additional info is required other than the [TCarbyneTypeGeneral](#tcarbynetypegeneral). That's where the `data` property comes in.

#### Type declaration

 data: `any`

 type: [TCarbyneTypeGeneral](#tcarbynetypegeneral)

___
<a id="tcarbynevalueimplicit"></a>

###  TCarbyneValueImplicit

**ΤTCarbyneValueImplicit**: *`object`*

*Defined in [lib/types.ts:64](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/types.ts#L64)*

Implicit values where [TCarbyneTypeImplicit](#tcarbynetypeimplicit) describes the value. See [TCarbyneTypeImplicit](#tcarbynetypeimplicit) for more information.

#### Type declaration

 type: [TCarbyneTypeImplicit](#tcarbynetypeimplicit)

___

## Object literals

<a id="generaltypes"></a>

### `<Const>` generalTypes

**generalTypes**: *`object`*

*Defined in [lib/carbyne.ts:28](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L28)*

The general types, that have a `data` property.

<a id="generaltypes.bool"></a>

####  bool

**● bool**: *`boolean`* = true

*Defined in [lib/carbyne.ts:32](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L32)*

Booleans.

___
<a id="generaltypes.number"></a>

####  number

**● number**: *`boolean`* = true

*Defined in [lib/carbyne.ts:36](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L36)*

Numbers.

___
<a id="generaltypes.reference"></a>

####  reference

**● reference**: *`boolean`* = true

*Defined in [lib/carbyne.ts:44](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L44)*

References to other objects (custom or otherwise).

___
<a id="generaltypes.string"></a>

####  string

**● string**: *`boolean`* = true

*Defined in [lib/carbyne.ts:40](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L40)*

Strings.

___

___
<a id="implicittypes"></a>

### `<Const>` implicitTypes

**implicitTypes**: *`object`*

*Defined in [lib/carbyne.ts:50](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L50)*

The implicit types, do not have a `data` property.

<a id="implicittypes.nan"></a>

####  nan

**● nan**: *`boolean`* = true

*Defined in [lib/carbyne.ts:70](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L70)*

The literal `NaN`.

___
<a id="implicittypes.ninfinity"></a>

####  ninfinity

**● ninfinity**: *`boolean`* = true

*Defined in [lib/carbyne.ts:66](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L66)*

The literal `-Infinity`.

___
<a id="implicittypes.null"></a>

####  null

**● null**: *`boolean`* = true

*Defined in [lib/carbyne.ts:54](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L54)*

The literal `null`.

___
<a id="implicittypes.pinfinity"></a>

####  pinfinity

**● pinfinity**: *`boolean`* = true

*Defined in [lib/carbyne.ts:62](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L62)*

The literal `Infinity`.

___
<a id="implicittypes.undefined"></a>

####  undefined

**● undefined**: *`boolean`* = true

*Defined in [lib/carbyne.ts:58](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L58)*

The literal `undefined`.

___

___
<a id="objtypes"></a>

### `<Const>` objTypes

**objTypes**: *`object`*

*Defined in [lib/carbyne.ts:76](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L76)*

The object types, have a `obj` attribute with an object inside.

<a id="objtypes.array"></a>

####  array

**● array**: *`boolean`* = true

*Defined in [lib/carbyne.ts:84](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L84)*

The array type has an `Array` as the `obj` property.

___
<a id="objtypes.object"></a>

####  object

**● object**: *`boolean`* = true

*Defined in [lib/carbyne.ts:80](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L80)*

The object type has an `Object` as the `obj` property.

___
<a id="objtypes.symbol"></a>

####  symbol

**● symbol**: *`boolean`* = true

*Defined in [lib/carbyne.ts:88](https://github.com/allotropelabs/carbyne/blob/7530ecf/lib/carbyne.ts#L88)*

The symbol type has no `obj` property. Symbols are immutable.

___

___

