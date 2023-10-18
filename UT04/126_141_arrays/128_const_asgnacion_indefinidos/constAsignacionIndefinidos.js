
function crearArrayConConst(){
    const datos = [4.5,6.78,7.12,9.123];
    console.log("Array creado con const -->" + datos);
    
}
function modificarPosicionCero(){
    const datos = [4.5,6.78,7.12,9.123];
    datos[0] = 4.671;
    console.log("Arracy con posicion cero cambiada --->" + datos);
}
function modificarPosicionCuatro(){
    const datos = [4.5,6.78,7.12,9.123];
    datos[4] = 3.87;
    console.log("Arracy con posicion cuatro cambiada --->" + datos);
}
function mostrarArrayConTypeof(){
    const datos = [4.5,6.78,7.12,9.123];
    
    console.log("Arracy con Typeof --->" + typeof datos);
}
function asignacionDosDireccionesAArray(){
    //Datos es la primera referencia a array
    const datos = [4.5,6.78,7.12,9.123];
    //Datos2 es la segunda referencia al array
    console.log("Array a través de la primera referencia --->" + datos[0]);
    const datos2 = datos;
    datos2[0] = 400;
    console.log("Array modificado a través de la segunda referencia --->" + datos[0]);
}
function valorIndefinidosArray(){
    let a = ["Saul" , "Rocio"];
    a[3]= "Maria";
    console.log("Mostramos posición dos del array a---->" + a[2]);
    let b = ["Saul" , "Rocio",,"María"];
    console.log("Mostramos posición dos del array b---->" + b[2]);
}
window.onload = function(){
    document.getElementById("crearArrayConConst").addEventListener("click", crearArrayConConst);
    document.getElementById("modificarPosicionCero").addEventListener("click", modificarPosicionCero);
    document.getElementById("modificarPosicionCuatro").addEventListener("click", modificarPosicionCuatro);
    document.getElementById("mostrarArrayConTypeof").addEventListener("click", mostrarArrayConTypeof);
    document.getElementById("asignacionDosDireccionesAArray").addEventListener("click", asignacionDosDireccionesAArray);
    document.getElementById("valorIndefinidosArray").addEventListener("click", valorIndefinidosArray);
}