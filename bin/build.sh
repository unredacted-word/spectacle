#!/usr/bin/env bash

set -e

mkdir -p dist/markdown
mkdir -p dist/images

# combine markdown
bin/combine-markdown.sh

# copy images
cp -R images/* dist/images

pushd dist
pandoc -d ../config/pdf.yaml
popd

echo 'dist/book.pdf ✅'
