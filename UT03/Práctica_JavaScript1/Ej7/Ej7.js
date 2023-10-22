function triangulo() {
  let tamanio = parseInt(prompt("Dime la base del triángulo"));
  let linea = '';
  let triangulo = document.getElementById("resultado");

  if (tamanio > 0) {
    for (let i = 0; i < tamanio; i++) {
        for (let j = 0; j <= tamanio - i; j++) {
            linea += ' ';
        }
        for (let k = 0; k <= i; k++) {
            linea += '*';
        }
        linea += '\n';
    }
  } else {
    alert("Introduce un numero positivo mayor que 0");
  }
  triangulo.textContent = linea;
}

function cuadrado() {
    let tamanio = parseInt(prompt("Dime la altura del cuadrado"));
    let linea = '';
    let cuadrado = document.getElementById("resultado");

    if (tamanio > 0) {
        for (let i = 0; i < tamanio; i++) {
            for (let j = 0; j < tamanio; j++) {
                linea += '*';
            }
            linea += '\n';
        }
    }
    cuadrado.textContent = linea;
}

function rectangulo() {
    let tamanio = parseInt(prompt("Dime la altura del rectangulo"));
    let linea = '';
    let rectangulo = document.getElementById("resultado");

    if (tamanio > 0) {
        for (let i = 0; i < tamanio; i++) {
            for (let j = 0; j < 2*tamanio; j++) {
                linea += '*';
            }
            linea += '\n';
        }
    }
    rectangulo.textContent = linea;
}
