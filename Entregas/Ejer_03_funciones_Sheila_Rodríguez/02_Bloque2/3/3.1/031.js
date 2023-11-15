let numero = 4;
function variable(){
    console.log("Variable normal " + numero);
    console.log("------------------------------");
    if(numero == 4){
        numero = 50;
        console.log("Variable dentro de un bucle " + numero);
    }
}


function variableFuncion(numero){
    console.log("------------------------------");
    numero =5;
    console.log("Variable dentro de una función  " + numero);
}

window.onload = function(){
    document.getElementById("variable").addEventListener("click", variable);
    document.getElementById("variableFuncion").addEventListener("click", variableFuncion);
}