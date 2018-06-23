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
      ✓ supports fromObject
      ✓ supports supportsKeys
      ✓ supports clear
      ✓ supports supportsKeys after clear
      ✓ supports setRoot
      ✓ stores booleans
      ✓ stores numbers
      ✓ stores strings
      ✓ stores null
      ✓ stores undefined
      ✓ stores Infinity
      ✓ stores -Infinity
      ✓ stores NaN
      ✓ stores objects
      ✓ stores arrays
      ✓ stores Symbols
      ✓ stores blobs
      ✓ supports deleting keys
      ✓ supports checking if keys exist
      ✓ supports circular references
      ✓ supports circular references in child arrays
      ✓ supports circular references in child objects
      ✓ supports multiple copies of one object
      ✓ supports multiple copies of one array
      ✓ supports multiple copies of one symbol
      ✓ supports multiple copies of one blob
      ✓ supports copying a blob
      ✓ supports custom objects
    MemoryStore
      ✓ supports fromObject
      ✓ supports supportsKeys
      ✓ supports clear
      ✓ supports supportsKeys after clear
      ✓ supports setRoot
      ✓ stores booleans
      ✓ stores numbers
      ✓ stores strings
      ✓ stores null
      ✓ stores undefined
      ✓ stores Infinity
      ✓ stores -Infinity
      ✓ stores NaN
      ✓ stores objects
      ✓ stores arrays
      ✓ stores Symbols
      ✓ stores blobs
      ✓ supports deleting keys
      ✓ supports checking if keys exist
      ✓ supports circular references
      ✓ supports circular references in child arrays
      ✓ supports circular references in child objects
      ✓ supports multiple copies of one object
      ✓ supports multiple copies of one array
      ✓ supports multiple copies of one symbol
      ✓ supports multiple copies of one blob
      ✓ supports copying a blob
      ✓ supports custom objects


  56 passing (128ms)</code></pre>
</details><br />

You can use the TypeScript typings provided, or [read the docs](https://allotropelabs.github.io/carbyne/). There's even a handy [Getting Started guide](https://github.com/allotropelabs/carbyne/wiki/Getting-Started-with-Carbyne)!

You can install Carbyne with this simple command:
```
npm i carbyne-db
```
