function comparacion() {
    let primerOperador = document.getElementById("primerOperador");
    let primerOperadorSeleccionado = parseInt(primerOperador.options[primerOperador.selectedIndex].textContent);
    
    let comparador = document.getElementById("comparador");
    let comparadorSeleccionado = comparador.options[comparador.selectedIndex].textContent;
    
    let segundoOperador = document.getElementById("segundoOperador");
    let segundoOperadorSeleccionado = parseInt(segundoOperador.options[segundoOperador.selectedIndex].textContent);

    let resultado = null;

    switch (comparadorSeleccionado) {
        case '>':
            resultado = (primerOperadorSeleccionado > segundoOperadorSeleccionado);
            break;
        case '<':
            resultado = (primerOperadorSeleccionado < segundoOperadorSeleccionado);
            break;
        case '>=':
            resultado = (primerOperadorSeleccionado >= segundoOperadorSeleccionado);
            break;
        case '<=':
            resultado = (primerOperadorSeleccionado <= segundoOperadorSeleccionado);
            break;        
        case '==':
            resultado = (primerOperadorSeleccionado == segundoOperadorSeleccionado);
            break;
        case '!=':
            resultado = (primerOperadorSeleccionado != segundoOperadorSeleccionado);
            break;
        case '===':
            resultado = (primerOperadorSeleccionado === segundoOperadorSeleccionado);
            break;
    }
    
    let rs = document.getElementById("resultado");
    rs.textContent = `El resultado de la comparacion es: ${resultado}`;

}

window.onload = function() {
    document.getElementById("enviar").addEventListener("click",comparacion);
}