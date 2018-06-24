# Carbyne

Hey, welcome to the Carbyne repo! I created Carbyne out of frustration after searching for what seemed like days for an actual object database. JavaScript just didn't seem to have any real object databases that actually stored objects. Well, Carbyne's going to change that. Carbyne's a *real* object database that supports almost anything regular JS objects do.

Carbyne:
- stores booleans
- stores numbers
- stores strings
- stores null
- stores undefined
- stores Infinity
- stores -Infinity
- stores NaN
- stores objects
- stores arrays
- stores Symbols
- stores blobs
- supports circular references
- supports circular references in child arrays
- supports circular references in child objects
- supports multiple copies of one object
- supports multiple copies of one array
- supports multiple copies of one symbol
- supports multiple copies of one blob
- supports copying a blob
- supports custom objects

You can use the TypeScript typings provided, or [read the docs](https://allotropelabs.github.io/carbyne/). There's even a handy [Getting Started guide](https://github.com/allotropelabs/carbyne/wiki/Getting-Started-with-Carbyne)!

You can install Carbyne with this simple command:
```
npm i carbyne-db
```
