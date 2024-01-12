window.onload = function () {
    document.getElementById("diana").addEventListener("click", function (evento) {
        let imagen = new Image();
        imagen.src = "img/azul.png";
        let x = evento.clientX;
        let y = evento.clientY;

        imagen.style.width = "10%";
        imagen.style.height = "10%";

        imagen.style.position = "absolute";
        imagen.style.left = x + "px";
        imagen.style.top = y + "px";
        
        document.body.appendChild(imagen);
    }); 

}