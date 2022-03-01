var pandoc = require("pandoc-filter");
var Link = pandoc.Link;
var Span = pandoc.Span;
var Str = pandoc.Str;
var x = pandoc;

function action({ t: type, c: value }) {
  if (type === "Span") {
    // c is typed as a three-tuple
    let [attrs, inlines] = value;
    let [_id, classNames] = attrs;
    if (classNames.includes("ix")) {
      return inlines;
    }
  }
}

pandoc.stdio(action);
