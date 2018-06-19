import * as uuid from 'uuid'
import {
	ICarbyneStore,
	TCarbyneMemoryModel,
	TCarbyneRefInternal,
	TCarbyneRefInternalArray,
	TCarbyneRefInternalCustom,
	TCarbyneRefInternalObject,
	TCarbyneTypeObj,
	TCarbyneValue
}                from '../index'

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * A store that uses exclusively memory to store a Carbyne database. **Does
 * not** support saving to a file or otherwise persisting data. This is meant
 * purely for testing or temporary data and should not be used for anything
 * you want to save. Anyway, example:
 *
 * ```typescript
 * import { Carbyne, CarbyneMemoryStore } from 'carbyne-db'
 *
 * const store = new CarbyneMemoryStore ()
 * const db = new Carbyne ( store )
 *
 * // hurray!
 * ```
 */
export class CarbyneMemoryStore implements ICarbyneStore {
	protected model : TCarbyneMemoryModel = {
		root : null,
		refs : {}
	}

	/**
	 * Initializes the store. Ish. This does absolutely nothing, and it doesn't
	 * need to do anything. [[Carbyne]] will call methods on it when it needs to
	 * use the store.
	 */
	constructor () {}

	/**
	 * Gets an object specified by ID.
	 * @param {string} id
	 * @returns {Promise<TCarbyneRefInternal>}
	 */
	protected async getRef ( id : string ) : Promise<TCarbyneRefInternal> {
		let toReturn

		if ( id === 'root' ) {
			toReturn = <any> this.model.root
		} else {
			toReturn = <any> this.model.refs[ id ]
		}

		return toReturn
	}

	async clear () {
		this.model = <TCarbyneMemoryModel> {
			root : {},
			refs : {}
		}
	}

	async genID () {
		return uuid.v4 ()
	}

	async setRef (
		id : string,
		obj : any
	) {
		if ( id === 'root' ) {
			this.model.root = obj
		} else {
			this.model.refs[ id ] = obj
		}
	}

	async getKey (
		id : string,
		key : number | string
	) {
		return ( <TCarbyneRefInternalObject> await this.getRef ( id ) ).obj[ key ]
	}

	async getType ( id : string ) : Promise<TCarbyneTypeObj> {
		return <TCarbyneTypeObj> ( await this.getRef ( id ) ).type
	}

	async getLength ( id : string ) {
		return ( <TCarbyneRefInternalArray> await this.getRef ( id ) ).obj.length
	}

	async getKeys ( id : string ) : Promise<string[]> {
		const ref = ( await this.getRef ( id ) )

		if ( ref.type === 'object' ) {
			return Object.keys ( ( <TCarbyneRefInternalObject> ref ).obj )
		} else if ( ref.type === 'array' ) {
			return [ ...( <TCarbyneRefInternalArray> ref ).obj.keys () ].map ( ( x ) => x.toString () )
		}

		return []
	}

	async setKey (
		id : string,
		key : number | string,
		value : TCarbyneValue
	) {
		( <TCarbyneRefInternalObject> await this.getRef ( id ) ).obj[ key ] = value
	}

	async push (
		id : string,
		value : TCarbyneValue
	) {
		( <TCarbyneRefInternalArray> await this.getRef ( id ) ).obj.push ( value )
	}

	async getData ( id : string ) {
		return ( <TCarbyneRefInternalCustom> await this.getRef ( id ) ).data
	}

	async setData (
		id : string,
		value : TCarbyneValue
	) {
		( <TCarbyneRefInternalCustom> await this.getRef ( id ) ).data = value
	}

	async delKey (
		id : string,
		key : number | string
	) {
		delete ( <TCarbyneRefInternalObject> await this.getRef ( id ) ).obj[ key ]
	}
}