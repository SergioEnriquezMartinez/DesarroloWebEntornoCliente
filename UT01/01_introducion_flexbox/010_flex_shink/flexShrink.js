function borrarTodo() {
    document.getElementById("a").classList.remove("shrink");
    document.getElementById("b").classList.remove("shrink");
    document.getElementById("c").classList.remove("shrink");
}

function disminuirPepito() {
    borrarTodo();
    document.getElementById("a").classList.add("shrink");
}

function disminuirJuanito() {
    borrarTodo();
    document.getElementById("b").classList.add("shrink");
}

function disminuirPedrito() {
    borrarTodo();
    document.getElementById("c").classList.add("shrink");
}

window.onload = function () {
    document.getElementById("a").addEventListener("click", disminuirPepito);
    document.getElementById("b").addEventListener("click", disminuirJuanito);
    document.getElementById("c").addEventListener("click", disminuirPedrito);
}