#!/usr/bin/env bash

cp package.json dist/lib/package.json
cd dist/lib
npm publish
cd ../..

