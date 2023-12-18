function aniadirHijo() {
    let capa = document.getElementById("principal");
    let nuevoP = document.createElement("p");
    let contenido = document.createTextNode("Soy el nuevo párrafo");

    nuevoP.appendChild(contenido);
    capa.appendChild(nuevoP);
}

function aniadirEnPosicion() {
    let capa = document.getElementById("principal");
    let nuevoP = document.createElement("p");
    let contenido = document.createTextNode("Soy el nuevo párrafo");

    nuevoP.appendChild(contenido);
    
    let pPosterior = document.querySelector("#principal p:nth-of-type(2)")[0];
    capa.insertBefore(nuevoP, pPosterior);
}

function reemplazarElemento() {
    let capa = document.getElementById("principal");
    let nuevoP = document.createElement("p");
    let contenido = document.createTextNode("Soy el párrafo reemplazado");

    nuevoP.appendChild(contenido);
    
    let pPosterior = document.querySelector("#principal p:nth-of-type(2)")[0];
    capa.replaceChild(nuevoP, pPosterior);
}

function eliminarElemento() {
    let capa = document.getElementById("principal");
    let pPosterior = document.querySelector("#principal p:nth-of-type(2)")[0];
    
    capa.removeChild(pPosterior);
    
    capa.appendChild(pPosterior);
}

window.onload = function() {
    document.getElementById("aniadirHijo").addEventListener("click", aniadirHijo);
    document.getElementById("aniadirEnPosicion").addEventListener("click", aniadirEnPosicion);
    document.getElementById("reemplazarElemento").addEventListener("click", reemplazarElemento);
    document.getElementById("eliminarElemento").addEventListener("click", eliminarElemento);
}