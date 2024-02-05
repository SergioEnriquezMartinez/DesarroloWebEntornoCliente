function ajaxGet() {
    let lista = document.querySelector("ul");

    fetch("../nifAleatorio.php?n=10&tipo=nie", {
        method: 'GET',
        mode: 'cors'
    }).then(respuesta => respuesta.json())
    .then(datos => {
        for (let nie of datos) {
            let li = document.createElement("li");
            li.textContent = nie.numero;
            lista.appendChild(li);
        }
    }).catch(error => {
        document.querySelector("main").textContent = error;
    });
}

window.onload = function() {
    document.getElementById("ajaxGet").addEventListener("click", ajaxGet);
}