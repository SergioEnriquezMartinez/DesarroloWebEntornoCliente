function modificarAtributo() {
    let primerLi = document.querySelectorAll("li:first_of_type");
    primerLi[0].setAttribute("class", "fondo"); //SetAtribute nos elimina el resto de clases que tenga el elemento
    // Si queremos simplemente añadir una clase, podemos usar classList.add
}

window.onload = function () {
    document.getElementById("modificarAtributo").addEventListener("click", modificarAtributo);
}