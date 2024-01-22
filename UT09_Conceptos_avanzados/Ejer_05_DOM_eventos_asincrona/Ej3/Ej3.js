function recogerClassName () {
    let elementosClase = document.getElementsByClassName("elemento");
    let arrayElementosClase = Array.from(elementosClase);

    let listaClase = document.getElementById("listaClase");
    
    arrayElementosClase.forEach(elemento => {
        let fila = document.createElement("li");
        fila.textContent = elemento.textContent + " recogido con getElementsByClassName";
        listaClase.appendChild(fila);
    });

    let boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.addEventListener("click", () => {
        listaClase.removeChild(listaClase.children[0]);
    });

    listaClase.appendChild(boton);
}

function recogerSelector () {
    let elementosSelector = document.querySelectorAll(".elemento");
    let arrayElementosSelector = Array.from(elementosSelector);

    let listaSelector = document.getElementById("listaSelector");

    arrayElementosSelector.forEach(elemento => {
        let fila = document.createElement("li");
        fila.textContent = elemento.textContent + " recogido con querySelectorAll";
        listaSelector.appendChild(fila);
    });
    let boton = document.createElement("button");
    boton.textContent = "Eliminar";

    boton.addEventListener("click", () => {
        listaSelector.removeChild(listaSelector.children[0]);
    });

    listaSelector.appendChild(boton);
}


window.onload = function() {
    recogerClassName();
    recogerSelector();
}