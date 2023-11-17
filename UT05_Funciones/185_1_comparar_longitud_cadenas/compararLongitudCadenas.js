
function comparar(){
    let cadenaUno = prompt("Introduce cadena uno: ");
    let cadenaDos = prompt("Introduce cadena dos: ");
    let resultado = ordenPersonal(cadenaUno, cadenaDos);
    if (resultado==0){
        alert("Las cadenas son iguales: " + resultado);
    } else if (resultado >0){
        alert("La cadenaUno es más larga: " + resultado);
    } else{
        alert("La cadenaDos es más larga: " + resultado);
    }
}
function ordenPersonal(a,b){
    return a.length-b.length;
}
window.onload = function(){
    document.getElementById("comparar").addEventListener("click", comparar);
}