
function direccionRed(){
    let primerNumero ="192";
    primerNumero = (Number(primerNumero).toString(2));
    let segundoNumero = "168";
    segundoNumero = (Number(segundoNumero).toString(2));
    let tercerNumero = "12";
    tercerNumero = (Number(tercerNumero).toString(2));
    let cuartoNumero = "15";
    cuartoNumero = (Number(cuartoNumero).toString(2));
    let resultado = primerNumero+"."+segundoNumero+"."+"0000"+tercerNumero+"."+"00000"+cuartoNumero;
    console.log("IP: " +resultado);

    let primerNumeroMascara = "255";
    primerNumeroMascara = (Number(primerNumeroMascara).toString(2));
    let ultimoNumeroMascara = "0";
    ultimoNumeroMascara = (Number(ultimoNumeroMascara).toString(2));
    let resultadoMascara = primerNumeroMascara+"."+primerNumeroMascara+"."+primerNumeroMascara+"."+"0000000"+ultimoNumeroMascara;
    console.log("Resultado mascara: " + resultadoMascara);

    let direccionRed = new Array();
    for(let i = 0 ; i < 4; i++){
        direccionRed.push(parseInt(resultado[i]&parseInt[resultadoMascara[i]]));
    }
    console.log("direccion de red : " +direccionRed);

}

window.onload = function (){
    document.getElementById("direccionRed").addEventListener("click", direccionRed);
}

