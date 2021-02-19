# The Society of the Spectacle

A new translation of Guy Debord's 1967 book, _La Société du Spectacle_.

📕 [Book](chapters/index.md)

This repo is the text of the book, source references, and a collection of tools
to produce the book in multiple formats for distribution.

## Requirements

- NodeJS
- Yarn / npm

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
