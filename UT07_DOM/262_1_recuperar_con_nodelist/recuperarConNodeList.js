window.onload = function() {
    let principal = document.getElementById("principal");
    let listaParrafos = principal.getElementsByTagName("p");

    let listaArray = [...listaParrafos];
    listaArray.forEach(element => console.log(element.textContent));
}