ClassicEditor.create(document.querySelector("#editor"), {
  placeholder: "Reply an answer…",
})
  .then((editor) => {
    console.log(editor);
  })
  .catch((error) => {
    console.error(error);
  });
