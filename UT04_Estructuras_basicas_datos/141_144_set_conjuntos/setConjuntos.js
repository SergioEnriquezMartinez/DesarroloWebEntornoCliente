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
    const lista = new Set([2,4,6,8,10]);
    console.log(lista.size);
}

function borrarValoresConjunto() {
    const lista = new Set([1,2,3,4,5,6,7,8,9,10]);
    lista.delete(6);
    console.log(lista);
}

function borrarTodo() {
    const lista = new Set([1,2,3,4,5,6,7,8,9,10]);
    lista.clear();
    console.log(lista);
}

function buscarValores() {
    const lista = new Set([1,2,3,4,5,6,7,8,9,10]);
    console.log(lista);
    console.log(lista.has(7));
    console.log(lista.has(11));
}

function convertirConjuntoArray() {
    const lista = new Set([1,2,3,4,5,6,7,8,9,10]);
    const array = [...lista];
    console.log(array);
}

function recorrerConjuntoConForOf() {
    const lista = new Set([1,2,3,4,5,6,7,8,9,10]);
    for (const numero of lista) {
        console.log(numero);
    }
}

window.onload = function() {
    document.getElementById("aniadirNuevosValores").addEventListener("click", aniadirNuevosValores);
    document.getElementById("aniadirNuevosValoresMismaFila").addEventListener("click", aniadirNuevosValoresMismaFila);
    document.getElementById("inicializarValoresAPartirDeArray").addEventListener("click", inicializarValoresAPartirArray);
    document.getElementById("iniciarSetConTexto").addEventListener("click", iniciarSetConTexto);
    document.getElementById("iniciarSetYAniadirTexto").addEventListener("click", iniciarSetYAniadirTexto);
    document.getElementById("tamanioConjunto").addEventListener("click", tamanioConjunto);
    document.getElementById("borrarValoresConjunto").addEventListener("click", borrarValoresConjunto);
    document.getElementById("borrarTodo").addEventListener("click", borrarTodo);
    document.getElementById("buscarValores").addEventListener("click", buscarValores);
    document.getElementById("convertirConjuntoArray").addEventListener("click", convertirConjuntoArray);
    document.getElementById("recorrerConjuntoConForOf").addEventListener("click", recorrerConjuntoConForOf);
}