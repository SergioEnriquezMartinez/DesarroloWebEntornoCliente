
function funcionTradicional(){
    let numeroPi = Math.PI;
    console.log("Número PI (función tradicional ) " + numeroPi);
}

const funcionAnonima = function(){
    return Math.PI;
}
console.log("Número PI (función anónima) " + funcionAnonima(Math.PI));

window.onload = function(){
    document.getElementById("funcionTradicional").addEventListener("click", funcionTradicional);
    document.getElementById("funcionFlecha").addEventListener("click", ()=>{
        let numeroPI = Math.PI;
        console.log("Número PI (función flecha) = " + numeroPI);
    });
    //document.getElementById("funcionAnonima").addEventListener("click", function);
}