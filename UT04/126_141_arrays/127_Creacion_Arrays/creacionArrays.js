
function crearConCorchetes(){
    let a = [];
    console.log("Array creado con corchetes --->" +a);
}
function crearConNew (){
    let a = new Array();
    console.log("Array creado con new --->" +a);
}
function crearPrimeraPosicion(){
    let a = [];
    a [0] = "Antonio";
    console.log("Array creado con primera posición --->" +a);
}
function tresPosiciones (){
    let a = [];
    a[1]= "Luis";
    a[2]= "Marta";
    a[3]= "Sofia";
    console.log("Array creado con tres posiciones --->" +a);
}
function visualizarPosicionDos(){
    let a = [];
    a[1]= "Luis";
    a[2]= "Marta";
    a[3]= "Sofia";
    console.log("Posición dos del array --->" +a[2]);
}
function crearVariosConCorchetes(){
    let nota = [7,8,6,6,5,4,3,9];
    console.log("Array creado con corchetes -->" + nota);
}
function crearVariosConNew(){
    let nota = new Array(7,8,6,6,5,4,3,9);
    console.log("Array creado con new -->" + nota);
}
function muestraPosicionCero(){
    let nota = new Array(7,8,6,6,5,4,3,9);
    console.log("Mostrar posición cero del Array-->" + nota[0]);
}
function muestraArrayConLog(){
    let nota = new Array(7,8,6,6,5,4,3,9);
    console.log("Mostrar posición cero del Array-->" + nota[0]);
}


window.onload = function(){
    document.getElementById("crearConCorchetes").addEventListener("click", crearConCorchetes);
    document.getElementById("crearConNew").addEventListener("click", crearConNew);
    document.getElementById("crearPrimeraPosicion").addEventListener("click", crearPrimeraPosicion);
    document.getElementById("tresPosiciones").addEventListener("click", tresPosiciones);
    document.getElementById("visualizarPosicionDos").addEventListener("click", visualizarPosicionDos);
    document.getElementById("crearVariosConCorchetes").addEventListener("click", crearVariosConCorchetes);
    document.getElementById("crearVariosConNew").addEventListener("click", crearVariosConNew);
    document.getElementById("muestraPosicionCero").addEventListener("click", muestraPosicionCero);
    document.getElementById("muestraArrayConLog").addEventListener("click", muestraArrayConLog);
}