function crearLanzarError() {
    let miError = new Error("Se esperaba un número");
    throw miError;
}

window.onload = function () {
    document.getElementById("crearLanzarError").addEventListener("click", crearLanzarError);
}