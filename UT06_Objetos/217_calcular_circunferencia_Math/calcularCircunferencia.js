class Circulo {
    constructor(radio) {
        this.radio = radio;
        this.calculaCircunferencia = () => 2 * Math.PI * this.radio;
    }
}

function calculaCircunferencia() {
    let valor = prompt("Introduce el radio del círculo");
    let resultado = new Circulo(valor);
    console.log(resultado.calculaCircunferencia());
}

window.onload = function() {
    document.getElementById("calcularCircunferencia").addEventListener("click", calculaCircunferencia);
}