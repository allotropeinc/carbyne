#!/usr/bin/env bash

cp package.json dist/lib/package.json
cp README.md dist/lib/README.md
cd dist/lib
npm publish
cd ../..

