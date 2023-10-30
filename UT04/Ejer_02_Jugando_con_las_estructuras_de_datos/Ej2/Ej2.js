function generarNumeros() {
    let numero = Math.floor(Math.random() * (10 - 1) + 1);
    return numero;
}

function generarSiNo() {
    let siNo = Math.random() > 0.5;
    return siNo;
}

function numeroCasillas() {
    let numCasillas = Math.floor(Math.random() * (3 - 1) + 1);
    return numCasillas;
}

function generarCarton() {
    const numeros = new Array();
    let num;
    for (let i = 0; i < 9; i++) {
        let numCasillas = numeroCasillas();
        do {
            if(generarSiNo()) {
                num = generarNumeros() + (i * 10);
                numeros.push(num);
            }
            numeros.sort;
        } while (c < numCasillas);
    }
}

window.onload = function() {

}