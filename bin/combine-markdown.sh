#!/usr/bin/env bash

set -e

mkdir -p dist

cat \
  chapters/cover.md \
  chapters/half-title.md \
  chapters/title.md \
  chapters/colophon.md \
  chapters/contents.md \
  chapters/preface.md \
  chapters/01.md \
  chapters/02.md \
  chapters/03.md \
  chapters/04.md \
  chapters/05.md \
  chapters/06.md \
  chapters/07.md \
  chapters/08.md \
  chapters/09.md \
  chapters/glossary.md \
  chapters/bibliography.md \
  chapters/actual-index.md \
  chapters/authors.md > dist/book.md

echo 'dist/book.md ✅'
