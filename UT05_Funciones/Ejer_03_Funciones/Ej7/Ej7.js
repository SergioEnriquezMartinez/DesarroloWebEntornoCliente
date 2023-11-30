//---------------APARTADO 7.1----------------
function mensajeConCallback(mensaje, accion) {
    return accion(mensaje);
}

function mostrarMensaje() {
    let mensaje = document.getElementById("msj").value;
    let valor = document.getElementById("opciones1").value;
    switch (valor) {
        case 'log':
            mensajeConCallback(mensaje, console.log);
            break;
        case 'error':
            mensajeConCallback(mensaje, console.error);
            break;
        case 'alert':
            mensajeConCallback(mensaje, alert);
            break;
        case 'prompt':
            mensajeConCallback(mensaje, prompt);
            break;
        case 'confirm':
            mensajeConCallback(mensaje, confirm);
            break;
    }
}

//---------------APARTADO 7.2----------------

function operacion(num1, num2, accion) {
    return accion(num1, num2);
}

function realizarOperaccion() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let valor = document.getElementById("opciones2").value;
    switch (valor) {
        case 'suma':
            document.getElementById("resultado").textContent = operacion(num1, num2, suma);
            break;
        case 'resta':
            document.getElementById("resultado").textContent = operacion(num1, num2, resta);
            break;
        case 'multiplicacion':
            document.getElementById("resultado").textContent = operacion(num1, num2, multiplicacion);
            break;
        case 'division':
            document.getElementById("resultado").textContent = operacion(num1, num2, division);
            break;
    }
}

function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multiplicacion(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}

window.onload = function () {
    document.getElementById("opciones1").addEventListener("change", mostrarMensaje);
    document.getElementById("opciones2").addEventListener("change", realizarOperaccion);
}