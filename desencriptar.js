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

    var textoDesEncriptado = [];
    var textoIngresado = caracterPulsado.value;

    //console.log(textoIngresado);
    var posicion = textoIngresado.indexOf("ai");
    while (posicion >= 0) {
        textoIngresado =
          textoIngresado.slice(0, posicion) +
          "a" +
          textoIngresado.slice(posicion + 2);
        posicion = textoIngresado.indexOf("ai");
    }
    console.log(textoIngresado);
});