function borrarTodo() {
    document.getElementById("caja").classList.remove("ordenar");
}

function ordenar() {
    borrarTodo();
    document.getElementById("caja").classList.add("ordenar");
}

window.onload = function () {
    document.getElementById("a").addEventListener("click", ordenar);
}