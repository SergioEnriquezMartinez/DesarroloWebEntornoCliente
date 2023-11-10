function comparar() {
    let c1 = prompt("Introduce cadena uno: ");
    let c2 = prompt("Introduce cadena dos: ");

    let resultado = ordenPersonal(c1,c2);
    
    if (resultado == o) {
        alert("Las cadenas son iguales: " + resultado);
    } else if (resultado > 0) {
        alert("La cadena uno es mayor : " + resultado);
    } else if (resultado < 0) {
        alert("La cadena dos es mayor: " + resultado);
    }
}

function ordenPersonal(a,b) {
    return a.length-b.length;
}

window.onload = function() {
    document.getElementById("comparar").addEventListener("click", comparar);
}