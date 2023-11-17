function saludoInicial() {
    console.log("Hola");
}

function saludo(mensaje) {
    console.log(mensaje);
}

function notacionDeclarativaParametro() {
    saludo("Hasta la vista");
}

function notacionDeclarativaTriple() {
    function triple(n) {
        return 3*n;
    }
    let x=6, y=4, z="Hola";
    console.log("triple(9) ---> " + triple(9));
    console.log("triple(x) ---> " + triple(x));
    console.log("triple(x + y) ---> " + triple(x + y));
    console.log("triple(x) + triple(y) ---> " + triple(x) + triple(y));
    console.log("triple(triple(9)) ---> " + triple(triple(9)));
    console.log("triple(z) ---> " + triple(z));
}

function comprobarPares(array) {
    let nPares = 0;
    if (array instanceof Array) {
        for (const n of array) {
            if (n % 2 === 0) {
                nPares++;
            }
        }
    }
    return nPares;
}

function llaadaComprobarPares() {
    console.log(comprobarPares([1,2,3,4,5,6,7,8,9]));
}

function llamarTriples() {
    function triple(n) {
        return 3*n;
    }
    let array = [triple(1), triple(2), triple(3)];
    console.log(array);
}

function llamadaParesTriples() {
    function triple(n) {
        return 3*n;
    }
    console.log(comprobarPares([triple(1), triple(2), triple(3)]));
}

window.onload = function() {
    document.getElementById("notacionDeclarativa").addEventListener("click", saludoInicial);
    document.getElementById("notacionDeclarativaParametro").addEventListener("click", notacionDeclarativaParametro);
    document.getElementById("notacionDeclarativaTriple").addEventListener("click", notacionDeclarativaTriple);
    document.getElementById("comprobarPares").addEventListener("click", llaadaComprobarPares);
    document.getElementById("llamarTriples").addEventListener("click", llamarTriples);
    document.getElementById("llamarParesTriples").addEventListener("click", llamadaParesTriples);
}