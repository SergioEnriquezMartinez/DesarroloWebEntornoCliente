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
    const arrayPersonas = [[1, "Jose"], [2, "María"], [3, "Elena"]];
    const personasParametroArray = new Map(arrayPersonas);
    console.log(personas);
    console.log(personasParametroArray);
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

function obtenerClavesYValoresForOf() {
    const provincias = new Map();
    provincias.set(1,"Álava");
    provincias.set(28,"Madrid");
    provincias.set(34,"Palencia");
    provincias.set(41,"Sevilla");
    let claves = provincias.keys();
    for (let k of claves) {
        console.log(k);
    }
    let valores = provincias.values();
    for (let v of valores) {
        console.log(v);
    }
}

function convertirMapaArray() {
    const provincias = new Map();
    provincias.set(1,"Álava").set(28,"Madrid").set(34,"Palencia").set(41,"Sevilla");
    console.log(...provincias);
}

function recorrerMapaForOf() {
    const provincias = new Map();
    provincias.set(1,"Álava").set(28,"Madrid").set(34,"Palencia").set(41,"Sevilla");
    for (let elemento of provincias) {
        console.log(elemento);
    }
}

function recuperarClaveValorEnMismoBucleForOf() {
    const provincias = new Map();
    provincias.set(1,"Álava").set(28,"Madrid").set(34,"Palencia").set(41,"Sevilla");
    for (let [clave, valor] of provincias) {
        console.log(`Clave: ${clave}, valor: ${valor}`);
    }
}

function obtenerClavesYValoresForOfTodoEnBucle() {
    const provincias = new Map();
    provincias.set(1,"Álava");
    provincias.set(28,"Madrid");
    provincias.set(34,"Palencia");
    provincias.set(41,"Sevilla");
    for (let k of provincias.keys()) {
        console.log(k);
    }
    for (let v of provincias.values()) {
        console.log(v);
    }

}

window.onload = function() {
    document.getElementById("asignarValoresMapas").addEventListener("click", asignarValoresMapas);
    document.getElementById("asignarValoresMapasEnUnaFila").addEventListener("click", asignarValoresMapasEnUnaFila);
    document.getElementById("usoArrayParaCrearMapa").addEventListener("click", usoArrayParaCrearMapa);
    document.getElementById("obtenerValoresMapa").addEventListener("click", obtenerValoresMapa);
    document.getElementById("buscarClaveMapa").addEventListener("click", buscarClaveMapa);
    document.getElementById("borrarElementoMapa").addEventListener("click", borrarElementoMapa);
    document.getElementById("obtenerClavesYValoresForOf").addEventListener("click", obtenerClavesYValoresForOf);
    document.getElementById("convertirMapaArray").addEventListener("click", convertirMapaArray);
    document.getElementById("recorrerMapaForOf").addEventListener("click", recorrerMapaForOf);
    document.getElementById("obtenerClavesYValoresForOfTodoEnBucle").addEventListener("click", obtenerClavesYValoresForOfTodoEnBucle);
}