window.onload = function() {
    document.getElementById("agregarImg").addEventListener("click", () => {
        let aleatorio = Math.floor(Math.random() * 5) + 1;
        
        let img = document.createElement("img");
        let direccion = "img/" + aleatorio + ".jpg";
        img.setAttribute("src", direccion);
        img.setAttribute("width", "600");
        img.setAttribute("alt", "Imagen " + aleatorio);

        let firstChild = document.getElementById("contenedor").firstChild;
        document.getElementById("contenedor").insertBefore(img, firstChild);
    });
}