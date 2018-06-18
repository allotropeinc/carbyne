#!/usr/bin/env bash

rm -rf dist ./docs
tsc
typedoc --exclude dist --out ./docs --readme none --theme markdown --mdEngine github
