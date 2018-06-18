# Carbyne

Hey, welcome to the Carbyne repo! I created Carbyne out of frustration after searching for what seemed like days for an actual object database. JavaScript just didn't seem to have any real object databases that actually stored objects. Well, Carbyne's going to change that. Carbyne's a *real* object database that supports almost anything regular JS objects do.

<details><summary>Types Carbyne supports</summary>
	<ul>
		<li><code>boolean</code>s</li>
		<li><code>number</code>s</li>
		<li><code>string</code>s</li>
		<li><code>null</code></li>
		<li><code>undefined</code></li>
		<li><code>Infinity</code></li>
		<li><code>-Infinity</code></li>
		<li><code>NaN</code></li>
		<li><code>object</code>s</li>
		<li><code>Array</code>s</li>
		<li><code>Symbol</code>s</li>
	</ul>
</details>

<details><summary>Extra features Carbyne supports</summary>
	<ul>
		<li>Circular references</li>
		<li>Copies of objects (as well as arrays and Symbols)</li>
		<li><code>CarbyneBlob</code>s, basically <code>Buffer</code>s</li>
	</ul>
	<p>
		It's also very easy to add your own objects! Just call [`registerCustomObject`](#registerCustomObject)
	</p>
</details>

<details><summary>`npm test` output</summary>
<pre><code>  Carbyne
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


  42 passing (79ms)</code></pre>
</details>

You can use the TypeScript typings provided, or [read the docs provided in the repo](doc/README.md).
