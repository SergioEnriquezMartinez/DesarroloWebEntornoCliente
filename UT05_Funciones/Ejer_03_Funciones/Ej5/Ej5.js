// -------------------------------APARTADO 5.1--------------------------------
function calcularMedia() {
    const numerosInput = document.getElementById("numeros").value;
    const numerosArray = numerosInput.split(',').map(numero => parseFloat(numero.trim()));

    if (numerosArray.some(isNaN)) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    const [...restoNumeros] = numerosArray;

    const media = restoNumeros.length > 0 ? restoNumeros.reduce((total, numero) => total + numero, 0) / restoNumeros.length : 0;

    document.getElementById("resultado").textContent = `La media es: ${media.toFixed(2)}`;
}
//esta hecho de dos maneras porque no sabia muy bien si lo querias de una manera o de otra
function calcularMedia2(numeros) {

    const [suma, longitud] = numeros.reduce(
        ({ suma, longitud }, numero) => ({
        suma: suma + numero,
        longitud: longitud + 1,
        }),
        { suma: 0, longitud: 0 }
    );

    const media = suma / longitud;

    return media;
}

/*const ejemplo = [1, 2, 3, 4, 5];
const media = calcularMedia(ejemplo);
  
console.log(`La media es: ${media}`);
*/

// -------------------------------APARTADO 5.2--------------------------------
function mostrarDatos() {
    const respuestas = document.getElementById("respuestas").value.split(' ');

    if (respuestas.length < 2) {
        alert("Debe proporcionar al menos la cilindrada y el peso.");
        return;
    }

    const [cilindrada, peso, numPasajeros, tieneClimatizador, tieneRadar, pilotoAutomatico] = respuestas.map(val => {
        if (val === 'true' || val === 'false') {
            return val === 'true';
        }
        return parseInt(val);
    });

    let datosVehiculo = `Cilindrada: ${cilindrada}, Peso: ${peso}`;

    if (!isNaN(numPasajeros)) {
        datosVehiculo += `, Número de Pasajeros: ${numPasajeros}`;
    }

    if (typeof tieneClimatizador === 'boolean') {
        datosVehiculo += `, Climatizador: ${tieneClimatizador}`;
    }

    if (typeof tieneRadar === 'boolean') {
        datosVehiculo += `, Radar: ${tieneRadar}`;
    }

    if (typeof pilotoAutomatico === 'boolean') {
        datosVehiculo += `, Piloto Automático: ${pilotoAutomatico}`;
    }

    let tipoVehiculo = 'Vehículo desconocido';

    if (respuestas.length === 2) {
        tipoVehiculo = 'Moto';
    } else if (respuestas.length === 3) {
        tipoVehiculo = 'Sidecar';
    } else if (respuestas.length === 4) {
        tipoVehiculo = 'Coche';
    } else if (respuestas.length === 5) {
        tipoVehiculo = 'Barco';
    } else if (respuestas.length === 6) {
        tipoVehiculo = 'Avión';
    }

    document.getElementById("datosVehiculo").textContent = `${tipoVehiculo}: ${datosVehiculo}`;
    console.log(tipoVehiculo + ": " + datosVehiculo);
}



window.onload = function () {
    document.getElementById("calcular").addEventListener("click",calcularMedia);
    document.getElementById("mostrarDatos").addEventListener("click",mostrarDatos);
}