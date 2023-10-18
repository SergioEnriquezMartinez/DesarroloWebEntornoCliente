
function crearArrayHeterogeneo() {
    const a = [3, 4, "Hola", true, Math.random()];
    const b = [2, 4, "Hola", [99, 55, 33]];
    console.log(a);
    console.log(b);
}

window.onload = function () {
    document.getElementById("crearArrayHeterogeneo").addEventListener("click", crearArrayHeterogeneo);
}