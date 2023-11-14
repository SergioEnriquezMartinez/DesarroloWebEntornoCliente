function mapaForeach() {
    const provincias = new Map();

    provincias.set("5","Ávila").set("28","Madrid").set("34","Palencia").set("41","Sevilla");
    provincias.forEach(function(valor,clave){console.log(`Clave: ${clave}, Valor: ${valor}`);})
}

window.onload = function() {
    document.getElementById("mapaForeach").addEventListener("click",mapaForeach);
}