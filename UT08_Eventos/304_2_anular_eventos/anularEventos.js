function anularEvento() {
    alert("Me has hecho click");
    let p = document.getElementById("anularEvento");
    p.removeEventListener("click", anularEvento);
}

window.onload = function() {
    document.getElementById("anularEvento").addEventListener("click", anularEvento);
}