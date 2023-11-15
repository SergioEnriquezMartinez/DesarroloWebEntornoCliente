function imagenAleatoria(){
    let mostrarImagen = document.getElementById("mostrarImagen");
    let imagenAleatoria = Math.floor(Math.random()*(5-1)+1);
    fetch("./recursos/"+imagenAleatoria+".png")
    .then(response=>{
       if(response.ok){
            return response.blob();
       }else{
        throw new Error("Los datos no han llegado");
       }
    })
    .then(blob =>{
        const imagen = document.createElement("img");
        imagen.setAttribute("src", URL.createObjectURL(blob));
        imagen.setAttribute("alt", "Imagen creada");
        imagen.setAttribute("id", "imagenAleatoria");
        imagen.setAttribute("width", "150");
        imagen.setAttribute("height", "150");
        mostrarImagen.textContent="";
        mostrarImagen.appendChild(imagen);

        
    })
    .catch(error=>{
        mostrarImagen.textContent =error;
    });
}




window.onload = function(){
    document.addEventListener('keydown', (event) => {
        var keyValue = event.key;
        if(keyValue == "ArrowUp"){
            imagenAleatoria(event.code);

        }else if(keyValue=="ArrowDown"){

        }else if(keyValue =="ArrowRight"){

        }else if(keyValue ==" ArrowLeft"){

        }
      }, false);
}