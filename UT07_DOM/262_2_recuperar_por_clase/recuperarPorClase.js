function cargarPorClase() {
    let verduras = document.getElementsByClassName("verdura");
    let listadoVerduras = [...verduras];
    listadoVerduras.forEach(verdura => {console.log(verdura.textContent)});
}

window.onload = function() {
    document.getElementById("cargarClases").addEventListener("click", cargarPorClase);
}