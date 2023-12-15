function aniadirClase() {
    document.getElementById("destinoUno").classList.add("rojo");
}

function borrarClase() {
    document.getElementById("destinoUno").classList.remove("rojo");
}

function cambiarClase() {
    document.getElementById("destinoUno").classList.toggle("rojo");
    document.getElementById("destinoDos").classList.toggle("azulDos");
}

function compruebaContiene() {
    let valor = document.getElementById("destinoUno").classList.contains("azul");
    console.log(valor);
}

function reemplazaClase() {
    document.getElementById("destinoUno").classList.replace("azul", "rojo");
}

window.onload = function () {
    document.getElementById("aniadir").addEventListener("click", aniadirClase);
    document.getElementById("borrar").addEventListener("click", borrarClase);
    document.getElementById("cambiar").addEventListener("click", cambiarClase);
    document.getElementById("compruebaContiene").addEventListener("click", compruebaContiene);
    document.getElementById("reemplaza").addEventListener("click", reemplazaClase);
}