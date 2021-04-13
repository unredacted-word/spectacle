var pandoc = require("pandoc-filter");
var stringify = pandoc.stringify;
var Link = pandoc.Link;
var RawInline = pandoc.RawInline;
var Str = pandoc.Str;
var p = pandoc.Para;

function action({ t: type, c: value }) {
  if (type === "Span") {
    // c is typed as a three-tuple
    let [attrs, inlines] = value;
    let [id, classNames] = attrs;
    if (classNames.includes("fn")) {
      var closeBtn = '<a href="#close" class="close">[Close]</a>';
      var content = stringify(inlines);
      var aside =
        '<aside id="' +
        id +
        '"' +
        ' class="' +
        classNames.join(" ") +
        '">' +
        content +
        " " +
        closeBtn +
        "</aside>";
      var fn = RawInline("html", aside);
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
