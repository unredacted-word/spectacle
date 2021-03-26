<p align="center">
  <img alt="Infinity Rope" src="images/infinity-rope.svg" width="480">
</p>

# The Society of the Spectacle

by Guy Debord

> A new English edition of Guy Debord's 1967 book, _La Société du Spectacle_.

📕 [Book](https://unredacted-word.pub/spectacle/)

---

This repo is the text of the book, source references, and a collection of tools
to produce the book in multiple formats for distribution.

## Requirements

- NodeJS, npm
- Pandoc / Prince XML

on macOS:

```bash
# install Pandoc and libs
brew install pandoc librsvg
# install fonts
brew install --cask font-source-serif-pro
# install Prince XML
# brew install --cask --no-quarantine prince
# install dependencies
npm install
```

## Development

```bash
npm run lint    # show lint errors
npm run format  # format markdown
```

To live preview markdown in a browser:

```bash
npm run pen <filename>
```

# Generating Books

```
npm run build  # build all formats to docs/*.{html,pdf}
```
