function generarOperando(num = Math.floor(Math.random() * 10) + 1) {
  return num;
}

function generarOperador(operador = ["+", "-", "*", "/"]) {
  return operador[Math.floor(Math.random() * operador.length)];
}

function generarOperacion(operando1, operando2, operador) {
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
  let resultadoEsperado = document.getElementById("resultadoEsperado").value;

  if (primerOperando == "") {
    primerOperando = generarOperando();
  } else {
    primerOperando = parseInt(primerOperando);
  }
  if (segundoOperando == "") {
    segundoOperando = generarOperando();
  } else {
    segundoOperando = parseInt(segundoOperando);
  }
  if (operador == "") {
    operador = generarOperador();
  } else {
    operador = operador;
  }
  let resultado = generarOperacion(primerOperando, segundoOperando, operador);
  document.getElementById("resultadoOperacion").textContent = resultado;

  if (resultadoEsperado == "") {
    resultadoEsperado = resultado;
  } else {
    resultadoEsperado = parseInt(resultadoEsperado);
  }

  if (resultado == resultadoEsperado) {
    document.getElementById("resultadoCorrecto").textContent = "Correcto";
  } else {
    document.getElementById("resultadoCorrecto").textContent = "Incorrecto";
  }

  console.log(resultado);
  console.log(resultadoEsperado);
}
window.onload = function () {
  document.getElementById("botonEnviar").addEventListener("click",realizarOperacion);
};
