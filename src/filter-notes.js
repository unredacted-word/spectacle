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
      var content = stringify(inlines);
      var aside =
        '<aside id="' +
        id +
        '"' +
        ' class="' +
        classNames.join(" ") +
        '" epub:type="footnote">' +
        content +
        "</aside>";
      var fn = RawInline("html", aside);
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
