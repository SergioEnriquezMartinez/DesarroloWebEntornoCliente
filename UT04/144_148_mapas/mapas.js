function asignarValoresMapas() {
    const provincias = new Map();
    provincias.set(1,"Álava");
    provincias.set(28,"Madrid");
    provincias.set(34,"Palencia");
    provincias.set(41,"Sevilla");
    console.log(provincias);
}

function asignarValoresMapasEnUnaFila() {
    const provincias = new Map();
    provincias.set(1,"Álava").set(28,"Madrid").set(34,"Palencia").set(41,"Sevilla");
    console.log(provincias);
}

function usoArrayParaCrearMapa() {
    const personas = new Map([[1, "Jose"], [2, "Maria"], [3, "Elena"]]);
    console.log(personas);
}

function obtenerValoresMapa() {
    const provincias = new Map();
    provincias.set(1,"Álava");
    provincias.set(28,"Madrid");
    provincias.set(34,"Palencia");
    provincias.set(41,"Sevilla");
    console.log(provincias);
    console.log(provincias.get(34));
}

function buscarClaveMapa() {
    const provincias = new Map();
    provincias.set(1,"Álava");
    provincias.set(28,"Madrid");
    provincias.set(34,"Palencia");
    provincias.set(41,"Sevilla");
    console.log(provincias);
    console.log(provincias.has(34));
    console.log(provincias.has("Palencia"));
}

function borrarElementoMapa() {
    const provincias = new Map();
    provincias.set(1,"Álava");
    provincias.set(28,"Madrid");
    provincias.set(34,"Palencia");
    provincias.set(41,"Sevilla");
    console.log(provincias);
    provincias.delete(34);
    console.log(provincias);
}

window.onload = function() {
    document.getElementById("asignarValoresMapas").addEventListener("click", asignarValoresMapas);
    document.getElementById("asignarValoresMapasEnUnaFila").addEventListener("click", asignarValoresMapasEnUnaFila);
    document.getElementById("usoArrayParaCrearMapa").addEventListener("click", usoArrayParaCrearMapa);
    document.getElementById("obtenerValoresMapa").addEventListener("click", obtenerValoresMapa);
    document.getElementById("buscarClaveMapa").addEventListener("click", buscarClaveMapa);
    document.getElementById("borrarElementoMapa").addEventListener("click", borrarElementoMapa);
}