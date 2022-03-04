var pandoc = require("pandoc-filter");
var Link = pandoc.Link;
var Span = pandoc.Span;
var Str = pandoc.Str;

function action({ t: type, c: value }) {
  if (type === "Span") {
    // c is typed as a three-tuple
    let [attrs, inlines] = value;
    let [_, classNames] = attrs;
    if (classNames.includes("ix") && !classNames.includes("fn")) {
      const copy = pandoc.stringify(inlines);
      return Str(copy);
    }
  }
}

pandoc.stdio(action);
