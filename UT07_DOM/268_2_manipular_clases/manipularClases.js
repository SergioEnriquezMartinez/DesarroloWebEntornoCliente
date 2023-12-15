function asignarClase() {
    let parrafo = document.getElementById("parrafo");
    /*parrafo.classList.add("primerParrafo");*/
    parrafo.className = "remarcado";
    console.log(parrafo.className);
}

window.onload = function() {
    document.getElementById("asignarClase").addEventListener("click", asignarClase);
}