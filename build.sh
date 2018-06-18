#!/usr/bin/env bash

rm -rf dist doc
tsc
typedoc --exclude dist --out doc --readme none --theme markdown --mdEngine github
