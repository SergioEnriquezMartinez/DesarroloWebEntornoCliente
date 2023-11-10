function llamarLog() {
    escribe("Hola", "log");
}

function llamarError() {
    escribe("Adios", "error");
}

function llamarAlert() {
    escribe("Buenas", "alert");
}

function llamarParametroNoValido() {
    escribe("Nada", "cualquier");
}

function escribe(dato, opcion) {
    if (opcion == "log") {
        console.log(dato);
    } else if (opcion == "error") {
        console.error(dato);
    } else if (opcion == "alert") {
        alert(dato);
    } else {
        alert("ERROR: El parámetro introducido no es válido");
    }
}

window.onload = function () {
    document.getElementById("llamarLog").addEventListener("click", llamarLog);
    document.getElementById("llamarError").addEventListener("click", llamarError);
    document.getElementById("llamarAlert").addEventListener("click", llamarAlert);
    document.getElementById("llamarParametroNoValido").addEventListener("click", llamarParametroNoValido);
}