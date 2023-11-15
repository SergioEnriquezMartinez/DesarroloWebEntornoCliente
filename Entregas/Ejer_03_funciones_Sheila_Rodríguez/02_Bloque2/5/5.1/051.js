
function calcularMedia(){
    let x = Number(prompt("Introduce un número"));
    let y = Number(prompt("Introduce otro número"));
    let arrayMedia = [x,y] = [(x+y)/2];
    console.log("la media es --> " + arrayMedia);
}

window.onload = function(){
    document.getElementById("calcularMedia").addEventListener("click", calcularMedia);
}