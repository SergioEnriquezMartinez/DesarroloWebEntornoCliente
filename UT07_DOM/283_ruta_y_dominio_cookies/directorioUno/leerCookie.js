function leerCookie() {
    console.log(document.cookie);
}

window.onload = function() {
    document.getElementById("leerCookie").addEventListener("click", leerCookie);
}