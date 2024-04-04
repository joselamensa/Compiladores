/* COMPILADOR */
const htmlInput = document.getElementById("html-input");
const cssInput = document.getElementById("css-input");
const jsInput = document.getElementById("js-input");
const resultFrame = document.getElementById("result-frame");

function updateResult() {
  const htmlCode = htmlInput.value;
  const cssCode = cssInput.value;
  const jsCode = jsInput.value;

  const result = `
    <html>
      <head>
        <style>${cssCode}</style>
        <script>${jsCode}</script>
      </head>
      <body>
        ${htmlCode}
      </body>
    </html>
  `;

  resultFrame.contentDocument.open();
  resultFrame.contentDocument.write(result);
  resultFrame.contentDocument.close();
}

htmlInput.addEventListener("input", updateResult);
cssInput.addEventListener("input", updateResult);
jsInput.addEventListener("input", updateResult);

document.addEventListener("DOMContentLoaded", function () {
  const deleteIcons = document.querySelectorAll(".delete-icon");

  deleteIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      const textarea = this.nextElementSibling;
      textarea.value = "";
      updateResult();
    });
  });
});
