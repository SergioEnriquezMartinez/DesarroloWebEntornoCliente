function borrarTodo() {
    document.getElementById("caja").classList.remove("basis");
}

function basis() {
    borrarTodo();
    document.getElementById("caja").classList.add("basis");
}

window.onload = function () {
    document.getElementById("a").addEventListener("click", basis);
}