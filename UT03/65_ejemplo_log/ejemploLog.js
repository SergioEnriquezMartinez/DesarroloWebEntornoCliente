function pinchame(){
    console.log("Has pinchado en log");
}

window.onload = function(){
    console.log("Ejemplo de log");
    document.getElementById("pincha").addEventListener("click", pinchame);
}