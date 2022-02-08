"use strict";

// var botonEncriptar = document.querySelector("#btn-encriptar");

// botonEncriptar.addEventListener("click", myFunction);

// function myFunction(event) {
//   event.preventDefault();
//   console.log("listo");
// }

var caracterPulsado = document.querySelector("#input-texto");
var caracterErrado = document.querySelector("#error-caracter");
var caracteresAdmitidos = "qwertyuiopasd fghjklñzxcvbnm";
var botonEncriptar = document.querySelector("#btn-encriptar");

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

botonEncriptar.addEventListener("click", encriptar);

function encriptar(){
    
}