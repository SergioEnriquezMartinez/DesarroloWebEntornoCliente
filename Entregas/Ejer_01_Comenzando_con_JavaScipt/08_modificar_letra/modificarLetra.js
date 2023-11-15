
function modificarLetraPorOtra(){
    let cadena = prompt("Introduce una cadena para sustituir");
    let primerCaracter = prompt("Introduce un caracter que se encuentre en la cadena");
    let segundoCaracter = prompt("Introduce otro caracter para sustituir en la cadena");
    let resultado1 = cadena.replaceAll(primerCaracter, segundoCaracter);
    alert(resultado1);
}

window.onload = function (){
    document.getElementById("modificarLetra").addEventListener("click", modificarLetraPorOtra);
}