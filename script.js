function encrypt() {
  var textinput = document.getElementById('textinput').value.toLowerCase();
  var textEncrypted = textinput.replace(/e/gim, 'enter');
  var textEncrypted = textEncrypted.replace(/o/gim, 'ober');
  var textEncrypted = textEncrypted.replace(/i/gim, 'imes');
  var textEncrypted = textEncrypted.replace(/a/gim, 'ai');
  var textEncrypted = textEncrypted.replace(/u/gim, 'upah');

  if (document.getElementById('textinput').value.length != 0) {
    document.getElementById('titulo-mensaje').style.display = 'none';
    document.getElementById('mensaje-p').style.display = 'none';
    document.getElementById('img-p').style.display = 'none';
  }

  // document.getElementById('textresult').style.display = 'show';
  document.getElementById('textresult').innerHTML = textEncrypted;
  document.getElementById('copy').style.display = 'show';
  document.getElementById('copy').style.display = 'inherit';
}

function decrypt() {
  var textinput = document.getElementById('textinput').value.toLowerCase();
  var textEncrypted = textinput.replace(/enter/gim, 'e');
  var textEncrypted = textEncrypted.replace(/ober/gim, 'o');
  var textEncrypted = textEncrypted.replace(/imes/gim, 'i');
  var textEncrypted = textEncrypted.replace(/ai/gim, 'a');
  var textEncrypted = textEncrypted.replace(/upah/gim, 'u');

  document.getElementById('textresult').innerHTML = textEncrypted;
}

function copy() {
  var content = document.querySelector('#textresult');
  content.select();
  document.execCommand('copy');
}
