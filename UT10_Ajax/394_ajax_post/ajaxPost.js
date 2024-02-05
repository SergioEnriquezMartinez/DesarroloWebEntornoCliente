function ajaxPost() {
    let codigo = document.getElementById("codigo").value;
    let mensaje = document.getElementById("mensaje").value;

    fetch("../validarNif.php", {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'nif=67197757Z&tipo=dni'
    }).then((resultado) => resultado.json()).then((datos) => {
        console.log(datos);
        codigo.textContent = "Codigo: " + datos.error.codigo;
        mensaje.textContent = "Mensaje: " + datos.error.mensaje;
    }).catch(error => {
        document.querySelector("main").textContent = "Error: " + error;
    });
}

window.onload = function() {
    document.getElementById("ajaxPost").addEventListener("click", ajaxPost);
}