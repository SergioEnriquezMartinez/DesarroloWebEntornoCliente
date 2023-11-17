function ordenarArrayLongitud(){
    const palabras = ["Ñu", "Águila", "Boa", "Oso", "Marsopa", "Nutria"];
    palabras.sort((a,b)=>a.length-b.length);
    console.log(palabras);
}



window.onload = function(){
    document.getElementById("ordenarArrayLongitud").addEventListener("click", ordenarArrayLongitud)
}