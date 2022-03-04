var pandoc = require("pandoc-filter");
var Link = pandoc.Link;
var Span = pandoc.Span;
var Str = pandoc.Str;
var RawInline = pandoc.RawInline;
var stringify = pandoc.stringify;

function action({ t: type, c: value }) {
  if (type === "Span") {
    // c is typed as a three-tuple
    let [attrs, inlines] = value;
    let [id, classNames, keyValues] = attrs;
    if (classNames.includes("fn")) {
      const footnote = stringify(inlines);

      return Str("\n  " + footnote + "\n");
    }
  }
}

pandoc.stdio(action);
