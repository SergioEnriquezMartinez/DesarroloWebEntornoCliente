let matrizNumeros = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84, 85, 86, 87, 88, 89]
];

function escogerNumeros(matrizNumeros) {
    let contador = 0;
    let num = [3][8];
    do {
        for (let i = 0; i < matrizNumeros.length; i++) {
            for (let j = 0; j < matrizNumeros[i].length; j++) {
                let r = Math.floor(Math.random() * (3 - 1 + 1) + 1);
                num.push(matrizNumeros[i][r]);
            }
        }
    } while (contador < 4);
    num.sort();
    return num;
}

function borrarNumeros(num) {
    let rHuecos = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    let contador = 0;
    do {
        for (let i = 0; i < num.length; i++) {
            
        }
    } while (contador < rHuecos);
    return num;
}

function pintar() {
    
}

window.onload = function() {
    pintar();
}