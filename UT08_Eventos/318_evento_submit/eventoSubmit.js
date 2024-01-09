window.onload = function() {
    let formulario = document.forms[0];
    let tUsuario = document.getElementById("usuario");
    let cMensaje = document.getElementById("mensaje");

    formulario.addEventListener("submit", (ev) => {
        let exp = /^[a-zA-Z]{6,}$/;
        if (!exp.test(tUsuario.value)) {
            ev.preventDefault();
            cMensaje.textContent = "ERROR: nombre de usuario no válido";
        }
    });
}