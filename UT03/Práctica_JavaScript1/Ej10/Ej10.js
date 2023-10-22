let suma = 0, contador = 0;
function recogerNumeros() {
    let cadena = document.getElementById("num").value;

    if (cadena.toLowerCase() !== 'n') {
        let num = parseInt(cadena);
        if (!isNaN(num)) {
            suma += num;
            contador++; 
        } else {
            alert("Introduce un valor válido")
        }
    } else {
        let media = suma / contador;
        document.getElementById("resultado").textContent = `La media de los valores introducidos es ${media}`;
    }
}

window.onload = function() {
    document.getElementById("boton").addEventListener("click",recogerNumeros);
}