function recortar(event) {
    event.preventDefault();

    let cadena = document.getElementById("nomAp").value;
    let cadenaRecortada = cadena.split(" ");
    let resultado = '';
    
    for (let i = 0; i < cadenaRecortada.length; i++) {
        if (i == 0) {
            resultado += cadenaRecortada[i].charAt(0).toUpperCase() + cadenaRecortada[i].slice(1).toLowerCase();
        } else {
            resultado += " " + cadenaRecortada[i].charAt(0).toUpperCase() + cadenaRecortada[i].slice(1).toLowerCase();
        }
    }
    let rs = document.getElementById("resultado");
    rs.textContent = resultado;
}

window.onload = function () {
    document.getElementById("formulario").addEventListener("submit",recortar);
}