#!/usr/bin/env bash

rm -rf dist
tsc

mv docs/_config.yml .
mv docs/assets .
typedoc --exclude dist --out ./docs --readme none --mode file --theme markdown --mdEngine github
mv _config.yml docs
mv assets docs
