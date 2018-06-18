#!/usr/bin/env bash

rm -rf dist docs/README.md docs/classes docs/interfaces docs/modules
tsc
typedoc --exclude dist --out ./docs --readme none --theme markdown --mdEngine github
