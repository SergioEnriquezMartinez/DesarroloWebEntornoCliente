function comparacion() {
    let primerOperador = document.getElementById("primerOperador");
    let primerOperadorSeleccionado = primerOperador.options[primerOperador.selectedIndex].textContent;
    let primerOperadorNumero=parseInt(primerOperador);
    
    let comparador = document.getElementById("comparador");
    let comparadorSeleccionado = comparador.options[comparador.selectedIndex].textContent;
    
    let segundoOperador = document.getElementById("segundoOperador");
    let segundoOperadorSeleccionado = segundoOperador.options[segundoOperador.selectedIndex].textContent;
    let segundoOperadorNumero=parseInt(segundoOperador);

    let resultado = null;

    switch (comparadorSeleccionado) {
        case '>':
            resultado = primerOperadorNumero > segundoOperadorNumero;
            break;
        case '<':
            resultado = primerOperadorNumero < segundoOperadorNumero;
            break;
        case '>=':
            resultado = primerOperadorNumero >= segundoOperadorNumero;
            break;
        case '<=':
            resultado = primerOperadorNumero <= segundoOperadorNumero;
            break;        
        case '==':
            resultado = primerOperadorNumero == segundoOperadorNumero;
            break;
        case '!=':
            resultado = primerOperadorNumero != segundoOperadorNumero;
            break;
        case '===':
            resultado = primerOperadorNumero === segundoOperadorNumero;
            break;
    }
    
    let rs = document.getElementById("resultado");
    rs.textContent = `El resultado de la comparacion es: ${resultado}`;

}