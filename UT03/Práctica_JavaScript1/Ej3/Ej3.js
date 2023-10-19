function evaluacionBooleanos() {

    let seleccionBooleanos = document.getElementById("booleanos").value;
    let boolSeleccion = null;

    if (seleccionBooleanos == 'true' || seleccionBooleanos == '1' || seleccionBooleanos == 'hola' || seleccionBooleanos == 'infinity') {
        boolSeleccion = true;
    } else {
        boolSeleccion = false;
    }

    let resultado = document.getElementById("resultado");
    resultado.textContent = `La opción ${seleccionBooleanos} es evaluada como ${boolSeleccion}`;
}

/*He necesitado hacer un condicional porque el .value siempre te devuelve un objeto String
cuando recoges datos de <select>*/