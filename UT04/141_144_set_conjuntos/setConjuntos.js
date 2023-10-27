function aniadirNuevosValores() {
    const lista = new Set();
    lista.add(8);
    lista.add(6);
    lista.add(5);
    lista.add(5);
    lista.add(6);
    console.log(lista);
}

function aniadirNuevosValoresMismaFila() {
    const lista = new Set();
    lista.add(8).add(6).add(5).add(5).add(6);
    console.log(lista);
}

function inicializarValoresAPartirArray() {
    const lista = new Set([5,6,5,6,5,5,6,4,6,6]);
    console.log(lista);
}

function iniciarSetConTexto() {
    const lista = new Set("Conjunto");
    console.log(lista);    
}

function iniciarSetYAniadirTexto() {
    const lista = new Set();
    lista.add("Conjunto");
    console.log(lista);
}

function tamanioConjunto() {
    
}

window.onload = function() {
    document.getElementById("aniadirNuevosValores").addEventListener("click", aniadirNuevosValores);
    document.getElementById("aniadirNuevosValoresMismaFila").addEventListener("click", aniadirNuevosValoresMismaFila);
    document.getElementById("inicializarValoresAPartirDeArray").addEventListener("click", inicializarValoresAPartirArray);
    document.getElementById("iniciarSetConTexto").addEventListener("click", iniciarSetConTexto);
    document.getElementById("iniciarSetYAniadirTexto").addEventListener("click", iniciarSetYAniadirTexto);
    document.getElementById("tamanioConjunto").addEventListener("click", tamanioConjunto);
}