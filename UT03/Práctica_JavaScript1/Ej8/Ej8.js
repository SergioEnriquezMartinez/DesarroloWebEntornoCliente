function cadena(event) {
    event.preventDefault();
    let cadena = document.getElementById("cadena").value;
    let reemplazado = document.getElementById("reemplazado").value;
    let reemplazo = document.getElementById("reemplazo").value;

    let reemplazar = cadena.replaceAll(reemplazado, reemplazo);

    let rs = document.getElementById("resultado");
    rs.textContent = reemplazar;
}

window.onload = function() {
    document.getElementById("formulario").addEventListener("submit",cadena);
}

//Tuve que usar (event.preventDefault) para evitar la recarga de la página al enviar el formulario
//ya que es el comportamiento base del formulario. Si que actuaba correctamente la función
//pero no mostraba el resultado mas de 1s por la recarga del formulario