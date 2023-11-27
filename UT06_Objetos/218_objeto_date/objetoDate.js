function objetoFecha() {
    let hoy = new Date();
    console.log("Fecha: " + hoy);

    let fecha = new Date(2022,5,27,18,12,0,0);
    console.log("Fecha: " + fecha);

    let fecha2 = new Date("2022,5,27");
    console.log("Fecha: " + fecha2);

    console.log("fecha2.getDate(): " + fecha2.getDate());
    console.log("fecha2.getUTCDate(): " + fecha2.getUTCDate());
}

window.onload = function() {
    document.getElementById("objetoFecha").addEventListener("click", objetoFecha);
}