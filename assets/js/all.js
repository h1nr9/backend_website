"use strict";

ClassicEditor.create(document.querySelector("#editor"), {
  placeholder: "Reply an answer…"
}).then(function (editor) {
  console.log(editor);
})["catch"](function (error) {
  console.error(error);
});
//# sourceMappingURL=all.js.map
