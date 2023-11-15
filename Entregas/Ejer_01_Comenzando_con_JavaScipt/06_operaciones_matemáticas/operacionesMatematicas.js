
function operacionesMatematicas(){
    let numero1 =parseInt(prompt("introduce primer numero para calcular"));
    let operador = prompt("Introduce el operador");
    let numero2 = parseInt(prompt("Introduce segundo numero para calcular"));
    /*console.log(numero1);
    console.log(operador);
    console.log(numero2);*/

    if(operador == "+"){
        let resultadoSuma = numero1+numero2;
        console.log("El resultado de : " + numero1 + operador + numero2 + " es "  +resultadoSuma);
    }else if(operador == "-"){
        let resultadoResta = numero1-numero2;
        console.log("El resultado de : " + numero1 + operador + numero2 + " es "  +resultadoResta);
    }else if(operador == "*"){
        let resultadoMultiplicacion = numero1*numero2;
        console.log("El resultado de : " + numero1 + operador + numero2 + " es "  +resultadoMultiplicacion);
    }else if(operador == "%"){
        let resuladoResto = numero1 % numero2;
        console.log("El resultado de : " + numero1 + operador + numero2 + " es "  +resuladoResto);
    }else if(operador == "**"){
        let resultadoExponente = numero1 ** numero2;
        console.log("El resultado de : " + numero1 + operador + numero2 + " es "  +resultadoExponente);
    }

}

window.onload = function(){
    document.getElementById("operacionesMatematicas").addEventListener("click", operacionesMatematicas);
}