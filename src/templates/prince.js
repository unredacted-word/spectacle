Prince.trackBoxes = true;
Prince.registerPostLayoutFunc(function () {
  /* called after layout finished. If this function modifies the DOM, Prince
   * will perform layout again on the updated document.
   */
  makeIx();
});

function getText(e) {
  if (e.hasAttribute('data-ix')) {
    return e.getAttribute('data-ix');
  }
  var text = '';
  for (var x = e.firstChild; x != null; x = x.nextSibling) {
    if (x.nodeType == x.TEXT_NODE) {
      text += x.data;
    } else if (x.nodeType == x.ELEMENT_NODE) {
      text += getText(x);
    }
  }
  return text;
}

function makeIx() {
  var ids = [];
  var ent = [];

  // find all elements that contain index entries, go through them sequentially
  var ix = document.querySelectorAll('.ix');;
  for (var i = 0; i < ix.length; i++) {
    ix[i].setAttribute("id", "ix." + i);

    // store the reference in a string in an associative array
    var str = getText(ix[i]);
    if (ids[str]) {
      ids[str] = ids[str] + ",ix." + i;
    } else {
      ids[str] = "ix." + i;
    }

    // check to see if the index entry is there already, if not add it
    if (ent.join("").indexOf(str) < 0) {
      ent.push(str);
    }
  }

  // the ent array now contains list of index entries, sort it!
  ent.sort();
  console.log('ids', Object.keys(ids));
  console.log('ent', ent);

  var str = '';

  // go through list of index entries, create one li element per entry

  for (var i = 0; i < ent.length; i++) {
    str = str + '<li class="entry"><span class="name">' + ent[i] + '</span>';

    var idsa = ids[ent[i]].split(",");

    // idsa is an array which contains strings like "ix.0","ix.4"
    var prevpage = 0;
    var collapsing = "";

    for (var j = 0; j < idsa.length; j++) {
      var e = document.getElementById(idsa[j]);
      var eboxes = e.getPrinceBoxes();
      if (eboxes.length > 0) {
        var box = eboxes[0];
        var page = box.pageNum - 2; /* -2 remove front blank pages */

        // page now has the name numer of the index entry
        if (page > prevpage) {
          if (prevpage == 0) {
            // first index for this entry
            str = str + "<span id=#" + idsa[j] + ">: " + page + "</span>";
            prevpage = page;
          } else if (page > prevpage + 1) {
            // e.g. prevpage = 1; page = 3
            if (collapsing) {
              // now we must terminate collapse
              str = str + "-<span id=#" + idsa[j] + ">" + prevpage + "</span>";
              collapsing = 0; // not collapsing any more
            } else {
              str = str + ", <span id=#" + idsa[j] + ">" + page + "</span>";
              prevpage = page;
            }
          } else {
            // e.g.  prevpage = 43  and page = 44, who knows what is next?
            str = str + "<!-- collapsing " + page + " -->";
            collapsing = "-"; // true
            prevpage = page;
          }
        } else {
          str =
            str + "<!--skipping id=#" + idsa[j] + " on page " + page + "-->";
        }
      }
    }

    // if we are collapsing at the end, terminate
    if (collapsing) {
      str = str + "-<span id=#" + idsa[j - 1] + ">" + page + "</span>";
    }
  }
  // write the output to stdout
  console.log(str);
  // write the output to the document before PDF is rendered
  var idx = document.getElementById('index-entries');
  idx.innerHTML = str;
}
