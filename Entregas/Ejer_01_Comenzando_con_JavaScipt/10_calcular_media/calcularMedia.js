function calcularMedia() {
    let suma = 0;
    let media = 0;
    let contador = 0;
    let entrada = null;
    do {
        entrada = prompt("Introduce un número, pulse ñ para calcular la media: ");
        calcularMedia();
    } while (entrada !== "ñ");
        alert("La media de los números introducidos son: " + media);

    function calcularMedia() {
        let numero = parseFloat(entrada);
        if(isNaN(numero)) {
            alert("Introduce valores númericos");
        }
        if (!isNaN(numero)) {
            contador++;
            suma = suma + numero;
            media = suma / contador;
        }
        
    }
}

window.onload = function () {
  document.getElementById("calcularMedia").addEventListener("click", calcularMedia);
};
