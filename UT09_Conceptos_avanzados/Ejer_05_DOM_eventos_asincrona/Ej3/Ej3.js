function recogerClassName () {
    let elementosClase = document.getElementsByClassName("elemento");
    let arrayElementosClase = Array.from(elementosClase);

    let listaClase = document.getElementById("listaClase");
    let botonesClase = document.getElementById("botonesClase");
    
    arrayElementosClase.forEach(elemento => {
        let fila = document.createElement("li");
        fila.textContent = elemento.textContent + " recogido con getElementsByClassName";
        listaClase.appendChild(fila);
    });

    let botonManual = document.createElement("button");
    botonManual.textContent = "Eliminar Manualmente";
    botonManual.addEventListener("click", () => {
        listaClase.removeChild(listaClase.children[0]);
    });

    botonesClase.appendChild(botonManual);

    let intervalId;
    let botonAutomatico = document.createElement("button");
    botonAutomatico.textContent = "Eliminar Automaticamente";

    botonAutomatico.addEventListener("click", () => {
        if (listaClase.children.length > 0) {
            if (!intervalId) {
                intervalId = setInterval(() => {
                    listaClase.removeChild(listaClase.children[0]);

                    if (listaClase.children.length === 0) {
                        clearInterval(intervalId);
                        intervalId = null;
                    }
                }, 1000);
            } else {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
    });

    botonesClase.appendChild(botonAutomatico);
}

function recogerSelector () {
    let elementosSelector = document.querySelectorAll(".elemento");
    let arrayElementosSelector = Array.from(elementosSelector);

    let listaSelector = document.getElementById("listaSelector");
    let botonesSelector = document.getElementById("botonesSelector");


    arrayElementosSelector.forEach(elemento => {
        let fila = document.createElement("li");
        fila.textContent = elemento.textContent + " recogido con querySelectorAll";
        listaSelector.appendChild(fila);
    });
    let botonManual = document.createElement("button");
    botonManual.textContent = "Eliminar Manualmente";

    botonManual.addEventListener("click", () => {
        listaSelector.removeChild(listaSelector.children[0]);
    });

    botonesSelector.appendChild(botonManual);
    
    let intervalId;
    let botonAutomatico = document.createElement("button");
    botonAutomatico.textContent = "Eliminar Automaticamente"

    botonAutomatico.addEventListener("click", () => {
        if (listaSelector.children.length > 0) {
            if (!intervalId) {
                intervalId = setInterval(() => {
                    listaSelector.removeChild(listaSelector.children[0]);

                    if (listaSelector.children.length === 0) {
                        clearInterval(intervalId);
                        intervalId = null;
                    }
                }, 1000);
            } else {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
    });

    botonesSelector.appendChild(botonAutomatico);
}


window.onload = function() {
    recogerClassName();
    recogerSelector();
}