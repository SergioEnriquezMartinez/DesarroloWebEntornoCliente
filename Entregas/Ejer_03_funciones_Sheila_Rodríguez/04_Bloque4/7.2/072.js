
let numero1 = prompt("Introduce un número mayor que 0");
let numero2 = prompt("Introduce otro número");

function programaCuentas(){
    escribir(Number(numero1), Number(numero2), suma);
    escribir(numero1, numero2, resta);
    escribir(numero1, numero2,multiplicación);
    escribir(numero1, numero2, division);
}
function escribir (numero1, numero2 , accion){
    console.log(`El resultado de ${numero1} y ${numero2 } es = ` + accion(numero1, numero2));
}

function suma(numero1, numero2){
    return numero1+numero2;
}

function resta(numero1, numero2){
    return numero1-numero2;
}

function multiplicación(numero1, numero2){
    return numero1* numero2;
}

function division(numero1, numero2){
    return numero1/numero2;
}

window.onload=function(){
    document.getElementById("programaCuentas").addEventListener("click", programaCuentas);
}