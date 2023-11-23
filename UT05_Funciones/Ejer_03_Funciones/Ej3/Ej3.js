/*---------------------APARTADO 3.1-----------------------------*/ 
let x = "Esto es una variable global";

function funcionVariable() {
    let x = "Esto es una variable dentro de una funcion";
    document.getElementById("rFuncion").textContent = x;
}

function variableBucle() {
    for (let i = 0; i < 5; i++) {
        let x = "Esto es una variable dentro de un bucle";
        document.getElementById("rBucle").textContent += x + " " + i + "\n";
    }
}

/*---------------------APARTADO 3.2-----------------------------*/
function crearArray() {
    let array = new Array(10);
    return array;
}

function rellenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    return array;
}

function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        let aux = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > aux) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = aux;
    }
    return array;
}

function desordenarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));

        const aux = array[i];
        array[i] = array[r];
        array[r] = aux;
    }
    return array;
}

function llamarFunciones() {
    let creado = crearArray();
    let rellenado = rellenarArray(creado);
    document.getElementById("aleatorio").textContent = rellenado;
    let ordenado = ordenarArray(rellenado);
    document.getElementById("ordenado").textContent = ordenado;
    let desordenado = desordenarArray(ordenado);
    document.getElementById("desordenado").textContent = desordenado;
}

window.onload = function() {
    document.getElementById("vGlobal").addEventListener("click",() => {document.getElementById("rGlobal").textContent = x});
    document.getElementById("vFuncion").addEventListener("click",funcionVariable);
    document.getElementById("vBucle").addEventListener("click",variableBucle);
    document.getElementById("generarArray").addEventListener("click",llamarFunciones);
}