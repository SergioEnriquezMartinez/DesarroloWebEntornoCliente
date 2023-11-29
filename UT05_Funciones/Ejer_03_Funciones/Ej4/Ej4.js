function generarOperando(num = Math.floor(Math.random() * 10) + 1) {
  return num;
}

function generarOperador(operador = ["+", "-", "*", "/"]) {
  return operador[Math.floor(Math.random() * operador.length)];
}

function generarOperacion() {
  let operando1 = generarOperando();
  let operando2 = generarOperando();
  let operador = generarOperador();
  switch (operador) {
    case "+":
      operacion = operando1 + operando2;
      break;
    case "-":
      operacion = operando1 - operando2;
      break;
    case "*":
      operacion = operando1 * operando2;
      break;
    case "/":
      operacion = operando1 / operando2;
      break;
  }
  return operacion;
}

function realizarOperacion() {
  let primerOperando = document.getElementById("primerOperando").value;
  let segundoOperando = document.getElementById("segundoOperando").value;
  let operador = document.getElementById("operador").value;

  let resultado = generarOperacion();
  document.getElementById("resultadoOperacion").textContent = resultado;
}
window.onload = function () {
  document
    .getElementById("formulario")
    .addEventListener("click", () => realizarOperacion);
};
