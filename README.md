# The Society of the Spectacle

A new English edition of Guy Debord's 1967 book, _La Société du Spectacle_.

📕 [Book](https://unredacted-word.pub/spectacle/)

This repo is the text of the book, source references, and a collection of tools
to produce the book in multiple formats for distribution.

## Index

- [metadata](book/metadata.yaml)
- [Cover](book/cover.md)
- [Half Title](book/half-title.md)
- [Title](book/title.md)
- [Colophon](book/colophon.md)
- [Contents](book/contents.md)
- [Preface](book/preface.md)

1. [Separation Perfected](book/01.md)
1. [The Commodity as Spectacle](book/02.md)
1. [Unity & Division Within Appearances](book/03.md)
1. [The Proletariat as Subject and Representation](book/04.md)
1. [Time & History](book/05.md)
1. [Spectacular Time](book/06.md)
1. [The Organization of Territory](book/07.md)
1. [Negation and Consumption in the Cultural Sphere](book/08.md)
1. [Ideology Materialized](book/09.md)

- [Glossary](book/glossary.md)
- [Bibliography](book/bibliography.md)
- [Index](book/index.md)
- [Authors](book/authors.md)

## Requirements

- NodeJS
- Yarn / npm
- Pandoc / Prince XML

on macOS:

```bash
# install Pandoc and libs
brew install pandoc librsvg
# install fonts
brew install --cask font-source-serif-pro
# install Prince XML
# brew install --cask --no-quarantine prince
```

## Development

```bash
yarn lint   # show lint errors
yarn format # format markdown
```

To live preview markdown in a browser:

```bash
yarn pen <filename>
```

# Generating Books

```
pandoc -d config/pdf.yaml  # print-ready book
pandoc -d config/html.yaml # HTML book
```
