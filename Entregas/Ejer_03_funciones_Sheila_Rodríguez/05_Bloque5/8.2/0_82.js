
function usoForeach(){
    const cadenas = ['hola', 'adios', 'Sheila', 'DWEC'];
    cadenas.forEach(function(cadena){
        let resultado = cadena.toUpperCase();
        console.log('cadena original : ' + cadena + " --> cadena convertida : " +  resultado);
    })
}

window.onload = function(){
    document.getElementById("parte2").addEventListener("click", usoForeach);
}