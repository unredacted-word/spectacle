var pandoc = require("pandoc-filter");
var Str = pandoc.Str;
var stringify = pandoc.stringify;

function action({ t: type, c: value }, format, meta) {
  if (type === "Str") {
    if (value.match(/var_isbn/g)) {
      var isbn = stringify(meta.isbn13);
      return Str(value.replace(/var_isbn/g, isbn));
    }
    if (value.match(/var_format/g)) {
      var format = stringify(meta.format);
      return Str(value.replace(/var_format/g, format));
    }
    if (value.match(/var_edition/g)) {
      var edition = stringify(meta.edition);
      return Str(value.replace(/var_edition/g, edition));
    }
    if (value.match(/var_printing/g)) {
      var printing = stringify(meta.printing);
      return Str(value.replace(/var_printing/g, printing));
    }
  }
}

pandoc.stdio(action);
