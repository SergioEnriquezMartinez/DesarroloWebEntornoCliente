function cambiarColorBarraLarga(){
    alert("Cambiamos el color de la barra larga");
    /*
    document.getElementById("barraLarga").classList.remove("colorVioletaBarraLarga");
    document.getElementById("barraLarga").classList.add("colorMarronBarraLarga");
    */
   document.getElementById("barraLarga").classList.toggle("colorMarronBarraLarga");
   
}

function cambiarColorCuadrados(id) {
    alert("Cambiamos el color al cuadrado " + id);
    var variable = "cuadrado" + id;
    /*
    document.getElementById(variable).classList.remove("cuadradoColorVerde");
    document.getElementById(variable).classList.add("cuadradoColorAmarillo");
    */
    document.getElementById(variable).classList.toggle("cuadradoColorAmarillo");
}

window.onload = function(){
    document.getElementById("barraLarga").addEventListener("click", cambiarColorBarraLarga);
    document.getElementById("cuadrado1").addEventListener("click", function(){cambiarColorCuadrados("1")});
    document.getElementById("cuadrado2").addEventListener("click", function(){cambiarColorCuadrados("2")});
}