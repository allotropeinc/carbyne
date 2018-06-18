import {
	CarbyneBlob,
	CarbyneMemoryStore,
	ICarbyneCache,
	ICarbyneCustomObject,
	ICarbyneCustomObjectConstructor,
	ICarbyneStore,
	TCarbyneRefInternal,
	TCarbyneTypeExt,
	TCarbyneTypeObj,
	TCarbyneValue
} from './index'

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const generalTypes = {
	bool      : true,
	number    : true,
	string    : true,
	reference : true
}

const objTypes = {
	object : true,
	array  : true,
	symbol : true
}

export class Carbyne {
	protected serializeCache : any
	protected deserializeCache : ICarbyneCache
	protected symbolIds : any
	protected store : ICarbyneStore
	protected customObjects : { [ name : string ] : ICarbyneCustomObjectConstructor }

	/**
	 * A model for a Carbyne database.
	 * @param {ICarbyneStore} store
	 */
	constructor ( store? : ICarbyneStore ) {
		if ( !store ) {
			store = new CarbyneMemoryStore ()
		}

		this.store = <ICarbyneStore> store

		this.serializeCache = {}
		this.deserializeCache = {}
		this.symbolIds = {}

		this.customObjects = {
			'blob' : CarbyneBlob
		}
	}

	/**
	 * Gets the type of an object.
	 * @param obj
	 * @returns {TCarbyneTypeExt}
	 */
	protected async getType ( obj : any ) : Promise<TCarbyneTypeExt | string> {
		const type = typeof obj

		if ( type === 'number' ) {
			if ( isNaN ( obj ) ) {
				return 'nan'
			} else if ( isFinite ( obj ) ) {
				return 'number'
			} else {
				if ( obj > 0 ) {
					return 'pinfinity'
				} else {
					return 'ninfinity'
				}
			}
		} else if ( type === 'boolean' ) {
			return 'bool'
		} else if ( Array.isArray ( obj ) ) {
			return 'array'
		} else if ( type === 'function' ) {
			throw new TypeError ( 'functions are not supported' )
		} else if ( obj === null ) {
			return 'null'
		} else if ( type === 'object' ) {
			const keys = Object.keys ( this.customObjects )

			for ( let i = 0, key ; key = keys[ i ], i < keys.length ; i++ ) {
				if ( obj instanceof this.customObjects[ key ] ) {
					return <string> key
				}
			}
		}

		return type
	}

	/**
	 * Serializes an object into storage.
	 * @param obj
	 * @param {string} id
	 * @returns {Promise<TCarbyneValue>}
	 */
	protected async serialize (
		obj : any,
		id : string
	) : Promise<TCarbyneValue> {
		const type = await this.getType ( obj )

		if ( type === 'symbol' ) {
			if ( this.symbolIds[ obj ] ) {
				id = this.symbolIds[ obj ]
			} else {
				this.symbolIds[ obj ] = id
			}
		}

		if ( ( type === 'object' || type === 'array' || this.customObjects.hasOwnProperty ( type ) ) ) {
			if ( obj.hasOwnProperty ( '_id' ) && typeof obj._id === 'string' ) {
				id = obj._id
			} else {
				Object.defineProperty (
					obj,
					'_id',
					{
						value : id
					}
				)
			}
		}

		if ( objTypes[ <TCarbyneTypeObj> type ] || this.customObjects.hasOwnProperty ( type ) ) {
			if ( this.serializeCache[ obj._id ] ) {
				return this.serializeCache[ obj._id ]
			}
		}

		if ( objTypes.hasOwnProperty ( type ) || this.customObjects.hasOwnProperty ( type ) ) {
			const toReturn = this.serializeCache[ id ] || ( this.serializeCache[ id ] = {
				type : 'reference',
				data : id
			} )

			if ( type === 'symbol' ) {
				await this.store.setRef (
					id,
					{
						type : 'symbol'
					}
				)
			} else {
				const newObj = <TCarbyneRefInternal> {
					type : type,
					id   : id
				}

				const addKV = async (
					key : string | number,
					value : any
				) => {
					newObj.obj[ key ] = await this.serialize (
						value,
						await this.store.genID ()
					)
				}

				if ( type === 'object' ) {
					newObj.obj = {}

					const keys = Object.keys ( obj )

					for (
						let i = 0,
						    key ;

						key = keys[ i ],
						i < keys.length ;

						i++
					) {
						const value = obj[ key ]

						await addKV (
							key,
							value
						)
					}
				} else if ( type === 'array' ) {
					newObj.obj = []

					for ( let i = 0, value ; value = obj[ i ], i < obj.length ; i++ ) {
						await addKV (
							i,
							value
						)
					}
				} else {
					newObj.obj = await obj.serialize ()
				}

				await this.store.setRef (
					id,
					newObj
				)
			}

			return toReturn
		} else {
			const value = <TCarbyneValue & { data? : any }> {
				type : type
			}

			if ( generalTypes.hasOwnProperty ( type ) ) {
				value.data = obj
			}

			return value
		}
	}

