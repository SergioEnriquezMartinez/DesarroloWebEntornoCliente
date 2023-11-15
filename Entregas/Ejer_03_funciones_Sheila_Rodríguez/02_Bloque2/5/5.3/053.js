const respuesta = prompt("Introduce las respuestas separadas por coma");

function respuestas(separator) {
    respuesta[respuesta];
    let resultado = "";
    for(let i = 1; i < respuesta.length; i++){
        resultado += respuesta[i]+separator;
    }
    return respuesta;
}

respuestas(",", respuesta);

window.onload = function(){
    document.getElementById("respuestas").addEventListener("click", respuestas);
}