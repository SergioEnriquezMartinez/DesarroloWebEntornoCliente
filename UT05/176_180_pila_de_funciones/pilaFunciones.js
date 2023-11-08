function laPilaDeFunciones() {
    function f1() {
        console.log("Inicio f1");
        f2();
        console.log("Fin de f1");
    }
    function f2() {
        console.log("Inicio f2");
        f3();
        console.log("Fin f2");
    }
    function f3() {
        console.log("En f3");
    }
    f1();
}

function desbordamientoDeLaPila() {
    function saludo() {
        console.log("Saludo");
        despedida();
    }
    function despedida() {
        console.log("Despedida");
        saludo();
    }
    saludo();
}

window.onload = function() {
    document.getElementById("laPilaDeFunciones").addEventListener("click", laPilaDeFunciones);
    document.getElementById("desbordamientoDeLaPila").addEventListener("click", desbordamientoPila);
}