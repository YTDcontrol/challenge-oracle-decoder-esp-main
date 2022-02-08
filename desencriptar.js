"use strict";

var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");
var mensajeEncriptado = document.querySelector("#msg");

botonCopiar.addEventListener("click", function (event) {
    event.preventDefault();

    const elem = document.createElement("textarea");
    elem.value = mensajeEncriptado.value;
    console.log(elem.value);
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem); 
});
