let contadorClicks = 0;
let puntuacionJ1 = 0;
let puntuacionJ2 = 0;
function posicionarDardo(color, x, y) {
    let imagen = new Image();
    imagen.src = "img/" + color + ".png";

    imagen.style.height = "10%";
    imagen.style.position = "absolute";
    imagen.style.left = x + "px";
    imagen.style.top = y + "px";
    imagen.classList.add("dardo");

    document.body.appendChild(imagen);
}

function obtenerPuntuacion(circulo) {
    
    if (circulo.classList.contains("rojo")) return 200;
    else if (circulo.classList.contains("verde")) return 100;
    else if (circulo.classList.contains("blanco")) return 50;
}

function obtenerGanador(J1, J2) {
    if (J1 > J2) return "Gana el jugador 1";
    else if (J1 < J2) return "Gana el jugador 2";
    else return "Ha habido un empate";

}

window.onload = function () {
    document.getElementById("circulo1").addEventListener("click", (evento) => {
        if (contadorClicks < 6) {
            let color = contadorClicks < 3 ? "azul" : "amarillo";

            if (contadorClicks < 3) {
                puntuacionJ1 += obtenerPuntuacion(evento.target);
                document.getElementById("puntosJ1").textContent = puntuacionJ1;
            } else {
                puntuacionJ2 += obtenerPuntuacion(evento.target);
                document.getElementById("puntosJ2").textContent = puntuacionJ2;
            }

            posicionarDardo(color, evento.clientX, evento.clientY);
            obtenerPuntuacion(evento.target);
            contadorClicks++;
        } 
        if (contadorClicks == 6) document.getElementById("resultado").textContent = obtenerGanador(puntuacionJ1, puntuacionJ2);
    });
}