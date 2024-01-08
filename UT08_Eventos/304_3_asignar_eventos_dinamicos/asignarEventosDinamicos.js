function asignarEventoDinamico() {
    let parrafos = document.querySelectorAll("p");
    for (const parrafo of parrafos) {
        parrafo.addEventListener("click", () => {alert(parrafo.textContent)});
    }
}

function crearElemento() {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrafo";
    document.body.appendChild(nuevoParrafo);
}

window.onload = function() {
    document.getElementById("asignarEventoDinamico").addEventListener("click", asignarEventoDinamico);
    document.getElementById("crearElemento").addEventListener("click", crearElemento);
}