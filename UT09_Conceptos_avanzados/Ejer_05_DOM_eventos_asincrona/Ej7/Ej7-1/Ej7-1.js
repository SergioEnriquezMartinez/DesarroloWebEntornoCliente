function generarNumero () {
    let numero = Math.floor(Math.random() * 10000) + 1;
    return numero;
}

function comprobarResultado() {
    try {
        let operando1 = document.getElementById("operando1").textContent;
        let operando2 = document.getElementById("operando2").textContent;
        let resultado = document.getElementById("resultado").value;


        if (isNaN(resultado) || resultado === "") {
            throw new Error("Introduce un número");
        }

        let resultadoCorrecto = parseInt(operando1) + parseInt(operando2);

        if (parseInt(resultado) === resultadoCorrecto) {
            alert("¡Correcto!");
        } else {
            throw new Error("¡Incorrecto! El resultado correcto es " + resultadoCorrecto + ".");
        }
    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        document.getElementById("operando1").textContent = generarNumero();
        document.getElementById("operando2").textContent = generarNumero();
        document.getElementById("resultado").value = "";
    }
}

window.onload = function() {
    document.getElementById("operando1").textContent = generarNumero();
    document.getElementById("operando2").textContent = generarNumero();
    document.getElementById("comprobar").addEventListener("click", comprobarResultado);
}