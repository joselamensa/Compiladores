document
  .getElementById("compile-button")
  .addEventListener("click", function () {
    var sassCode = document.getElementById("sass-input").value;

    try {
      Sass.compile(sassCode, function (result) {
        if (result.status === 0) {
          document.getElementById("css-output").value = result.text;
        } else {
          document.getElementById("css-output").value = result.formatted;
        }
      });
    } catch (error) {
      console.error(error);
      document.getElementById("css-output").value = error.message;
    }
  });

const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function () {
  document.getElementById("css-output").value = "";
  document.getElementById("sass-input").value = "";
});
// Tu código JavaScript existente

function copyToClipboard() {
  var cssOutput = document.getElementById("css-output");
  if (cssOutput.value.trim() === "") {
    alert("No hay nada para copiar.");
    return;
  }
  cssOutput.select();
  cssOutput.setSelectionRange(0, 99999); // Para dispositivos móviles
  document.execCommand("copy");
  alert("¡CSS copiado al portapapeles!");
}
