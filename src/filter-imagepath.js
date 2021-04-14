var pandoc = require("pandoc-filter");
var Image = pandoc.Image;
var stringify = pandoc.stringify;

function action({ t: type, c: value }, format, meta) {
  if (type === "Image") {
    // c is typed as a three-tuple
    const [attr, label, target] = value;
    const [url, title] = target;
    if (url.match(/var_imagepath/g)) {
      let path = stringify(meta.imagepath);
      let u = url.replace(/var_imagepath/g, path);
      return Image(attr, label, [u, title]);
    }
    if (url.match(/var_bw_imagepath/g)) {
      let path = stringify(meta.imagepath_bw);
      let u = url.replace(/var_bw_imagepath/g, path);
      return Image(attr, label, [u, title]);
    }
  }
}

pandoc.stdio(action);
