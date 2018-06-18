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

export type TCarbyneValue = {
	type : TCarbyneTypeGeneral,
	data : any
} | {
	type : TCarbyneTypeImplicit
}

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

export type TCarbyneCachedObject = {
	[ key : string ] : TCarbyneValue
}

export type TCarbyneCachedArray = Array<TCarbyneValue>

export type TCarbyneCached = TCarbyneCachedObject | TCarbyneCachedArray | Symbol | ICarbyneCustomObject

export interface ICarbyneCache {
	[ id : string ] : TCarbyneCached
}

export interface ICarbyneMemoryModel {
	root : TCarbyneRef | null
	refs : TCarbyneRefs
}

export interface ICarbyneStore {
	/**
	 * Clears the database.
	 * @returns {Promise<void>}
	 */
	clear () : Promise<void>

	/**
	 * Gets a new ID to use for objects.
	 * @returns {Promise<string>}
	 */
	genID () : Promise<string>

	/**
	 * Sets a reference by ID.
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
	 * @param {any} obj
	 * @param {number | string} key
	 * @returns {Promise<TCarbyneValue>}
	 */
	getKey (
		obj : any,
		key : number | string
	) : Promise<TCarbyneValue>

	/**
	 * Sets the value of a key in an object.
	 * @param {any} obj
	 * @param {number | string} key
	 * @param {TCarbyneValue} value
	 * @returns {Promise<void>}
	 */
	setKey (
		obj : any,
		key : number | string,
		value : TCarbyneValue
	) : Promise<void>

	/**
	 * Gets the type of an object specified by ID.
	 * @param {string} id
	 * @returns {Promise<TCarbyneTypeObj>}
	 */
	getType ( id : string ) : Promise<TCarbyneTypeObj>

	/**
	 * Gets the length of an array specified by ID.
	 * @param {string} id
	 * @returns {Promise<number>}
	 */
	getLength ( id : string ) : Promise<number>

	/**
	 * Gets the keys of an object specified by ID.
	 * @param {string} id
	 * @returns {Promise<string[]>}
	 */
	getKeys ( id : string ) : Promise<string[]>

	/**
	 * Pushes an object to an array.
	 * @param {string} id
	 * @param {TCarbyneValue} value
	 */
	push (
		id : string,
		value : TCarbyneValue
	) : Promise<void>

	/**
	 * Gets the data of a custom object.
	 * @param {string} id
	 * @returns {Promise<any>}
	 */
	getData ( id : string ) : Promise<any>

	/**
	 * Sets the data of a custom object.
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