	/**
	 * Gets a regular value from a Carbyne value.
	 * @param {TCarbyneValue} value
	 * @returns {Promise}
	 */
	protected static async getValue (
		value : TCarbyneValue
	) {
		if ( value.type === 'reference' ) {
			throw new TypeError ( 'references are not supported by getValue' )
		} else if ( generalTypes.hasOwnProperty ( value.type ) ) {
			return ( <any> value )[ 'data' ]
		} else {
			const type = value.type

			switch ( type ) {
				case 'null':
					return null
				case 'undefined':
					return undefined
				case 'pinfinity':
					return Infinity
				case 'ninfinity':
					return -Infinity
				case 'nan':
					return NaN
				default:
					throw new TypeError ( 'type is invalid' )
			}
		}
	}

	/**
	 * Converts a Carbyne object into a regular object.
	 * @param {string | TCarbyneValue} obj
	 * @returns {Promise}
	 */
	protected async deserialize (
		obj : string | TCarbyneValue
	) {
		if ( typeof obj === 'string' ) {
			obj = <TCarbyneValue> {
				type : 'reference',
				data : obj
			}
		}

		if ( obj.type === 'reference' ) {
			const id = obj.data

			if ( !this.deserializeCache.hasOwnProperty ( id ) ) {
				const type = await this.store.getType ( id )

				if ( type === 'object' ) {
					const newObj = this.deserializeCache[ id ] = <any> {}
					const keys = await this.store.getKeys ( id )

					for (
						let i = 0,
						    key ;

						key = keys[ i ],
						i < keys.length ;

						i++
					) {
						const value = await this.store.getKey (
							id,
							key
						)

						newObj[ key ] = await this.deserialize ( value )
					}

					Object.defineProperty (
						newObj,
						'_id',
						{ value : id }
					)
				} else if ( type === 'array' ) {
					const newObj = this.deserializeCache[ id ] = []
					const length = await this.store.getLength ( id )

					for (
						let i = 0,
						    value ;

						i < length ;

						i++
					) {
						value = await this.store.getKey (
							id,
							i
						);

						( <Array<any>> newObj ).push ( await this.deserialize ( value ) )
					}

					Object.defineProperty (
						newObj,
						'_id',
						{ value : id }
					)
				} else if ( type === 'symbol' ) {
					const symbol = Symbol ()

					this.symbolIds[ symbol ] = id
					this.deserializeCache[ id ] = symbol
				} else if ( this.customObjects[ type ] ) {
					this.deserializeCache[ id ] = <ICarbyneCustomObject> new this.customObjects[ type ] (
						await this.store.getData ( id ),
						id
					)
				}
			}

			return this.deserializeCache[ id ]
		} else {
			return await Carbyne.getValue ( obj )
		}
	}

	/**
	 * Creates a Carbyne model from a regular object.
	 * @param obj
	 * @param {ICarbyneStore} store
	 * @returns {Promise<Carbyne>}
	 */
	static async fromObject (
		obj : any,
		store? : ICarbyneStore
	) {
		const db = new Carbyne ( store )
		await db.clear ()

		await db.serialize (
			obj,
			'root'
		)

		return db
	}

	/**
	 * Clears the database, immediately and irreversibly dropping all data.
	 * @returns {Promise<void>}
	 */
	async clear () {
		await this.store.clear ()
	}

	/**
	 * Converts this Carbyne model into an object and returns it.
	 * @returns {Promise}
	 */
	async toObject ( obj? : any ) {
		return await this.deserialize ( obj || 'root' )
	}

