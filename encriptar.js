"use strict";

// var botonEncriptar = document.querySelector("#btn-encriptar");

// botonEncriptar.addEventListener("click", myFunction);

// function myFunction(event) {
//   event.preventDefault();
//   console.log("listo");
// }

var caracterPulsado = document.querySelector("#input-texto");
var mensajeEncriptado = document.querySelector("#msg");
var caracterErrado = document.querySelector("#error-caracter");
var botonEncriptar = document.querySelector("#btn-encriptar");
var caracteresAdmitidos = "qwertyuiopasd fghjklñzxcvbnm,;.:!";

caracterPulsado.addEventListener("input", function(){
    var entrada = this.value;
    var caracter = entrada.substr(-1); 
    if (caracteresAdmitidos.includes(caracter)) {
        document.getElementById("btn-encriptar").disabled = false;
        caracterErrado.classList.add("invisible");
    } else {
        document.getElementById("btn-encriptar").disabled = true;
        alert('"'+ caracter + '"' + " es un caracter inválido");
        caracterErrado.classList.remove("invisible");
    }
});

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    var textoEncriptado = [];
    var textoIngresado = caracterPulsado.value;

    for (var x=0; x<textoIngresado.length; x++){
        switch (textoIngresado[x]) {
          case "a":
            textoEncriptado += "ai";
            break;
          case "e":
            textoEncriptado += "enter";
            break;
          case "i":
            textoEncriptado += "imes";
            break;
          case "o":
            textoEncriptado += "ober";
            break;
          case "u":
            textoEncriptado += "ufat";
            break;

          default:
            textoEncriptado += textoIngresado[x];
            break;
        }
    }
    mensajeEncriptado.value = textoEncriptado;
});
