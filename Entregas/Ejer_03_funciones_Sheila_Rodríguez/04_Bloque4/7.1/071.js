
function opcion(){
    let mensaje = prompt("Introduce el mensaje a mostrar");
    let opcion = prompt("Introduce como quieres mostrarlo");
    switch (opcion) {
        case "console.error":
            escribe(mensaje, console.error);
            break;
        case "console.log":
            escribe(mensaje, console.log);
            break;
        case "alert":
            escribe(mensaje, alert);
            break;
        case "prompt":
            escribe(mensaje, prompt);
            break;
        case "confirm":
            escribe(mensaje, confirm);
            break;
        default:
            alert("opción no válida");
            break;
    }
}

function escribe(mensaje, funcion){
   funcion(mensaje);
}

window.onload= function(){
    document.getElementById("mensaje").addEventListener("click",opcion);
}