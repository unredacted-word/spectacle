var pandoc = require("pandoc-filter");
var Link = pandoc.Link;
var Span = pandoc.Span;
var Str = pandoc.Str;

function action({ t: type, c: value }) {
  if (type === "Span") {
    // c is typed as a three-tuple
    let [attrs, inlines] = value;
    let [id, classNames, keyValues] = attrs;
    if (classNames.includes("fn")) {
      return Str(" ");
    }
  }
}

pandoc.stdio(action);
