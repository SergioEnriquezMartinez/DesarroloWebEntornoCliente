function tiposDeComillas() {
    let s1 = "Miguel dijo 'venid en voz baja'";
    let s2 = "Miguel dijo \venid\' en voz baja";
    console.log("s1.---> " + s1);
    console.log("s2.---> " + s2);
}

function escaparCaracter() {
    let s3 = "Primera linea \n Segunda linea";
    let s4 = "Mi sonrisa: \u{1F600}";
    console.log("En dos filas ---> " + s3);
    console.log("Carita sonrisa ---> " + s4);
}

function comillasInvertidas() {
    let x=8, y=9;
    console.log("La variable x es: " + x);
    console.log(`La variable x es: ${x}`);
    console.log(`La suma de x e y es: ${x+y}`);
}

function compararCadenas() {
    let texto1 = "ana";
    let texto2 = "Ana";
    if (texto1 == texto2) {
        console.log("Son iguales");
    } else {
        console.log("Son distintos");
    }
}

function localCompare() {
    let texto3 = "Oso";
    let texto4 = "Ñu";
    console.log(texto3.localeCompare(texto4));
}

function longitud() {
    let texto = "Nabucodonosor";
    console.log("El texto tiene una longitud de ---> " + texto.length);
}

function caracterConcretoString() {
    let texto = "Nabucodonosor";
    console.log(texto.charAt(4));
}

function codigoCaracter() {
    let texto = "Nabucodonosor";
    console.log(texto.charCodeAt(5));
}

function convertirString() {
    let texto = "En el año 2019 saqué el carnet de camión";
    console.log(texto.toUpperCase());
    console.log(texto.toLowerCase());
}

function busquedaPrincipio() {
    let var1 = "¿Dónde está la x? Busca, busca";
    let textoBuscado = var1.indexOf("x");
    console.log(textoBuscado);
}

function busquedaFinal() {
    let var1 = "¿Dónde está la x? Busca, busca x";
    let textoBuscado = var1.lastIndexOf("x");
    console.log(textoBuscado);
}

function endsWith() {
    let texto = "Esto es una estructura estática";
    console.log(texto.endsWith("estática"));
}

function reemplazarString() {
    let texto = "Esto es una estructura estática";
    let reemplazado = texto.replace("st", "xxtt");
    console.log("El texto reemplazado es : " + reemplazado);
}

window.onload = function() {
    document.getElementById("comillas").addEventListener("click", tiposDeComillas);
    document.getElementById("escaparCaracter").addEventListener("click", escaparCaracter);
    document.getElementById("comillasInvertidas").addEventListener("click", comillasInvertidas);
    document.getElementById("compararCadenas").addEventListener("click", compararCadenas);
    document.getElementById("localCompare").addEventListener("click", localCompare);
    document.getElementById("longitud").addEventListener("click", longitud);
    document.getElementById("caracterConcretoString").addEventListener("click", caracterConcretoString);
    document.getElementById("codigoCaracter").addEventListener("click", codigoCaracter);
    document.getElementById("convertirString").addEventListener("click", convertirString);
    document.getElementById("busquedaPrincipio").addEventListener("click", busquedaPrincipio);
    document.getElementById("busquedaFinal").addEventListener("click", busquedaFinal);
    document.getElementById("terminaEn").addEventListener("click", endsWith);
    document.getElementById("reemplazarString").addEventListener("click", reemplazarString);
}