function tamanioArray() {
    const dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    console.log(dias.length);
}

function aniadirElementoFinalLength() {
    const notas = [9,8,7,6,5,4,3,2,1];
    notas[notas.length] = 10;
    console.log(notas);
}

function saberSiEsArray() {
    let a = [1,2,3,4,5,6,7,8,9];
    let b = "Hola";
    console.log(a instanceof Array);
    console.log(b instanceof Array);
}

function aniadirElementoArrayFinal() {
    const cantantes = ["Simon"];
    console.log(cantantes);
    cantantes.push("Garfunkel");
    console.log(cantantes);
}

function aniadirElementoArray() {
    
}

window.onload = function () {
    document.getElementById("tamanioArray").addEventListener("click", tamanioArray);
    document.getElementById("aniadirElementoFinalLength").addEventListener("click", aniadirElementoFinalLength);
    document.getElementById("saberSiEsArray").addEventListener("click", saberSiEsArray);
    document.getElementById("aniadirElementoArrayFinal").addEventListener("click", aniadirElementoArrayFinal);
    document.getElementById("aniadirElementoArray").addEventListener("click", aniadirElementoArray);
}