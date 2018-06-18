export type TCarbyneTypeGeneral =
	'bool' |
	'number' |
	'string' |
	'reference'

export type TCarbyneTypeImplicit =
	'null' |
	'undefined' |
	'pinfinity' |
	'ninfinity' |
	'nan'

export type TCarbyneTypeObj =
	'object' |
	'array' |
	'symbol'

export type TCarbyneTypeExt =
	TCarbyneTypeGeneral |
	TCarbyneTypeImplicit |
	TCarbyneTypeObj

export type TCarbyneValueGeneral = {
	type : TCarbyneTypeGeneral,
	data : any
}

export type TCarbyneValueImplicit = {
	type : TCarbyneTypeImplicit
}

export type TCarbyneValue = TCarbyneValueGeneral | TCarbyneValueImplicit

export interface ICarbyneRefObject {
	type : 'object'
	/* obj : {
		[ key : string ] : TCarbyneValue
	} */
	id : string
}

export interface ICarbyneRefArray {
	type : 'array'
	// obj : Array<TCarbyneValue>
	id : string
}

export interface ICarbyneRefSymbol {
	type : 'symbol'
	// obj : Symbol
	id : string
}

export type TCarbyneRef = ICarbyneRefObject | ICarbyneRefArray | ICarbyneRefSymbol

export type TCarbyneRefInternal = {
	obj : any
} & TCarbyneRef

export type TCarbyneRefs = {
	[ id : string ] : TCarbyneRefInternal
}

/*export type TCarbyneCachedObject = {
	[ key : string ] : TCarbyneValue
}

export type TCarbyneCachedArray = Array<TCarbyneValue>

export type TCarbyneCachedCustomObject = {
	data : any
}

export type TCarbyneCached = TCarbyneCachedObject | TCarbyneCachedArray | Symbol | TCarbyneCachedCustomObject

export interface ICarbyneCache {
	[ id : string ] : TCarbyneCached
}*/

export interface ICarbyneCache {
	[ id : string ] : TCarbyneValue
}

export type TCarbyneDesObject = { [ key : string ] : any }

export type TCarbyneDesArray = Array<any>

export type TCarbyneDesCached = TCarbyneDesObject | TCarbyneDesArray | Symbol | ICarbyneCustomObject

export interface ICarbyneDesCache {
	[ id : string ] : TCarbyneDesCached
}

export interface ICarbyneMemoryModel {
	root : TCarbyneRef | null
	refs : TCarbyneRefs
}

export interface ICarbyneStore {
	/**
	 * Clears the database of any data, setting the root to `newRoot` or {} (empty object).
	 *
	 * @param {any} newRoot
	 * @returns {Promise<void>}
	 */
	clear ( newRoot? : any ) : Promise<void>

	/**
	 * Gets a new ID to use for objects.
	 *
	 * @returns {Promise<string>}
	 */
	genID () : Promise<string>

	/**
	 * Sets a reference by ID.
	 *
	 * @param {string} id
	 * @param obj
	 * @returns {Promise<void>}
	 */
	setRef (
		id : string,
		obj : any
	) : Promise<void>

	/**
	 * Gets the value of a key in an object.
	 *
	 * @param {string} id
	 * @param {number | string} key
	 * @returns {Promise<TCarbyneValue>}
	 */
	getKey (
		id : string,
		key : number | string
	) : Promise<TCarbyneValue>

	/**
	 * Sets the value of a key in an object.
	 *
	 * @param {string} id
	 * @param {number | string} key
	 * @param {TCarbyneValue} value
	 * @returns {Promise<void>}
	 */
	setKey (
		id : string,
		key : number | string,
		value : TCarbyneValue
	) : Promise<void>

	/**
	 * Gets the type of an object specified by ID.
	 *
	 * @param {string} id
	 * @returns {Promise<TCarbyneTypeObj>}
	 */
	getType ( id : string ) : Promise<TCarbyneTypeObj>

	/**
	 * Gets the length of an array specified by ID.
	 *
	 * @param {string} id
	 * @returns {Promise<number>}
	 */
	getLength ( id : string ) : Promise<number>

	/**
	 * Gets the keys of an object specified by ID.
	 *
	 * @param {string} id
	 * @returns {Promise<string[]>}
	 */
	getKeys ( id : string ) : Promise<string[]>

	/**
	 * Pushes an object to an array.
	 *
	 * @param {string} id
	 * @param {TCarbyneValue} value
	 */
	push (
		id : string,
		value : TCarbyneValue
	) : Promise<void>

	/**
	 * Gets the data of a custom object.
	 *
	 * @param {string} id
	 * @returns {Promise<any>}
	 */
	getData ( id : string ) : Promise<any>

	/**
	 * Sets the data of a custom object.
	 *
	 * @param {string} id
	 * @param {any} data
	 * @returns {Promise<void>}
	 */
	setData (
		id : string,
		data : any
	) : Promise<void>
}

export interface ICarbyneCustomObject {
	_id : string | undefined

	/**
	 * Serialize this custom object, return an object that can be passed to MessagePack.
	 * @returns {Promise<any>}
	 */
	serialize () : Promise<any>
}

export interface ICarbyneCustomObjectConstructor {
	/**
	 * Create a custom object from the object `data`.
	 * @param data
	 * @param {string} _id
	 * @returns {ICarbyneCustomObject}
	 */
	new (
		data : any,
		_id? : string
	) : ICarbyneCustomObject
}