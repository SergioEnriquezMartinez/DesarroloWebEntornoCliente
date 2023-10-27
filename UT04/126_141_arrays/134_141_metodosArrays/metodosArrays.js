function tamanioArray() {
    const dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    console.log(dias.length);
}

function aniadirElementoFinalLength() {
    const notas = [9,8,7,6,5,4,3,2,1];
    notas[notas.length] = 10;
    console.log(notas);
}

function saberSiEsArray() {
    let a = [1,2,3,4,5,6,7,8,9];
    let b = "Hola";
    console.log(a instanceof Array);
    console.log(b instanceof Array);
}

function aniadirElementoArrayFinalPush() {
    const cantantes = ["Simon"];
    console.log(cantantes);
    cantantes.push("Garfunkel");
    console.log(cantantes);
}

function aniadirElementoArrayUnshift() {
    const cantantes4 = ["Crosby", "Stills", "Nash"];
    cantantes4.unshift("Young");
    console.log(`El array ha quedado ${cantantes4}`);
}

function mezclarArrayConcat() {
    const planetas1 = ["Venus", "Mercurio", "Tierra", "Marte"];
    const planetas2 = ["Júpiter", "Saturno", "Urano", "Neptuno"];
    const planetas = planetas1.concat(planetas2);
    console.log(planetas);
}

function crearSubArray() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const tresDias = dias.slice(3,6);
    console.log(tresDias);
}

function copiarArrayConSlice() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const array2 = dias.slice();
    console.log(array2);
}

function convertirArrayString() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    console.log(dias.join());
}

function convertirArrayStringOtroSeparador() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    console.log(dias.join(""));
    console.log(dias.join("-"));
    console.log(dias.join("<->"));
}

function busquedaConIndexofEnArray() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    console.log(dias.indexOf("Jueves"));
}

function busquedaConIndexofAPartirPosicion() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    console.log(dias.indexOf("Jueves", 4));
}

function busquedaEnArrayConLastIndexOf() {
    const numeros = [2,3,5,6,4,3,7,8,4,3,2,8,3,2];
    console.log(numeros.lastIndexOf(3));
    console.log(numeros.lastIndexOf(3,6));
}

function busquedaConIncludesArray() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    console.log(dias.includes("Jueves"));
}

function invertirOrdenArray() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    console.log(dias.reverse("Jueves"));
}

function ordenarArraySort() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    dias.sort();
    console.log(dias);
}

function ordenarArraySortPalabra() {
    const palabra = ["Ñu", "Águila", "boa", "oso", "marsopa", "NUTRIA"];
    palabra.sort();
    console.log(palabra);
}

function asignarValorVariable() {
    let [saludo, despedida, cierre] = ["Hola", "Adiós", "Cierre"];
    console.log(saludo);
    console.log(despedida);
    console.log(cierre);
}

function intercambioValores() {
    let [n1, n2] = [10, Math.random() * 10];
    console.log(n1 + "--" + n2);
    let a = 9;
    let b = 1;
    console.log(a + "--" + b);
    [a, b] = [b, a];
    console.log(a + "--" + b);
}

function operardorPropagacion() {
    let array = [1,2,3];
    let [x,y,z] = [...array];
    console.log(array);
    console.log(x + " ---> " + y + " ---> " + z);
    let [f,,g] = [...array];
    console.log(f + " ---> " + g);
    let a,b;
    [a,b,...array] = [1,2,3,4,5];
    console.log(a + " ---> " + b + " --->" + array);
}

window.onload = function () {
    document.getElementById("tamanioArray").addEventListener("click", tamanioArray);
    document.getElementById("aniadirElementoFinalLength").addEventListener("click", aniadirElementoFinalLength);
    document.getElementById("saberSiEsArray").addEventListener("click", saberSiEsArray);
    document.getElementById("aniadirElementoArrayPush").addEventListener("click", aniadirElementoArrayFinalPush);
    document.getElementById("aniadirElementoArrayUnshift").addEventListener("click", aniadirElementoArrayUnshift);
    document.getElementById("mezclarArrayConcat").addEventListener("click", mezclarArrayConcat);
    document.getElementById("crearSubArray").addEventListener("click", crearSubArray);
    document.getElementById("copiarArrayConSlice").addEventListener("click", copiarArrayConSlice);
    document.getElementById("convertirArrayString").addEventListener("click", convertirArrayString);
    document.getElementById("convertirArrayStringOtroSeparador").addEventListener("click", convertirArrayStringOtroSeparador);
    document.getElementById("busquedaConIndexof").addEventListener("click", busquedaConIndexofEnArray);
    document.getElementById("busquedaConIndexofAPartirPosicion").addEventListener("click", busquedaConIndexofAPartirPosicion);
    document.getElementById("busquedaEnArrayConLastIndexOf").addEventListener("click", busquedaEnArrayConLastIndexOf);
    document.getElementById("busquedaConIncludesArray").addEventListener("click", busquedaConIncludesArray);
    document.getElementById("invertirOrdenArray").addEventListener("click", invertirOrdenArray);
    document.getElementById("ordenarArraySort").addEventListener("click", ordenarArraySort);
    document.getElementById("ordenarArraySortPalabra").addEventListener("click", ordenarArraySortPalabra);
    document.getElementById("asignarValorVariable").addEventListener("click", asignarValorVariable);
    document.getElementById("intercambioValores").addEventListener("click", intercambioValores);
    document.getElementById("operadorPropagacion").addEventListener("click", operardorPropagacion);
}