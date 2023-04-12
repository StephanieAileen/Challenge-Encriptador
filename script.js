document.addEventListener('DOMContentLoaded', function () {
  let botonEncriptar = document.getElementById('encriptar');
  let inputEncriptar = document.getElementById('texto_encriptar');
  let textoEncriptado = document.getElementById('textdetected');

  botonEncriptar.addEventListener('click', function atraparTextoEncriptar() {
    var valorTextoEncriptar = inputEncriptar.value;
  });
});
