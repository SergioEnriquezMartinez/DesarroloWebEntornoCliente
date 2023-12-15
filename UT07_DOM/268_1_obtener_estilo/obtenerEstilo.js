function recuperarEstilo() {
    let cssParrafo = window.getComputedStyle(parrafo);
    console.log(cssParrafo.fontFamily);
}

window.onload = function () {
    document.getElementById("recuperarEstilo").addEventListener("click", recuperarEstilo);
}