# The Society of the Spectacle

A new translation of Guy Debord's 1967 book, _La Société du Spectacle_.

📕 [Book](chapters/index.md)

This repo is the text of the book, source references, and a collection of tools
to produce the book in multiple formats for distribution.

## Requirements

- NodeJS
- Yarn / npm
- pandoc

on macOS:

```bash
# install Pandoc and libs
brew install pandoc librsvg

# install basictex & pdflatex to /Library/TeX/texbin/pdflatex
brew install --cask basictex
eval "$(/usr/libexec/path_helper)"
sudo tlmgr update --self
sudo tlmgr install collection-fontsrecommended

# install Prince XML
# brew install --cask --no-quarantine prince
```

## Development

```bash
yarn lint   # show lint errors
yarn format # format markdown
```

After checking out the repo, run `git config core.hooksPath .githooks` to enable
automatic markdown formatting. Alternatively run `yarn format` to manually
format the Markdown files.

To live preview markdown in a browser:

```bash
yarn pen <filename>
```

# Generating Books

```
pandoc -d config/pdf.yaml
```
