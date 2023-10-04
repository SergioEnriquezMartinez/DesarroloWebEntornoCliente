function cargarElDato(){
    let valor = document.getElementById("campoEntrada").value;    //También podemos hacerlo con var en lugar de let
    document.getElementById("cajaCargarDato").textContent = valor;
}

window.onload = function(){
    document.getElementById("botonCargarDatos").addEventListener("click", cargarElDato);
}