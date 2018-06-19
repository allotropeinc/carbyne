import { expect }                                                                                               from 'chai'
import { describe, it }                                                                                         from 'mocha'
import * as path                                                                                                from 'path'
import { Carbyne, CarbyneBlob, CarbyneDirectoryStore, CarbyneMemoryStore, ICarbyneCustomObject, ICarbyneStore } from '../lib/index'

describe (
	'Carbyne',
	async () => {
		function describeStore (
			name : string,
			cls : ICarbyneStore
		) {
			describe (
				name,
				async () => {
					let db : Carbyne

					it (
						'should support fromObject',
						async () => {
							db = await Carbyne.fromObject (
								{},
								cls
							)
						}
					)

					function shouldStore (
						title : string,
						key : string,
						value : any
					) {
						it (
							`should store ${title}`,
							async () => {
								await db.setKey (
									'root',
									key,
									value
								)

								expect (
									await db.toObject (
										await db.getKey (
											'root',
											key
										)
									)
								).to.equal ( value )
							}
						)
					}

					shouldStore (
						'booleans',
						'bool',
						true
					)

					shouldStore (
						'numbers',
						'number',
						42
					)

					shouldStore (
						'strings',
						'string',
						'Hello, World!'
					)

					shouldStore (
						'null',
						'null',
						null
					)

					shouldStore (
						'undefined',
						'undefined',
						undefined
					)

					shouldStore (
						'Infinity',
						'pinfinity',
						Infinity
					)

					shouldStore (
						'-Infinity',
						'ninfinity',
						-Infinity
					)

					it (
						'should store NaN',
						async () => {
							await db.setKey (
								'root',
								'nan',
								NaN
							)

							expect (
								await db.toObject (
									await db.getKey (
										'root',
										'nan'
									)
								)
							).to.be.NaN
						}
					)

					it (
						'should store objects',
						async () => {
							await db.setKey (
								'root',
								'object',
								{
									value : 'Hello, World!'
								}
							)

							expect (
								await db.toObject (
									await db.getKey (
										'root',
										'object'
									)
								)
							).to.be.an ( 'object' ).and.have.property ( 'value' ).that.equals ( 'Hello, World!' )
						}
					)

					it (
						'should store arrays',
						async () => {
							await db.setKey (
								'root',
								'array',
								[ 'Hello, World!' ]
							)

							expect (
								await db.toObject (
									await db.getKey (
										'root',
										'array'
									)
								)
							).to.be.an ( 'array' ).that.includes ( 'Hello, World!' )
						}
					)

					it (
						'should store Symbols',
						async () => {
							await db.setKey (
								'root',
								'symbol',
								Symbol ()
							)

							expect (
								await db.toObject (
									await db.getKey (
										'root',
										'symbol'
									)
								)
							).to.be.a ( 'symbol' )
						}
					)

					it (
						'should store blobs',
						async () => {
							await db.setKey (
								'root',
								'blob',
								new CarbyneBlob ( Buffer.from ( 'Hello, World!' ) )
							)

							expect (
								await db.toObject (
									await db.getKey (
										'root',
										'blob'
									)
								)
							).to.be.an.instanceof ( CarbyneBlob )
						}
					)

					it (
						'should support deleting keys',
						async () => {
							await db.setKey (
								'root',
								'deleted',
								false
							)

							expect (
								await db.toObject (
									await db.getKey (
										'root',
										'deleted'
									)
								)
							).to.equal ( false )

							await db.delKey (
								'root',
								'deleted'
							)

							try {
								if (
									await db.toObject (
										await db.getKey (
											'root',
											'deleted'
										)
									) !== false
								) {
									return
								}
							} catch {
								return
							}

							throw new TypeError ( 'key still exists :(' )
						}
					)

					let serialized : any

					it (
						'should support circular references',
						async () => {
							serialized = await db.toObject ()

							await db.setKey (
								serialized,
								'circular',
								serialized
							)

							expect ( serialized ).to.have.property ( 'circular' ).that.equals ( serialized )
						}
					)

					it (
						'should support circular references in child arrays',
						async () => {
							await db.push (
								serialized.array,
								serialized
							)

							expect ( serialized ).to.have.property ( 'array' ).that.includes ( serialized )
						}
					)

					it (
						'should support circular references in child objects',
						async () => {
							await db.setKey (
								serialized.object,
								'circular',
								serialized
							)

							expect ( serialized ).to.have.property ( 'circular' ).that.equals ( serialized )
						}
					)

					it (
						'should support multiple copies of one object',
						async () => {
							await db.setKey (
								serialized,
								'object2',
								serialized.object
							)

							await db.setKey (
								serialized.object2,
								'copied',
								true
							)

							expect ( serialized ).to.have.property ( 'object' )
							expect ( serialized ).to.have.property ( 'object2' ).that.equals ( serialized.object ).and.has.property ( 'copied' ).that.is.a ( 'boolean' ).that.equals ( true )
						}
					)

					it (
						'should support multiple copies of one array',
						async () => {
							await db.setKey (
								serialized,
								'array2',
								serialized.array
							)

							await db.push (
								serialized.array2,
								'copied'
							)

							expect ( serialized ).to.have.property ( 'array' )
							expect ( serialized ).to.have.property ( 'array2' ).that.equals ( serialized.array ).and.includes ( 'copied' )
						}
					)

					it (
						'should support multiple copies of one symbol',
						async () => {
							await db.setKey (
								serialized,
								'symbol2',
								serialized.symbol
							)

							expect ( serialized.symbol2 ).to.equal ( serialized.symbol )
						}
					)

					it (
						'should support multiple copies of one blob',
						async () => {
							await db.setKey (
								serialized,
								'blob2',
								serialized.blob
							)

							const newBuffer = Buffer.from ( 'Hello, World! 2' )

							await db.setData (
								serialized.blob2,
								newBuffer
							)

							expect ( serialized ).to.have.property ( 'blob' )
							expect ( serialized ).to.have.property ( 'blob2' ).that.equals ( serialized.blob ).that.has.property ( 'data' ).that.equals ( newBuffer )
						}
					)

					it (
						'should support copying a blob',
						async () => {
							await db.setKey (
								serialized,
								'blobCopy',
								await serialized.blob2.copy ()
							)

							const newBuffer = Buffer.from ( 'Hello, World! 3' )

							await db.setData (
								serialized.blobCopy,
								newBuffer
							)

							expect ( serialized ).to.have.property ( 'blob2' )
							expect ( serialized ).to.have.property ( 'blobCopy' ).that.is.an.instanceof ( CarbyneBlob ).that.does.not.equal ( serialized.blob2 )
							expect ( serialized.blobCopy ).to.have.property ( 'data' ).that.equals ( newBuffer )
							expect ( serialized.blob2 ).to.have.property ( 'data' ).that.does.not.equal ( newBuffer )
						}
					)

					it (
						'should support custom objects',
						async () => {
							const cls = class implements ICarbyneCustomObject {
								public _id : string | undefined

								constructor (
									protected data : string,
									_id? : string
								) {
									if ( data !== 'test' ) {
										throw new TypeError ( 'object was serialized/unserialized incorrectly' )
									}

									if ( _id ) {
										Object.defineProperty (
											this,
											'_id',
											{ value : _id }
										)
									}
								}

								async serialize () {
									return 'test'
								}
							}

							await db.registerCustomObject (
								'custom',
								cls
							)

							await db.setKey (
								'root',
								'custom',
								new cls ( 'test' )
							)

							expect (
								await db.toObject (
									await db.getKey (
										'root',
										'custom'
									)
								)
							).to.be.an.instanceof ( cls )
						}
					)
				}
			)
		}

		describeStore (
			'DirectoryStore',
			new CarbyneDirectoryStore (
				path.join (
					__dirname,
					'test-db'
				)
			)
		)

		describeStore (
			'MemoryStore',
			new CarbyneMemoryStore ()
		)
	}
)