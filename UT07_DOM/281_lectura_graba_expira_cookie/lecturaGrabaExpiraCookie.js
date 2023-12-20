function crearCookie() {
    document.cookie = "usuario=Jorge; SameSite=Strict";
    console.log(document.cookie);
    document.cookie = "usuario=Ana; SameSite=Strict";
    console.log(document.cookie);
    document.cookie = "usuario=Sergio; SameSite=Strict";
    console.log(document.cookie);
}

function recuperarCookie() {
    let arrayCookies = document.cookie.split("; ");
    for (let cookie of arrayCookies) {
        let [nombre, valor] = cookie.split("=");
        console.log(`Nombre: ${nombre}, valor: ${valor}`);
    }
}

function expiracionCookie() {
    let hoy = new Date();
    let caducidadMs = hoy.getTime() + 7 * 24 * 60 * 60 * 1000;
    let caducidad = new Date(caducidadMs);
    console.log("----------------> " + caducidad);
    document.cookie = `usuario=Sergio; SameSite=Strict; expires=${caducidad.toUTCString()}`;
    console.log(document.cookie);    
}

window.onload = function() {
    document.getElementById("crearCookie").addEventListener("click", crearCookie);
    document.getElementById("recuperarCookie").addEventListener("click", recuperarCookie);
    document.getElementById("expiracionCookie").addEventListener("click", expiracionCookie);
}