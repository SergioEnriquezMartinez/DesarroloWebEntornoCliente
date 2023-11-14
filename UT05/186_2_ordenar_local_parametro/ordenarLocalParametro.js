function ordenarLocalParametro(){
    const palabras = ["Ñu", "Águila", "Boa", "Oso", "Marsopa", "Nutria"];
    palabras.sort((a,b)=>a.localeCompare(b).es);
    console.log(palabras);
}

window.onload = function(){
    document.getElementById("ordenarLocalParametro").addEventListener("click",ordenarLocalParametro)
}