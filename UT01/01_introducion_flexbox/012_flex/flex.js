function borrarTodo() {
    document.getElementById("a").classList.remove("flex");
}

function flex() {
    borrarTodo();
    document.getElementById("a").classList.add("flex");
}

window.onload = function () {
    document.getElementById("a").addEventListener("click", flex);
}