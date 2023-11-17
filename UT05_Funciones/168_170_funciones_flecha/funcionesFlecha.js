function funcionFlecha() {
    const triple = x => 3 * x;
    console.log(triple(20));
}

function funcionFlechaMasDeUnParametro() {
    const media = (x, y) => (x + y) / 2;
    console.log(media(10, 20));
}

function funcionFlechaConLlaves() {
    const sumatorio = (n) => {
        let acu = 0;
        for (let i = n; i > 0; i--) {
            acu += i;
        }
        return acu;
    }
}

function funcionFlechaNoDevuelveNada() {
    const saludo = mensaje => {
        console.log(mensaje);
    }
    console.log(saludo("Hola"));
}

function funcionFlechaSinParametros() {
    const hola = () => {
        console.log("Hola");
    }
    console.log(hola);
}

window.onload = function() {
    document.getElementById("funcionFlecha").addEventListener("click", funcionFlecha)
    document.getElementById("funcionFlechaMasDeUnParametro").addEventListener("click", funcionFlechaMasDeUnParametro)
    document.getElementById("funcionFlechaConLlaves").addEventListener("click", funcionFlechaConLlaves)
    document.getElementById("funcionFlechaNoDevuelveNada").addEventListener("click", funcionFlechaNoDevuelveNada)
    document.getElementById("funcionFlechaSinParametros").addEventListener("click", funcionFlechaSinParametros)
}