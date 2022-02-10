"use strict";

var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");
var mensajeEncriptado = document.querySelector("#msg");

botonCopiar.addEventListener("click", function (event) {
    event.preventDefault();

    const elem = document.createElement("textarea");
    elem.value = mensajeEncriptado.value;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem); 
});

botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();

    var keyWords = ["ai", "enter", "imes", "ober", "ufat"];
    var replaceChar = ["a", "e", "i", "o", "u"];
    var textoIngresado = caracterPulsado.value;

    for (var x=0; x<5; x++){
      var posicion = textoIngresado.indexOf(keyWords[x]);
      while (posicion >= 0) {
        textoIngresado =
          textoIngresado.slice(0, posicion) +
          replaceChar[x] +
          textoIngresado.slice(posicion + keyWords[x].length);
        posicion = textoIngresado.indexOf(keyWords[x]);
      }
    }
    mensajeEncriptado.value = textoIngresado;
});