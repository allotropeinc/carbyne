
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

*Defined in [lib/types.ts:136](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L136)*

[ICarbyneDesCache](interfaces/icarbynedescache.md)

___
<a id="tcarbynedescached"></a>

###  TCarbyneDesCached

**ΤTCarbyneDesCached**: * [TCarbyneDesObject](#tcarbynedesobject) &#124; [TCarbyneDesArray](#tcarbynedesarray) &#124; `Symbol` &#124; [ICarbyneCustomObject](interfaces/icarbynecustomobject.md)
*

*Defined in [lib/types.ts:141](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L141)*

[ICarbyneDesCache](interfaces/icarbynedescache.md)

___
<a id="tcarbynedesobject"></a>

###  TCarbyneDesObject

**ΤTCarbyneDesObject**: *`object`*

*Defined in [lib/types.ts:131](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L131)*

[ICarbyneDesCache](interfaces/icarbynedescache.md)

#### Type declaration

[key: `string`]: `any`

___
<a id="tcarbyneref"></a>

###  TCarbyneRef

**ΤTCarbyneRef**: * [ICarbyneRefObject](interfaces/icarbynerefobject.md) &#124; [ICarbyneRefArray](interfaces/icarbynerefarray.md) &#124; [ICarbyneRefSymbol](interfaces/icarbynerefsymbol.md)
*

*Defined in [lib/types.ts:84](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L84)*

A ref value, stored in [TCarbyneRefs](#tcarbynerefs).

___
<a id="tcarbynerefinternal"></a>

###  TCarbyneRefInternal

**ΤTCarbyneRefInternal**: * [TCarbyneRefInternalObject](#tcarbynerefinternalobject) &#124; [TCarbyneRefInternalArray](#tcarbynerefinternalarray) &#124; [TCarbyneRefInternalSymbol](#tcarbynerefinternalsymbol)
*

*Defined in [lib/types.ts:112](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L112)*

Internal refs used by [ICarbyneStore](interfaces/icarbynestore.md) methods.

___
<a id="tcarbynerefinternalarray"></a>

###  TCarbyneRefInternalArray

**ΤTCarbyneRefInternalArray**: * `object` & [ICarbyneRefArray](interfaces/icarbynerefarray.md)
*

*Defined in [lib/types.ts:98](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L98)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefinternalobject"></a>

###  TCarbyneRefInternalObject

**ΤTCarbyneRefInternalObject**: * `object` & [ICarbyneRefObject](interfaces/icarbynerefobject.md)
*

*Defined in [lib/types.ts:89](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L89)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefinternalsymbol"></a>

###  TCarbyneRefInternalSymbol

**ΤTCarbyneRefInternalSymbol**: * `object` & [ICarbyneRefSymbol](interfaces/icarbynerefsymbol.md)
*

*Defined in [lib/types.ts:105](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L105)*

See [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynerefs"></a>

###  TCarbyneRefs

**ΤTCarbyneRefs**: *`object`*

*Defined in [lib/types.ts:117](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L117)*

Internal ref store used by [ICarbyneStore](interfaces/icarbynestore.md) methods.

#### Type declaration

[id: `string`]: [TCarbyneRefInternal](#tcarbynerefinternal)

___
<a id="tcarbynetypeext"></a>

###  TCarbyneTypeExt

**ΤTCarbyneTypeExt**: * [TCarbyneTypeGeneral](#tcarbynetypegeneral) &#124; [TCarbyneTypeImplicit](#tcarbynetypeimplicit) &#124; [TCarbyneTypeObj](#tcarbynetypeobj)
*

*Defined in [lib/types.ts:31](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L31)*

All types.

___
<a id="tcarbynetypegeneral"></a>

###  TCarbyneTypeGeneral

**ΤTCarbyneTypeGeneral**: * "bool" &#124; "number" &#124; "string" &#124; "reference"
*

*Defined in [lib/types.ts:4](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L4)*

General types that have \[\[TCarbyneValueGeneral.data\]\].

___
<a id="tcarbynetypeimplicit"></a>

###  TCarbyneTypeImplicit

**ΤTCarbyneTypeImplicit**: * "null" &#124; "undefined" &#124; "pinfinity" &#124; "ninfinity" &#124; "nan"
*

*Defined in [lib/types.ts:13](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L13)*

Implicit types that have no `data` property.

___
<a id="tcarbynetypeobj"></a>

###  TCarbyneTypeObj

**ΤTCarbyneTypeObj**: * "object" &#124; "array" &#124; "symbol"
*

*Defined in [lib/types.ts:23](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L23)*

Object types that have \[\[TCarbyneRefInternal.obj\]\].

___
<a id="tcarbynevalue"></a>

###  TCarbyneValue

**ΤTCarbyneValue**: * [TCarbyneValueGeneral](#tcarbynevaluegeneral) &#124; [TCarbyneValueImplicit](#tcarbynevalueimplicit)
*

*Defined in [lib/types.ts:55](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L55)*

All values.

___
<a id="tcarbynevaluegeneral"></a>

###  TCarbyneValueGeneral

**ΤTCarbyneValueGeneral**: *`object`*

*Defined in [lib/types.ts:40](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L40)*

General values where additional info is required other than the [TCarbyneTypeGeneral](#tcarbynetypegeneral).

#### Type declaration

 data: `any`

 type: [TCarbyneTypeGeneral](#tcarbynetypegeneral)

___
<a id="tcarbynevalueimplicit"></a>

###  TCarbyneValueImplicit

**ΤTCarbyneValueImplicit**: *`object`*

*Defined in [lib/types.ts:48](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/types.ts#L48)*

Implicit values where [TCarbyneTypeImplicit](#tcarbynetypeimplicit) describes the value.

#### Type declaration

 type: [TCarbyneTypeImplicit](#tcarbynetypeimplicit)

___

## Object literals

<a id="generaltypes"></a>

### `<Const>` generalTypes

**generalTypes**: *`object`*

*Defined in [lib/carbyne.ts:27](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L27)*

The general types, that have a `data` property.

<a id="generaltypes.bool"></a>

####  bool

**● bool**: *`boolean`* = true

*Defined in [lib/carbyne.ts:31](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L31)*

Booleans.

___
<a id="generaltypes.number"></a>

####  number

**● number**: *`boolean`* = true

*Defined in [lib/carbyne.ts:35](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L35)*

Numbers.

___
<a id="generaltypes.reference"></a>

####  reference

**● reference**: *`boolean`* = true

*Defined in [lib/carbyne.ts:43](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L43)*

References to other objects (custom or otherwise).

___
<a id="generaltypes.string"></a>

####  string

**● string**: *`boolean`* = true

*Defined in [lib/carbyne.ts:39](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L39)*

Strings.

___

___
<a id="implicittypes"></a>

### `<Const>` implicitTypes

**implicitTypes**: *`object`*

*Defined in [lib/carbyne.ts:49](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L49)*

The implicit types, do not have a `data` property.

<a id="implicittypes.nan"></a>

####  nan

**● nan**: *`boolean`* = true

*Defined in [lib/carbyne.ts:69](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L69)*

The literal `NaN`.

___
<a id="implicittypes.ninfinity"></a>

####  ninfinity

**● ninfinity**: *`boolean`* = true

*Defined in [lib/carbyne.ts:65](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L65)*

The literal `-Infinity`.

___
<a id="implicittypes.null"></a>

####  null

**● null**: *`boolean`* = true

*Defined in [lib/carbyne.ts:53](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L53)*

The literal `null`.

___
<a id="implicittypes.pinfinity"></a>

####  pinfinity

**● pinfinity**: *`boolean`* = true

*Defined in [lib/carbyne.ts:61](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L61)*

The literal `Infinity`.

___
<a id="implicittypes.undefined"></a>

####  undefined

**● undefined**: *`boolean`* = true

*Defined in [lib/carbyne.ts:57](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L57)*

The literal `undefined`.

___

___
<a id="objtypes"></a>

### `<Const>` objTypes

**objTypes**: *`object`*

*Defined in [lib/carbyne.ts:75](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L75)*

The object types, have a `obj` attribute with an object inside.

<a id="objtypes.array"></a>

####  array

**● array**: *`boolean`* = true

*Defined in [lib/carbyne.ts:83](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L83)*

The array type has an `Array` as the `obj` property.

___
<a id="objtypes.object"></a>

####  object

**● object**: *`boolean`* = true

*Defined in [lib/carbyne.ts:79](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L79)*

The object type has an `Object` as the `obj` property.

___
<a id="objtypes.symbol"></a>

####  symbol

**● symbol**: *`boolean`* = true

*Defined in [lib/carbyne.ts:87](https://github.com/allotropelabs/carbyne/blob/22aec63/lib/carbyne.ts#L87)*

The symbol type has no `obj` property. Symbols are immutable.

___

___

