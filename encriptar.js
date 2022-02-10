"use strict";

var caracterPulsado = document.querySelector("#input-texto");
var mensajeEncriptado = document.querySelector("#msg");
var caracterErrado = document.querySelector("#error-caracter");
var botonEncriptar = document.querySelector("#btn-encriptar");
var caracteresAdmitidos = "qwertyuiopasd fghjklñzxcvbnm,;.:!";

caracterPulsado.addEventListener("input", function(){
    var entrada = this.value;
    if (cadenaValida(entrada)) {
      document.getElementById("btn-encriptar").disabled = false;
      caracterErrado.classList.add("invisible");
    } else {
      document.getElementById("btn-encriptar").disabled = true;
      caracterErrado.classList.remove("invisible");
    }
});

function cadenaValida(inputString){
  var validString = true;
  for(var x=0; x<inputString.length; x++){
      if (!caracteresAdmitidos.includes(inputString[x])) {
        validString = false;
      }
    }
  return validString;
  }

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
