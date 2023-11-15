
function aniadirImagen(){
    let mostrarImagen = document.getElementById("mostrarImagen");
    let imagenAleatoria = Math.floor(Math.random()*(5-1)+1);
    let ruta = "./imagenes/"+imagenAleatoria;
    console.log(imagenAleatoria);
    let imagen = document.createElement("img");
    imagen.setAttribute("src", ruta+".jpg");
    imagen.setAttribute("alt", "Imagen creada");
    imagen.setAttribute("width", "150");
    imagen.setAttribute("height", "150");

    mostrarImagen.appendChild(imagen);
}

window.onload = function(){
    document.getElementById("aniadirImagen").addEventListener("click", aniadirImagen);
}