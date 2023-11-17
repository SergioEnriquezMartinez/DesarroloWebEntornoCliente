function eliminarConDelete (){
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    delete dias[2];
    console.log("Array borrao posición dos con delete" + dias);
    console.log(dias);
}
function eliminarPrimerElemento(){
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    dias.shift();
    console.log(dias);
}
function eliminarUltimoElemento(){
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    dias.pop();
    console.log(dias);
}

function eliminarSinDejarHueco() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let diaEliminado = dias.splice(2, 1);   //El primer valor es la posicion que queremos eliminar y el segundo es el numero de celdas que queremos eliminar a partir del elemento indicado
    console.log(dias);
    console.log(diaEliminado);
}

function eliminarVariosSinDejarHueco() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let diaEliminado = dias.splice(0, 5);
    console.log(dias);
    console.log(diaEliminado);
}

function aniadirVarios() {
    const dias = ["lunes", "jueves", "viernes", "sabado", "domingo"];
    let diasAiadidos = dias.splice(1, -5, "martes", "miercoles");   //Si ponemos un numero negativo o 0 nos lo añade todo, si ponemos un numero positivo solo nos añade las n primeras posiciones que le pasemos
    console.log(dias);                                              //No añade, reemplaza la primera posicion y luego añade
    console.log(diasAiadidos);
}

function reemplazarValor() {
    const dias = ["lunes", "jueves", "viernes", "sabado", "domingo"];
    let diasReemplazados = dias.splice(1, 1, "martes");
    console.log(dias);
    console.log(diasReemplazados);
}

function reemplazarVariosValores() {
    const dias = ["lunes", "jueves", "viernes", "sabado", "domingo"];
    let diasAiadidos = dias.splice(1, 2, "martes", "miercoles");
    console.log(dias);
    console.log(diasAiadidos);
}

window.onload = function(){
    document.getElementById("eliminarConDelete").addEventListener("click", eliminarConDelete);
    document.getElementById("eliminarPrimerElemento").addEventListener("click", eliminarPrimerElemento);
    document.getElementById("eliminarUltimoElemento").addEventListener("click", eliminarUltimoElemento);
    document.getElementById("eliminarSinDejarHueco").addEventListener("click", eliminarSinDejarHueco);
    document.getElementById("eliminarVariosSinDejarHueco").addEventListener("click", eliminarVariosSinDejarHueco);
    document.getElementById("aniadirVarios").addEventListener("click", aniadirVarios);
    document.getElementById("reemplazarValor").addEventListener("click", reemplazarValor);
    document.getElementById("reemplazarVariosValores").addEventListener("click", reemplazarVariosValores);
}