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
  return matriz;
}

function mostrarArray(matriz) {
  if (matriz) {
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
}

function generarBarcos(tamanio) {
  let barco = new Array(tamanio).fill(null);
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
  return barco;
}

function colisiones(barcos, tamanio) {
  let colision;
  let barcoNuevo;
  do {
    barcoNuevo = posicionarBarcos(generarBarcos(tamanio));
    colision = false;

    for (let i = 0; i < barcos.length; i++) {
      for (let j = 0; j < barcos[i].length; j++) {
        if (barcoNuevo.includes(barcos[i][j]) || barcos[i].includes(barcoNuevo[j])) {
          colision = true;
          break;
        }
      }
    }
  } while (colision);
  return barcoNuevo;
}


function rellenarBarcos(matriz) {
  let barco5 = posicionarBarcos(generarBarcos(5));
  let barco4 = colisiones([barco5], 4);
  let barco3 = colisiones([barco5, barco4], 3);

  let cont5 = 0, cont4 = 0, cont3 = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] == barco5[cont5]) {
        matriz[i][j] = "Barco5";
        if (cont5 < 4) cont5++;
      } else if (matriz[i][j] == barco4[cont4]) {
        matriz[i][j] = "Barco4";
        if (cont4 < 3) cont4++;
      } else if (matriz[i][j] == barco3[cont3]) {
        matriz[i][j] = "Barco3";
        if (cont3 < 2) cont3++;
      }
    }
  }
  pintarBarcos(matriz);
  return matriz;
}

function pintarBarcos(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      let div = document.getElementById(`${i}${j}`);
      console.log(`${i}${j}`);
      if (matriz[i][j] == "Barco5") {
        div.addEventListener("click", () => ponerBarco5(`${i}${j}`));
      } else if (matriz[i][j] == "Barco4") {
        div.addEventListener("click", () => ponerBarco4(`${i}${j}`));
      } else if (matriz[i][j] == "Barco3") {
        div.addEventListener("click", () => ponerBarco3(`${i}${j}`));
      } else {
        div.addEventListener("click", () => ponerAgua(`${i}${j}`));
      }
    }
  }
}

function ponerBarco5(idDiv) {
  document.getElementById(idDiv).classList.add("barquito5");
}

function ponerBarco4(idDiv) {
  document.getElementById(idDiv).classList.add("barquito4");
}

function ponerBarco3(idDiv) {
  document.getElementById(idDiv).classList.add("barquito3");
}

function ponerAgua(idDiv) {
  document.getElementById(idDiv).classList.add("aguitaDelDemonio");
}

window.onload = function () {
  document.getElementById("construirArray").addEventListener("click", construirArray);
  document.getElementById("mostrarArray").addEventListener("click", function() {mostrarArray(construirArray());});
  document.getElementById("rellenarBarcos").addEventListener("click", function() {rellenarBarcos(construirArray());});  
};
