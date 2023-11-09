function construirArray() {
  const matriz = [];
  for (let i = 0; i < 10; i++) {
    matriz[i] = new Array(10);
  }

  for (let j = 0; j < matriz.length; j++) {
    for (let k = 0; k < matriz[j].length; k++) {
      matriz[j][k] = `${j}-${k}`;
    }
  }
  console.log(matriz);
  return matriz;
}

function mostrarArray(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    const columna = document.createElement("div");
    columna.id = i;

    for (let j = 0; j < matriz[i].length; j++) {
      const celda = document.createElement("div");
      celda.id = `${i}${j}`;
      celda.classList.add("bordeCelda");
      columna.appendChild(celda);
    }
    document.getElementById("tablero").appendChild(columna);
  }
}

function generarBarcos(tamanio) {
  let barco = new Array(tamanio);
  return barco;
}

function posicionarBarcos(barco) {
  let direccion = Math.random() > 0.5; //Si es true lo ponemos en vertical, sino horizontal
  let posicionI, posicionJ;

  if (direccion) {
    posicionI = Math.floor(Math.random() * 10);
    posicionJ = Math.floor(Math.random() * (10 - barco.length));
    for (let i = 0; i < barco.length; i++) {
      barco[i] = `${posicionI}-${posicionJ + i}`;
    }
  } else {
    posicionJ = Math.floor(Math.random() * 10);
    posicionI = Math.floor(Math.random() * (10 - barco.length));
    for (let i = 0; i < barco.length; i++) {
      barco[i] = `${posicionI + i}-${posicionJ}`;
    }
  }
  console.log(barco);
}

function colisiones(barcos, tamanio) {
    let colision;
    do {
      let barcoNuevo = generarBarcos(tamanio);
      colision = false;
      for (let i = 0; i < barcos.length; i++) {
        for (let j = 0; j < barcos[i].length; j++) {
          colision = barcoNuevo.includes(barcos[i][j]);
          if (colision) break;
        }
      }
    } while (colision);
    return barcoNuevo;
  }

  function rellenarBarcos() {
    let barco5 = generarBarcos(5);
    let barco4 = colisiones([barco5], 4);
    let barco3 = colisiones([barco5, barco4], 3);
    console.log(barco5);
    console.log(barco4);
    console.log(barco3);
  }

window.onload = function () {
    rellenarBarcos();
  document
    .getElementById("construirArray")
    .addEventListener("click", construirArray);
  document
    .getElementById("mostrarArray")
    .addEventListener("click", mostrarArray(construirArray()));
  document
    .getElementById("rellenarBarcos")
    .addEventListener("click", rellenarBarcos);
};
