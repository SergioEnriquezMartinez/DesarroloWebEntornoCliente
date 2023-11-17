function pasarDiferenteNumeroParametros() {
    function media(x, y) {
        return (x + y) / 2;
    }

    console.log(media(10, 20));
    console.log(media(10, 20, 30));
}

function convertirParametrosFuncionEnArray() {
    function f(x, y, ...mas) {
        console.log(`x = ${x} y = ${y} mas = ${mas}`);
    }
    f(10, 20);
    f(10, 20, 30);
    f(10, 20, 30, 40);
}

function calcularMediaDiferenteNumeroDeValores() {
    function media(...numeros) {
        let acu = 0;
        for (let n of numeros) {
            acu += n;
        }
        return acu / numeros.length;
    }
    console.log(media(10, 20));
    console.log(media(10, 20, 30));
    console.log(media(10, 20, 30, 40));
    console.log(media(10, 20, 30, 40, 50));
}

window.onload = function() {
    document.getElementById("pasarDiferenteNumeroParametros").addEventListener("click", pasarDiferenteNumeroParametros);
    document.getElementById("convertirParametrosFuncionEnArray").addEventListener("click", convertirParametrosFuncionEnArray);
    document.getElementById("calcularMediaDiferenteNumeroDeValores").addEventListener("click", calcularMediaDiferenteNumeroValores);
}