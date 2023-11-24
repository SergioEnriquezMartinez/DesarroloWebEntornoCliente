let primerOperando = document.getElementById("primerOperando");
let segundoOperando = document.getElementById("segundoOperando");
let operador = document.getElementById("operador");

function generarOperando(num = Math.floor(Math.random() * 10) + 1){
    return num;
}

function generarOperador(operador = ["+", "-", "*", "/"]){
    return operador[Math.floor(Math.random() * operador.length)];
}

function generarOperacion(){
    
}

window.onload = function(){

}