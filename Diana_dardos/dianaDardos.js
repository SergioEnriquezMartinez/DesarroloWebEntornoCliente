let contadorClicks = 0;

function posicionarDardo(color, x, y) {
    let imagen = new Image();
    imagen.src = "img/" + color + ".png";

    imagen.style.height = "10%";
    imagen.style.position = "absolute";
    imagen.style.left = x + "px";
    imagen.style.top = y + "px";

    document.body.appendChild(imagen);
}

window.onload = function () {
    document.getElementById("circulo1").addEventListener("click", (evento) => {
        if (contadorClicks < 6) {
            let color = contadorClicks % 2 === 0 ? "azul" : "amarillo";
            
            posicionarDardo(color, evento.clientX, evento.clientY);
            
            contadorClicks++;
        }
    });
}