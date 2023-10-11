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
    let reemplazadoTodo = texto.replaceAll("st", "SSTT");
    console.log("El texto reemplazado es : " + reemplazado);
    console.log("El texto reemplazado es : " + reemplazadoTodo);
}

function stringPrimitivoObjeto() {
    let cadenaUno = "Esto es una cadena como un tipo primitivo"; //Cadena como tipos primitivos
    let cadenaDos = new String("Esto es una cadena como un objeto");
    console.log(typeof cadenaUno);
    console.log(typeof cadenaDos);
}

function eliminaEspaciosPrincipioFinal() {
    let textoConEspacios = "    hola     ";
    let textoSinEspacios = textoConEspacios.trim();
    console.log("inicio ---->" + textoConEspacios + "<---- fin");
    console.log("inicio ---->" + textoSinEspacios + "<---- fin");
}

function extraeSlice() {
    let textoDatos = "0123456789ABCDEF";
    let textoCon1 = textoDatos.slice(0,1); //El primer dato es la posicion en la que queremos que empiece y el segundo la posicion hasta la que queremos llegar (incluida)
    let textoCon2 = textoDatos.slice(0,2);
    let textoCon3 = textoDatos.slice(0,3);
    let texto3_10 = textoDatos.slice(3,10);
    let textoConFinal = textoDatos.slice(3,-5);
    console.log("De 0 a 1  --> " + textoCon1);
    console.log("De 0 a 2  --> " + textoCon2);
    console.log("De 0 a 3  --> " + textoCon3);
    console.log("De 3 a 10 --> " + texto3_10);
    console.log("De 3 a -5 --> " + textoConFinal);
    console.log("Cadena completa: " + textoDatos);
}

function extraeConSubstring() {
    let textoDatos = "0123456789ABCDEF";
    let textoSubstring = textoDatos.substring(0,2);
    let textoSubstring2 = textoDatos.substring(3,10);
    console.log("De 0 a 2  --> " + textoSubstring);
    console.log("De 3 a 10 --> " + textoSubstring2);
    console.log("Cadena completa: " + textoDatos);
}

function convertirArraySplit() {
    let cadena = "uno dos tres cuatro cinco seis";
    let conversion = cadena.split(" ");     //Si pasamos 1 parametro se trata del delimitiador que queramos que sea el caracter que se usa como divisor de la cadena
    let conversion2 = cadena.split(" ", 3); //Si pasamos 2 parametros el segundo es el limite de divisiones que queremos que haga, es decir, cuanto queremos que almacene en el array
    console.log(cadena);
    console.log(conversion);
    console.log(conversion2);
}

function convertirCodigoTexto() {
    console.log(String.fromCharCode(65,66,67));
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
    document.getElementById("stringPrimitivoYObjeto").addEventListener("click", stringPrimitivoObjeto);
    document.getElementById("eliminaPrincipioFinal").addEventListener("click", eliminaEspaciosPrincipioFinal);
    document.getElementById("extraeConSlice").addEventListener("click", extraeSlice);
    document.getElementById("extraeConSubstring").addEventListener("click", extraeConSubstring);
    document.getElementById("convertirArraySplit").addEventListener("click", convertirArraySplit);
    document.getElementById("convertirCodigoTexto").addEventListener("click", convertirCodigoTexto);
}