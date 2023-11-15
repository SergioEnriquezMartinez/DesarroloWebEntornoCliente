
function comparar(){
    let primerValor = document.getElementById("primerValor");
    //console.log(primerValor.value);
    primerValor = primerValor.value;

    let operadorRelacional = document.getElementById("operadorRelacional");
    //console.log(operadorRelacional.value);
    operadorRelacional = operadorRelacional.value;

    let segundoValor = document.getElementById("segundoValor");
    //console.log(segundoValor.value);
    segundoValor= segundoValor.value;

    if(primerValor > segundoValor){
        console.log("El " + primerValor + " es " + operadorRelacional + " que el " + segundoValor );
    }else if (primerValor < segundoValor){
        console.log("El " + primerValor + " es " + operadorRelacional + " que el " + segundoValor );
    }else if( primerValor >= segundoValor ){
        console.log("El " + primerValor + " es " + operadorRelacional + " que el " + segundoValor );
    }else if (primerValor <= segundoValor){
        console.log("El " + primerValor + " es " + operadorRelacional + " que el " + segundoValor );
    }else if(primerValor == segundoValor){
        console.log("El " + primerValor + " es " + operadorRelacional + " que el " + segundoValor );
    }else if(primerValor != segundoValor){
        console.log("El " + primerValor + " es " + operadorRelacional + " que el " + segundoValor );
    }

}

window.onload = function (){
    document.getElementById("comparar").addEventListener("click", comparar);
}