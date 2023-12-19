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
      var selfLink = Link(
        ["", ["self"], []],
        [Str("#")],
        [`#${id}`, ""]
      );
      var closeBtn = Link(
        ["", ["close"], []],
        [Str("[Close]")],
        [`#close`, ""]
      );
      inlines = inlines.concat([Str(" "), selfLink, Str(" "), closeBtn]);
      var fn = Span([id, classNames, keyValues], inlines);
      var fnLink = Link(
        [`fn-ref-${id}`, ["fn-marker"], []],
        [Str("fn")],
        [`#${id}`, ""]
      );
      return [fnLink, fn];
    }
  }
}

pandoc.stdio(action);
