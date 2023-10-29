function calcular() {
    let cadena = document.getElementById("cadena").value;
    let resultado = eval(cadena);

    let rs = document.getElementById("resultado");
    rs.textContent = resultado;

}

window.onload = function() {
    document.getElementById("boton").addEventListener("click", calcular);
}