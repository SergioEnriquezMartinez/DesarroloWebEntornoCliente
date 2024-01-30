function ajaxJson() {
    let capaNIF = document.getElementById("nif");

    fetch("./nif.json").then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error en la respuesta del servidor");
        }
    }).then(listaNIFs => {
        capaNIF.textContent = listaNIFs[0]["numero"];
    }).catch(error => {
        capaNIF.textContent = error.message;
    });
}

window.onload = function() {
    document.getElementById("ajaxJson").addEventListener("click", ajaxJson);
}