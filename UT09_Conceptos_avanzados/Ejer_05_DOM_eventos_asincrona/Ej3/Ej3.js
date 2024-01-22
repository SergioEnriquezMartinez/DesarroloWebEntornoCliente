function recogerClassName () {
    let elementosClase = document.getElementsByClassName("elemento");
    
    elementosClase.forEach(elemento => {
        let fila = document.createElement("li");
        fila.textContent = elemento.textContent;
        document.getElementById("listaClase").appendChild(fila);
    });
    
}


window.onload = function() {
    recogerClassName();
}