function borrarTodo() {
    document.getElementById("a").classList.remove("grow");
    document.getElementById("b").classList.remove("grow");
    document.getElementById("c").classList.remove("grow");
}

function aumentarPepito() {
    borrarTodo();
    document.getElementById("a").classList.add("grow");
}

function aumentarJuanito() {
    borrarTodo();
    document.getElementById("b").classList.add("grow");
}

function aumentarPedrito() {
    borrarTodo();
    document.getElementById("c").classList.add("grow");
}

window.onload = function () {
    document.getElementById("a").addEventListener("click", aumentarPepito);
    document.getElementById("b").addEventListener("click", aumentarJuanito);
    document.getElementById("c").addEventListener("click", aumentarPedrito);
}