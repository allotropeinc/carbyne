# Carbyne

Hey, welcome to the Carbyne repo! I created Carbyne out of frustration after searching for what seemed like days for an actual object database. JavaScript just didn't seem to have any real object databases that actually stored objects. Well, Carbyne's going to change that. Carbyne's a *real* object database that supports almost anything regular JS objects do.

<details><summary>Types Carbyne supports</summary>
- `boolean`s
- `number`s
- `string`s
- `null`
- `undefined`
- `Infinity`
- `-Infinity`
- `NaN`
- `object`s
- `Array`s
- `Symbol`s
</details>

<details><summary>Extra features Carbyne supports</summary>
- Circular references
- Copies of objects (as well as arrays and Symbols)
- `CarbyneBlob`s, basically `Buffer`s

It's also very easy to add your own objects! Just call [`registerCustomObject`](#registerCustomObject)
</details>

<details><summary>`npm test` output</summary>
```
  Carbyne
    DirectoryStore
      ✓ should support fromObject
      ✓ should store booleans
      ✓ should store numbers
      ✓ should store strings
      ✓ should store null
      ✓ should store undefined
      ✓ should store Infinity
      ✓ should store -Infinity
      ✓ should store NaN
      ✓ should store objects
      ✓ should store arrays
      ✓ should store Symbols
      ✓ should store blobs
      ✓ should support circular references
      ✓ should support circular references in child arrays
      ✓ should support circular references in child objects
      ✓ should support multiple copies of one object
      ✓ should support multiple copies of one array
      ✓ should support multiple copies of one symbol
      ✓ should support multiple copies of one blob
      ✓ should support copying a blob
    MemoryStore
      ✓ should support fromObject
      ✓ should store booleans
      ✓ should store numbers
      ✓ should store strings
      ✓ should store null
      ✓ should store undefined
      ✓ should store Infinity
      ✓ should store -Infinity
      ✓ should store NaN
      ✓ should store objects
      ✓ should store arrays
      ✓ should store Symbols
      ✓ should store blobs
      ✓ should support circular references
      ✓ should support circular references in child arrays
      ✓ should support circular references in child objects
      ✓ should support multiple copies of one object
      ✓ should support multiple copies of one array
      ✓ should support multiple copies of one symbol
      ✓ should support multiple copies of one blob
      ✓ should support copying a blob


  42 passing (79ms)
```
</details>

You can use the TypeScript typings provided, or [read the docs provided in the repo](docs/README.md).