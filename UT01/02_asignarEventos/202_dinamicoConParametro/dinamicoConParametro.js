function asignarEventos() {
    let elementosClaseCaja = document.getElementsByClassName("cuadrado");

    for (let i = 0; i < elementosClaseCaja.length; i++) {
        elementosClaseCaja[i].addEventListener("click", function(i){cambiarColor(i)});
    }
}

function cambiarColor(i) {
    alert("La caja clickada tiene el id --->" + i.target.id);   //con "target" recuperamos los atributos de los elementos, como en java
    document.getElementById(i.target.id).classList.add("cuadradoColorAmarillo");
}

window.onload = function() {
    asignarEventos();
}