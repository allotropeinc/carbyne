
#  carbyne-db

## Index

### Classes

* [Carbyne](classes/carbyne.md)
* [CarbyneBlob](classes/carbyneblob.md)
* [CarbyneDirectoryStore](classes/carbynedirectorystore.md)
* [CarbyneMemoryStore](classes/carbynememorystore.md)

### Interfaces

* [ICarbyneCache](interfaces/icarbynecache.md)
* [ICarbyneCustomObject](interfaces/icarbynecustomobject.md)
* [ICarbyneCustomObjectConstructor](interfaces/icarbynecustomobjectconstructor.md)
* [ICarbyneDesCache](interfaces/icarbynedescache.md)
* [ICarbyneMemoryModel](interfaces/icarbynememorymodel.md)
* [ICarbyneRefArray](interfaces/icarbynerefarray.md)
* [ICarbyneRefCustom](interfaces/icarbynerefcustom.md)
* [ICarbyneRefObject](interfaces/icarbynerefobject.md)
* [ICarbyneRefSymbol](interfaces/icarbynerefsymbol.md)
* [ICarbyneStore](interfaces/icarbynestore.md)

### Type aliases

* [TCarbyneDesArray](#tcarbynedesarray)
* [TCarbyneDesCached](#tcarbynedescached)
* [TCarbyneDesObject](#tcarbynedesobject)
* [TCarbyneRef](#tcarbyneref)
* [TCarbyneRefInternal](#tcarbynerefinternal)
* [TCarbyneRefInternalArray](#tcarbynerefinternalarray)
* [TCarbyneRefInternalCustom](#tcarbynerefinternalcustom)
* [TCarbyneRefInternalObject](#tcarbynerefinternalobject)
* [TCarbyneRefInternalSymbol](#tcarbynerefinternalsymbol)
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

<a id="tcarbynedesarray"></a>

###  TCarbyneDesArray

**ΤTCarbyneDesArray**: *`Array`<`any`>*

*Defined in [lib/types.ts:163](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L163)*

[ICarbyneDesCache](interfaces/icarbynedescache.md)

___
<a id="tcarbynedescached"></a>

###  TCarbyneDesCached

**ΤTCarbyneDesCached**: * [TCarbyneDesObject](#tcarbynedesobject) &#124; [TCarbyneDesArray](#tcarbynedesarray) &#124; `Symbol` &#124; [ICarbyneCustomObject](interfaces/icarbynecustomobject.md)
*

*Defined in [lib/types.ts:168](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L168)*

[ICarbyneDesCache](interfaces/icarbynedescache.md)

___
<a id="tcarbynedesobject"></a>

###  TCarbyneDesObject

**ΤTCarbyneDesObject**: *`object`*

*Defined in [lib/types.ts:156](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L156)*

[ICarbyneDesCache](interfaces/icarbynedescache.md)

#### Type declaration

[key: `string`]: `any`

___
<a id="tcarbyneref"></a>

###  TCarbyneRef

**ΤTCarbyneRef**: * [ICarbyneRefObject](interfaces/icarbynerefobject.md) &#124; [ICarbyneRefArray](interfaces/icarbynerefarray.md) &#124; [ICarbyneRefSymbol](interfaces/icarbynerefsymbol.md) &#124; [ICarbyneRefCustom](interfaces/icarbynerefcustom.md)
*

*Defined in [lib/types.ts:94](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L94)*

A ref value, stored in [TCarbyneRefs](#tcarbynerefs).

___
<a id="tcarbynerefinternal"></a>

###  TCarbyneRefInternal

**ΤTCarbyneRefInternal**: * [TCarbyneRefInternalObject](#tcarbynerefinternalobject) &#124; [TCarbyneRefInternalArray](#tcarbynerefinternalarray) &#124; [TCarbyneRefInternalSymbol](#tcarbynerefinternalsymbol) &#124; [TCarbyneRefInternalCustom](#tcarbynerefinternalcustom)
*

*Defined in [lib/types.ts:133](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L133)*

Internal refs used by [ICarbyneStore](interfaces/icarbynestore.md) methods.

___
<a id="tcarbynerefinternalarray"></a>

###  TCarbyneRefInternalArray

**ΤTCarbyneRefInternalArray**: * `object` & [ICarbyneRefArray](interfaces/icarbynerefarray.md)
*

*Defined in [lib/types.ts:112](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L112)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefinternalcustom"></a>

###  TCarbyneRefInternalCustom

**ΤTCarbyneRefInternalCustom**: * `object` & [ICarbyneRefCustom](interfaces/icarbynerefcustom.md)
*

*Defined in [lib/types.ts:126](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L126)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefinternalobject"></a>

###  TCarbyneRefInternalObject

**ΤTCarbyneRefInternalObject**: * `object` & [ICarbyneRefObject](interfaces/icarbynerefobject.md)
*

*Defined in [lib/types.ts:103](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L103)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefinternalsymbol"></a>

###  TCarbyneRefInternalSymbol

**ΤTCarbyneRefInternalSymbol**: * `object` & [ICarbyneRefSymbol](interfaces/icarbynerefsymbol.md)
*

*Defined in [lib/types.ts:119](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L119)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefs"></a>

###  TCarbyneRefs

**ΤTCarbyneRefs**: *`object`*

*Defined in [lib/types.ts:142](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L142)*

Internal ref store used by [ICarbyneStore](interfaces/icarbynestore.md) methods.

#### Type declaration

[id: `string`]: [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynetypeext"></a>

###  TCarbyneTypeExt

**ΤTCarbyneTypeExt**: * [TCarbyneTypeGeneral](#tcarbynetypegeneral) &#124; [TCarbyneTypeImplicit](#tcarbynetypeimplicit) &#124; [TCarbyneTypeObj](#tcarbynetypeobj)
*

*Defined in [lib/types.ts:31](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L31)*

All types.

___
<a id="tcarbynetypegeneral"></a>

###  TCarbyneTypeGeneral

**ΤTCarbyneTypeGeneral**: * "bool" &#124; "number" &#124; "string" &#124; "reference"
*

*Defined in [lib/types.ts:4](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L4)*

General types that have \[\[TCarbyneValueGeneral.data\]\].

___
<a id="tcarbynetypeimplicit"></a>

###  TCarbyneTypeImplicit

**ΤTCarbyneTypeImplicit**: * "null" &#124; "undefined" &#124; "pinfinity" &#124; "ninfinity" &#124; "nan"
*

*Defined in [lib/types.ts:13](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L13)*

Implicit types that have no `data` property.

___
<a id="tcarbynetypeobj"></a>

###  TCarbyneTypeObj

**ΤTCarbyneTypeObj**: * "object" &#124; "array" &#124; "symbol"
*

*Defined in [lib/types.ts:23](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L23)*

Object types that have \[\[TCarbyneRefInternal.obj\]\].

___
<a id="tcarbynevalue"></a>

###  TCarbyneValue

**ΤTCarbyneValue**: * [TCarbyneValueGeneral](#tcarbynevaluegeneral) &#124; [TCarbyneValueImplicit](#tcarbynevalueimplicit)
*

*Defined in [lib/types.ts:55](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L55)*

All values.

___
<a id="tcarbynevaluegeneral"></a>

###  TCarbyneValueGeneral

**ΤTCarbyneValueGeneral**: *`object`*

*Defined in [lib/types.ts:40](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L40)*

General values where additional info is required other than the [TCarbyneTypeGeneral](#tcarbynetypegeneral).

#### Type declaration

 data: `any`

 type: [TCarbyneTypeGeneral](#tcarbynetypegeneral)

___
<a id="tcarbynevalueimplicit"></a>

###  TCarbyneValueImplicit

**ΤTCarbyneValueImplicit**: *`object`*

*Defined in [lib/types.ts:48](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/types.ts#L48)*

Implicit values where [TCarbyneTypeImplicit](#tcarbynetypeimplicit) describes the value.

#### Type declaration

 type: [TCarbyneTypeImplicit](#tcarbynetypeimplicit)

___

## Object literals

<a id="generaltypes"></a>

### `<Const>` generalTypes

**generalTypes**: *`object`*

*Defined in [lib/carbyne.ts:28](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L28)*

The general types, that have a `data` property.

<a id="generaltypes.bool"></a>

####  bool

**● bool**: *`boolean`* = true

*Defined in [lib/carbyne.ts:32](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L32)*

Booleans.

___
<a id="generaltypes.number"></a>

####  number

**● number**: *`boolean`* = true

*Defined in [lib/carbyne.ts:36](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L36)*

Numbers.

___
<a id="generaltypes.reference"></a>

####  reference

**● reference**: *`boolean`* = true

*Defined in [lib/carbyne.ts:44](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L44)*

References to other objects (custom or otherwise).

___
<a id="generaltypes.string"></a>

####  string

**● string**: *`boolean`* = true

*Defined in [lib/carbyne.ts:40](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L40)*

Strings.

___

___
<a id="implicittypes"></a>

### `<Const>` implicitTypes

**implicitTypes**: *`object`*

*Defined in [lib/carbyne.ts:50](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L50)*

The implicit types, do not have a `data` property.

<a id="implicittypes.nan"></a>

####  nan

**● nan**: *`boolean`* = true

*Defined in [lib/carbyne.ts:70](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L70)*

The literal `NaN`.

___
<a id="implicittypes.ninfinity"></a>

####  ninfinity

**● ninfinity**: *`boolean`* = true

*Defined in [lib/carbyne.ts:66](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L66)*

The literal `-Infinity`.

___
<a id="implicittypes.null"></a>

####  null

**● null**: *`boolean`* = true

*Defined in [lib/carbyne.ts:54](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L54)*

The literal `null`.

___
<a id="implicittypes.pinfinity"></a>

####  pinfinity

**● pinfinity**: *`boolean`* = true

*Defined in [lib/carbyne.ts:62](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L62)*

The literal `Infinity`.

___
<a id="implicittypes.undefined"></a>

####  undefined

**● undefined**: *`boolean`* = true

*Defined in [lib/carbyne.ts:58](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L58)*

The literal `undefined`.

___

___
<a id="objtypes"></a>

### `<Const>` objTypes

**objTypes**: *`object`*

*Defined in [lib/carbyne.ts:76](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L76)*

The object types, have a `obj` attribute with an object inside.

<a id="objtypes.array"></a>

####  array

**● array**: *`boolean`* = true

*Defined in [lib/carbyne.ts:84](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L84)*

The array type has an `Array` as the `obj` property.

___
<a id="objtypes.object"></a>

####  object

**● object**: *`boolean`* = true

*Defined in [lib/carbyne.ts:80](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L80)*

The object type has an `Object` as the `obj` property.

___
<a id="objtypes.symbol"></a>

####  symbol

**● symbol**: *`boolean`* = true

*Defined in [lib/carbyne.ts:88](https://github.com/allotropelabs/carbyne/blob/be8734a/lib/carbyne.ts#L88)*

The symbol type has no `obj` property. Symbols are immutable.

___

___

