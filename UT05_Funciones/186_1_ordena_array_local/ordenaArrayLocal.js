function ordenaArrayLocal() {
    const palabras = ["Ñu", "Águila", "Boa", "Oso", "Marsopa", "Nutria"];
    palabras.sort((a,b)=>a.localeCompare(b));
    console.log(palabras);
}
function ordenaArrayLocalAnonima(){
    const palabras = ["Ñu", "Águila", "Boa", "Oso", "Marsopa", "Nutria"];
    palabras.sort(function(a,b){
        return a.localeCompare(b);
    });
    console.log(palabras);
}
window.onload = function(){
    document.getElementById("ordenaArrayLocal").addEventListener("click", ordenaArrayLocal)
    document.getElementById("ordenaArrayLocalAnonima").addEventListener("click", ordenaArrayLocalAnonima)
}