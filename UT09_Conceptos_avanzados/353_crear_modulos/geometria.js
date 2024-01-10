const PI_CUADRADO = Math.PI*Math.PI;

function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

function areaCuadrado(lado) {
    return lado * lado; //también podemos poner lado ** 2
}

export {
    areaCirculo,
    areaCuadrado,
    PI_CUADRADO
}