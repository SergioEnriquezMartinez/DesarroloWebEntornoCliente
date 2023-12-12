function recuperarHistorial(){
    let tamanio = history.go(-(history.length-1));
    console.log(-(history-1));
}
window.onload = function(){
    document.getElementById("history")?.addEventListener("click", recuperarHistorial);
}