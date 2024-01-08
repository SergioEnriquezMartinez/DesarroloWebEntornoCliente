function escribeContenido(evento){
    console.log("Contenido del párrafo: " + evento.target.textContent + "Id del párrafo: " + evento.target.id);
}

window.onload = function(){
    let parrafos = document.querySelectorAll("p");
    for (const parrafo of parrafos) {
        parrafo.addEventListener("click", escribeContenido);
    }
}