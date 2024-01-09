window.onload = function () {
    let boton = document.querySelector("boton");
    let div = document.querySelector("div");
    boton.addEventListener("click", (evento) => {
        document.body.style.backgroundColor = "green";
        evento.stopPropagation();
    });
    div.addEventListener("click", () => {
        document.body.style.backgroundColor = "red";
    });
}