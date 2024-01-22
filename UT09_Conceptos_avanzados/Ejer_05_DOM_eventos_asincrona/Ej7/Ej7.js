function generarNumero () {
    let numero = Math.floor(Math.random() * 10000) + 1;
    return numero;
}

function comprobarResultado () {
    let operando1 = document.getElementById("operando1").textContent;
    let operando2 = document.getElementById("operando2").textContent;
    let resultado = document.getElementById("resultado").value;
    let resultadoCorrecto = parseInt(operando1) + parseInt(operando2);

    if (resultado == resultadoCorrecto) {
        alert("¡Correcto!");
        document.getElementById("operando1").textContent = generarNumero();
        document.getElementById("operando2").textContent = generarNumero();
        document.getElementById("resultado").value = "";
    } else {
        new Error(alert("¡Incorrecto!"));
    }
}


window.onload = function() {
    document.getElementById("operando1").textContent = generarNumero();
    document.getElementById("operando2").textContent = generarNumero();
    document.getElementById("comprobar").addEventListener("click", comprobarResultado);
}