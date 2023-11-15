
function pintaCarne(){
    document.body.style.background="blanchedalmond";
}

function pintaAzulClaro(){
    document.body.style.background="rgb(181, 191, 247)";
}

function pintaGris(){
    document.body.style.background="rgb(175, 172, 172)";
}
 
function pintaAmarillo(){
    document.body.style.background="yellow";
}

function pintaVede(){
    document.body.style.background="rgb(123, 241, 129)";
}

function pintaAzul(){
    document.body.style.background="rgb(53, 134, 241)";
}

function pintaNaranja(){
    document.body.style.background="orange";
}

function pintaRosa(){
    document.body.style.background="pink";
}

function pintaRojo(){
    document.body.style.background="red";
}

function limpiarEstilos(){
    document.body.style.background="white";
}

window.onload = function(){
    document.getElementById("rojo").addEventListener("mouseover", pintaRojo);
    document.getElementById("carne").addEventListener("mouseover", pintaCarne);
    document.getElementById("azulClaro").addEventListener("mouseover", pintaAzulClaro);
    document.getElementById("gris").addEventListener("mouseover", pintaGris);
    document.getElementById("amarillo").addEventListener("mouseover", pintaAmarillo);
    document.getElementById("verde").addEventListener("mouseover", pintaVede);
    document.getElementById("azul").addEventListener("mouseover", pintaAzul);
    document.getElementById("naranja").addEventListener("mouseover", pintaNaranja);
    document.getElementById("rosa").addEventListener("mouseover", pintaRosa);
    document.getElementById("container").addEventListener("mouseout", limpiarEstilos);
}