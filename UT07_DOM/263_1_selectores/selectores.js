function cargarSelectoresCSS() {
    console.log("--- Selecciona los elementos de la clase verdura ---");
    let verduras = document.querySelectorAll(".verdura");
    let arrayVerduras = [...verduras];
    arrayVerduras.forEach(element => {console.log(element.textContent)});

    console.log("--- Selecciona los elementos li dentro de ul ---");
    let listadoLi = document.querySelectorAll("ul li");
    let arrayListadoLi = [...listadoLi];
    arrayListadoLi.forEach(element => {console.log(element.textContent)});

    console.log("--- Selecciona el primer elemento li de cada lista ---");
    let primerLi = document.querySelectorAll("li:first-of-type");
    let arrayPrimerLi = [...primerLi];
    arrayPrimerLi.forEach(element => {console.log(element.textContent)});

    console.log("--- Selecciona el primer elemento de cada lista, si es verdura ---");
    let primerVerdura = document.querySelectorAll("li.verdura:first-of-type");
    let arrayPrimerVerdura = [...primerVerdura];
    arrayPrimerVerdura.forEach(element => {console.log(element.textContent)});
}


window.onload = function() {
    document.getElementById("cargarSelectoresCSS").addEventListener("click", cargarSelectoresCSS); 
}