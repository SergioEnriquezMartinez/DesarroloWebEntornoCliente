function ajaxFormData() {
    let codigo = document.getElementById("codigo");
    let mensaje = document.getElementById("mensaje");

    let formData = new FormData();
    formData.append("nif", "26747485A");

    fetch("../validarNif.php", {
        method: 'POST',
        cache: 'no-cache',
        body: formData
    }).then(resultado => resultado.json()).then(datos => {
        console.log(datos);
        codigo.textContent = "Codigo: " + datos.error.codigo;
        mensaje.textContent = "Mensaje: " + datos.error.mensaje;
    }).catch(error => {
        document.querySelector("main").textContent = "Error: " + error;
    });
}

window.onload = function() {
    document.getElementById("ajaxFormData").addEventListener("click", ajaxFormData);
}