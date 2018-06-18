import * as uuid                                                                           from 'uuid'
import { ICarbyneMemoryModel, ICarbyneStore, TCarbyneRef, TCarbyneTypeObj, TCarbyneValue } from '../index'

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export class CarbyneMemoryStore implements ICarbyneStore {
	protected model : ICarbyneMemoryModel = {
		root : null,
		refs : {}
	}

	constructor () {}

	/**
	 * Gets an object specified by ID.
	 * @param {string} id
	 * @returns {Promise<TCarbyneRefInternal>
	 */
	protected async getRef ( id : string ) : Promise<TCarbyneRef & { obj : any }> {
		let toReturn

		if ( id === 'root' ) {
			toReturn = <any> this.model.root
		} else {
			toReturn = <any> this.model.refs[ id ]
		}

		return toReturn
	}

	async clear ( newRoot? : any ) {
		this.model = <ICarbyneMemoryModel> {
			root : newRoot || {},
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
		return ( await this.getRef ( id ) ).obj[ key ]
	}

	async getType ( id : string ) : Promise<TCarbyneTypeObj> {
		return ( await this.getRef ( id ) ).type
	}

	async getLength ( id : string ) {
		return ( await this.getRef ( id ) ).obj.length
	}

	async getKeys ( id : string ) : Promise<string[]> {
		const ref = ( await this.getRef ( id ) )

		if ( ref.type === 'object' ) {
			return Object.keys ( ref.obj )
		} else if ( ref.type === 'array' ) {
			return [ ...ref.obj.keys () ]
		}

		return []
	}

	async setKey (
		id : string,
		key : number | string,
		value : TCarbyneValue
	) {
		( await this.getRef ( id ) ).obj[ key ] = value
	}

	async push (
		id : string,
		value : TCarbyneValue
	) {
		( <any> await this.getRef ( id ) ).obj.push ( value )
	}

	async getData ( id : string ) {
		return ( await this.getRef ( id ) ).obj
	}

	async setData (
		id : string,
		value : TCarbyneValue
	) {
		( await this.getRef ( id ) ).obj = value
	}
}