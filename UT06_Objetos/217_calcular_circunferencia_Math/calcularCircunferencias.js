class Circulo {
  constructor(r) {
    this.radio = r;
    this.calcularCircunferencia = () => 2 * Math.PI * this.radio;
  }
}
function calcularCircunferencia() {
  let valor = prompt("Introduce un valor: ");
  let resultado = new Circulo(valor);
  console.log(resultado.calcularCircunferencia());
}
window.onload = function () {
  document
    .getElementById("calcularCircunferencia")
    .addEventListener("click", calcularCircunferencia);
};