	async setKey (
		obj : any,
		key : string | number,
		value : any
	) {
		if ( typeof obj === 'string' ) {
			obj = { _id : obj }
		} else if ( !obj._id ) {
			if ( obj.hasOwnProperty ( 'type' ) && obj.type === 'reference' && obj.hasOwnProperty ( 'data' ) ) {
				obj = { _id : obj.data }
			} else {
				throw new TypeError ( 'object does not exist in database' )
			}
		}

		const serialized = await this.serialize (
			value,
			await this.store.genID ()
		)

		await this.store.setKey (
			obj._id,
			key,
			serialized
		)

		if ( this.deserializeCache && this.deserializeCache.hasOwnProperty ( obj._id ) ) {
			( <any> this.deserializeCache )[ obj._id ][ key ] = await this.deserialize ( serialized )
		}
	}

	/**
	 * Gets `key` of `obj`. `obj` can be an ID, reference, or deserialized object.
	 * @param obj
	 * @param key
	 * @returns {Promise<void>}
	 */
	async getKey (
		obj : any,
		key : string | number
	) {
		if ( typeof obj === 'string' ) {
			obj = { _id : obj }
		} else if ( !obj._id ) {
			if ( obj.hasOwnProperty ( 'type' ) && obj.type === 'reference' && obj.hasOwnProperty ( 'data' ) ) {
				obj = { _id : obj.data }
			} else {
				throw new TypeError ( 'object does not exist in database' )
			}
		}

		return await await this.store.getKey (
			obj._id,
			key
		)
	}

	/**
	 * Pushes an element to an array. `obj` can be an ID, reference, or deserialized object.
	 * @param obj
	 * @param value
	 * @returns {Promise<void>}
	 */
	async push (
		obj : any,
		value : string | number
	) {
		if ( typeof obj === 'string' ) {
			obj = { _id : obj }
		} else if ( !obj._id ) {
			if ( obj.hasOwnProperty ( 'type' ) && obj.type === 'reference' && obj.hasOwnProperty ( 'data' ) ) {
				obj = { _id : obj.data }
			} else {
				throw new TypeError ( 'object does not exist in database' )
			}
		}

		const serialized = await this.serialize (
			value,
			await this.store.genID ()
		)

		await this.store.push (
			obj._id,
			serialized
		)

		if ( this.deserializeCache && this.deserializeCache.hasOwnProperty ( obj._id ) ) {
			( <Array<any>> this.deserializeCache[ obj._id ] ).push ( await this.deserialize ( serialized ) )
		}
	}

	/**
	 * Sets the data of `obj` to `data`. Only use on custom objects. `obj` can be an ID, reference, or deserialized object.
	 * @param obj
	 * @param data
	 * @returns {Promise<void>}
	 */
	async setData (
		obj : any,
		data : any
	) {
		if ( typeof obj === 'string' ) {
			obj = { _id : obj }
		} else if ( !obj._id ) {
			if ( obj.hasOwnProperty ( 'type' ) && obj.type === 'reference' && obj.hasOwnProperty ( 'data' ) ) {
				obj = { _id : obj.data }
			} else {
				throw new TypeError ( 'object does not exist in database' )
			}
		}

		await this.store.setData (
			obj._id,
			data
		)

		if ( this.deserializeCache && this.deserializeCache.hasOwnProperty ( obj._id ) ) {
			( <any> this.deserializeCache[ obj._id ] ).data = data
		}
	}

	/**
	 * Gets the data of `obj`. `obj` can be an ID, reference, or deserialized object.
	 * @param obj
	 * @returns {Promise<any>}
	 */
	async getData ( obj : any ) {
		if ( typeof obj === 'string' ) {
			obj = { _id : obj }
		} else if ( !obj._id ) {
			if ( obj.hasOwnProperty ( 'type' ) && obj.type === 'reference' && obj.hasOwnProperty ( 'data' ) ) {
				obj = { _id : obj.data }
			} else {
				throw new TypeError ( 'object does not exist in database' )
			}
		}

		return await this.store.getData ( obj._id )
	}

	/**
	 * Registers a new object. `name` is the `type`, and `cls` is the class (not an instance of it!)
	 * @param {string} name
	 * @param {ICarbyneCustomObjectConstructor} cls
	 * @returns {Promise<void>}
	 */
	async registerCustomObject (
		name : string,
		cls : ICarbyneCustomObjectConstructor
	) {
		this.customObjects[ name ] = cls
	}
}