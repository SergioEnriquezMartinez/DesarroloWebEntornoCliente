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
    let c = 0;
    for (let i = 0; i < 9; i++) {
        let numCasillas = numeroCasillas();
        do {
            if(generarSiNo()) {
                num = generarNumeros() + (i * 10);
                numeros.sort(); //PROVISIONAL NO SE SI FUNCIONA AQUI
            } else {
                num = 0;
            }
            numeros.push(num);
            c++;
        } while (c < numCasillas);
    }
}

window.onload = function() {

}