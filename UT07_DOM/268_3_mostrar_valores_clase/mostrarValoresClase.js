function recuperarValoresClase() {
    let parrafo = document.getElementById("parrafo");
    console.log(parrafo.className);
}

function recuValorClassBucle() {
    let parrafo = document.getElementById("parrafo");
    for (let clase of parrafo.classList) {
        console.log(clase);
    }
}

window.onload = function() {
    document.getElementById("recuperarValoresClase").addEventListener("click", recuperarValoresClase);
    document.getElementById("recuValorClassBucle").addEventListener("click", recuValorClassBucle);
}