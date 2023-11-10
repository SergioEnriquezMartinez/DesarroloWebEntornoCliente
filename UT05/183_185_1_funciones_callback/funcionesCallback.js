function llamadaConLog() {
    escribe("Hola", console.log());
}

function llamadaConError() {
    escribe("Adios", console.error());
}

function llamadaConAlert() {
    escribe("Buenas", alert);
}

function escribe(dato, funcion) {
    funcion(dato);
}

window.onload = function() {
    document.getElementById("llamadaConLog").addEventListener("click", llamadaConLog);
    document.getElementById("llamadaConError").addEventListener("click", llamadaConError);
    document.getElementById("llamadaConAlert").addEventListener("click", llamadaConAlert);
}