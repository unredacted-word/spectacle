var pandoc = require("pandoc-filter");
var Link = pandoc.Link;
var Span = pandoc.Span;
var Str = pandoc.Str;

function action({ t: type, c: value }) {
  if (type === "Span") {
    // c is typed as a three-tuple
    let [attrs, inlines] = value;
    let [id, classNames] = attrs;
    if (classNames.includes("fn")) {
      var fn = Span([id, classNames, [["epub:type", "footnote"]], inlines);
      var fnLink = Link(
        [`fn-ref-${id}`, ["fn-marker"], [["epub:type", "noteref"]]],
        [Str("*")],
        [`#${id}`, ""]
      );
      return [fnLink, fn];
    }
  }
}

pandoc.stdio(action);
