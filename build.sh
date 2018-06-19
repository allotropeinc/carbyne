#!/usr/bin/env bash

rm -rf dist
tsc

rm -rf docs/classes docs/interfaces docs/README.md
mkdir _docs
mv docs/* _docs
typedoc --exclude dist --out ./docs --readme none --mode file --theme markdown --mdEngine github
mv _docs/* docs
rm -rf _docs
