function ajaxBinario() {
    let main = document.querySelector("main");

    fetch("./pajaroAzul.jpg").then(respuesta => {
        if (respuesta.ok) {
            return respuesta.blob();
        } else {
            throw new Error("Error en la respuesta AJAX");
        }
    }).then(blob => {
        console.log(blob.type);
        let img = document.createElement("img");
        img.setAttribute("src", URL.createObjectURL(blob));
        main.appendChild(img);
    }).catch(error => {
        main.textContent = error.message;
    });
}

window.onload = function() {
    document.getElementById("ajaxBinario").addEventListener("click", ajaxBinario);
}