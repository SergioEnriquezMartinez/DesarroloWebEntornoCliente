function gap() {
    borrarTodo();
    document.getElementById("caja").classList.add("gap");
}

function rowGap() {
    borrarTodo();
    document.getElementById("caja").classList.add("row-gap");
}

function columnGap() {
    borrarTodo();
    document.getElementById("caja").classList.add("column-gap");
}

function borrarTodo() {
    document.getElementById("caja").classList.remove("gap");
    document.getElementById("caja").classList.remove("row-gap");
    document.getElementById("caja").classList.remove("column-gap");
}

window.onload = function() {
    document.getElementById("a").addEventListener("click", gap);
    document.getElementById("b").addEventListener("click", rowGap);
    document.getElementById("c").addEventListener("click", columnGap);
}