[carbyne](../README.md) > ["lib/types"](../modules/_lib_types_.md)

# External module: "lib/types"

## Index

### Interfaces

* [ICarbyneCache](../interfaces/_lib_types_.icarbynecache.md)
* [ICarbyneCustomObject](../interfaces/_lib_types_.icarbynecustomobject.md)
* [ICarbyneCustomObjectConstructor](../interfaces/_lib_types_.icarbynecustomobjectconstructor.md)
* [ICarbyneMemoryModel](../interfaces/_lib_types_.icarbynememorymodel.md)
* [ICarbyneRefArray](../interfaces/_lib_types_.icarbynerefarray.md)
* [ICarbyneRefObject](../interfaces/_lib_types_.icarbynerefobject.md)
* [ICarbyneRefSymbol](../interfaces/_lib_types_.icarbynerefsymbol.md)
* [ICarbyneStore](../interfaces/_lib_types_.icarbynestore.md)

### Type aliases

* [TCarbyneCached](_lib_types_.md#tcarbynecached)
* [TCarbyneCachedArray](_lib_types_.md#tcarbynecachedarray)
* [TCarbyneCachedObject](_lib_types_.md#tcarbynecachedobject)
* [TCarbyneRef](_lib_types_.md#tcarbyneref)
* [TCarbyneRefInternal](_lib_types_.md#tcarbynerefinternal)
* [TCarbyneRefs](_lib_types_.md#tcarbynerefs)
* [TCarbyneTypeExt](_lib_types_.md#tcarbynetypeext)
* [TCarbyneTypeGeneral](_lib_types_.md#tcarbynetypegeneral)
* [TCarbyneTypeImplicit](_lib_types_.md#tcarbynetypeimplicit)
* [TCarbyneTypeObj](_lib_types_.md#tcarbynetypeobj)
* [TCarbyneValue](_lib_types_.md#tcarbynevalue)

---

## Type aliases

<a id="tcarbynecached"></a>

###  TCarbyneCached

**ΤTCarbyneCached**: * [TCarbyneCachedObject](_lib_types_.md#tcarbynecachedobject) &#124; [TCarbyneCachedArray](_lib_types_.md#tcarbynecachedarray) &#124; `Symbol` &#124; [ICarbyneCustomObject](../interfaces/_lib_types_.icarbynecustomobject.md)
*

*Defined in lib/types.ts:67*

___
<a id="tcarbynecachedarray"></a>

###  TCarbyneCachedArray

**ΤTCarbyneCachedArray**: *`Array`<[TCarbyneValue](_lib_types_.md#tcarbynevalue)>*

*Defined in lib/types.ts:65*

___
<a id="tcarbynecachedobject"></a>

###  TCarbyneCachedObject

**ΤTCarbyneCachedObject**: *`object`*

*Defined in lib/types.ts:61*

#### Type declaration

[key: `string`]: [TCarbyneValue](_lib_types_.md#tcarbynevalue)

___
<a id="tcarbyneref"></a>

###  TCarbyneRef

**ΤTCarbyneRef**: * [ICarbyneRefObject](../interfaces/_lib_types_.icarbynerefobject.md) &#124; [ICarbyneRefArray](../interfaces/_lib_types_.icarbynerefarray.md) &#124; [ICarbyneRefSymbol](../interfaces/_lib_types_.icarbynerefsymbol.md)
*

*Defined in lib/types.ts:51*

___
<a id="tcarbynerefinternal"></a>

###  TCarbyneRefInternal

**ΤTCarbyneRefInternal**: * `object` & [TCarbyneRef](_lib_types_.md#tcarbyneref)
*

*Defined in lib/types.ts:53*

___
<a id="tcarbynerefs"></a>

###  TCarbyneRefs

**ΤTCarbyneRefs**: *`object`*

*Defined in lib/types.ts:57*

#### Type declaration

[id: `string`]: [TCarbyneRefInternal](_lib_types_.md#tcarbynerefinternal)

___
<a id="tcarbynetypeext"></a>

###  TCarbyneTypeExt

**ΤTCarbyneTypeExt**: * [TCarbyneTypeGeneral](_lib_types_.md#tcarbynetypegeneral) &#124; [TCarbyneTypeImplicit](_lib_types_.md#tcarbynetypeimplicit) &#124; [TCarbyneTypeObj](_lib_types_.md#tcarbynetypeobj)
*

*Defined in lib/types.ts:19*

___
<a id="tcarbynetypegeneral"></a>

###  TCarbyneTypeGeneral

**ΤTCarbyneTypeGeneral**: * "bool" &#124; "number" &#124; "string" &#124; "reference"
*

*Defined in lib/types.ts:1*

___
<a id="tcarbynetypeimplicit"></a>

###  TCarbyneTypeImplicit

**ΤTCarbyneTypeImplicit**: * "null" &#124; "undefined" &#124; "pinfinity" &#124; "ninfinity" &#124; "nan"
*

*Defined in lib/types.ts:7*

___
<a id="tcarbynetypeobj"></a>

###  TCarbyneTypeObj

**ΤTCarbyneTypeObj**: * "object" &#124; "array" &#124; "symbol"
*

*Defined in lib/types.ts:14*

___
<a id="tcarbynevalue"></a>

###  TCarbyneValue

**ΤTCarbyneValue**: * `object` &#124; `object`
*

*Defined in lib/types.ts:24*

___

