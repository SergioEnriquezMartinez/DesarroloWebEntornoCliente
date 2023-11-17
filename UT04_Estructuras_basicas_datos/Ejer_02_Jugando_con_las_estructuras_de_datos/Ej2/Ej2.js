function shuffle(array) {
    return array.sort(function(a, b) {
      return Math.random() - 0.5;
    });
}

function generarColumnas(n) {
    let numeros = [0,1,2,3,4,5,6,7,8,9];
    let columna = [];

    shuffle(numeros);

    for (let i = 0; i < 3; i++){
        columna[i] = numeros[i] + (n * 10);
    }
    columna.sort();
    console.log(columna);
    return columna;
}

function eliminarNumeros(columna, posicionHuecos) {
    for (let i = 0; i < columna.length; i++) {
        columna[posicionHuecos[i]] = 0;
    }
    return columna;
}

function posicionHuecos() {
    let cantidadBorrados = Math.floor(Math.random() * 2) + 1;
    let contador = 0, posiconActual;
    const arrayPosiciones = [];
    
    while (contador < cantidadBorrados) {

        posiconActual = Math.floor(Math.random() * 3);

        if (!arrayPosiciones.includes(posiconActual)) {
            arrayPosiciones.push(posiconActual);
            contador++;
        }
    }
    return arrayPosiciones;
}

function pintarCarton() {
    let listaNumeros = [];
    for (let i = 0; i < 9; i++) {
        listaNumeros = eliminarNumeros(generarColumnas(i), posicionHuecos());
        for (let j = 0; j < 3; j++) {
            if (listaNumeros[j] == 0) {
                document.getElementById(`celda${i}${j}`).textContent = "";
                document.getElementById(`celda${i}${j}`).classList.remove("circulos");
            } else {
                document.getElementById(`celda${i}${j}`).textContent = listaNumeros[j];
            }       
        }
    }
}


window.onload = function() {
    pintarCarton();
}