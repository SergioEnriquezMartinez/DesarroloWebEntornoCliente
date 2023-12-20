function cambiarPath() {
    console.log(document.cookie);
    document.cookie = "usuarioPathRaiz=SergioPathRaiz; path=/ ; sameSite=strict";
    console.log(document.cookie);
    document.cookie = "ciudad=Avila; sameSite=strict";
    console.log(document.cookie);
}

function cambiarDominio() {
    //Deprecated
    console.log("Deprecated");
}

function borrarCookie() {
    document.cookie = "usuario=Jorge; SameSite=strict";
    console.log(document.cookie);
    document.cookie = "usuario=Jorge; SameSite=strict; expires=01 Jan 2000 00:00:01 GMT";
    console.log("Después de borrar ----> " + document.cookie);
}

window.onload = function() {
    document.getElementById("cambiarPath").addEventListener("click", cambiarPath);
    document.getElementById("cambiarDominio").addEventListener("click", cambiarDominio);
    document.getElementById("borrarCookie").addEventListener("click", borrarCookie);
}