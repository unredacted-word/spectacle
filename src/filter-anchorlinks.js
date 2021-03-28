var pandoc = require("pandoc-filter");
var Span = pandoc.Span;
var stringify = pandoc.stringify;

function action({ t: type, c: value }, format, meta) {
  if (type === "Span") {
    // c is typed as a three-tuple
    const [attr, label, target] = value;
    return;
    const [url, title] = target;
    if (url.match(/var_imagepath/g)) {
      let path = stringify(meta.imagepath);
      let u = url.replace(/var_imagepath/g, path);
      return Image(attr, label, [u, title]);
    }
  }
}

pandoc.stdio(action);
