
function factorial(){
    let numeroSolitado = prompt("Introduce un número para calcular el factorial");
    let resultado = 1;
    for(i = 1 ; i <= numeroSolitado ; i++){
        resultado = [resultado*i];
    }
    const factorial = resultado.reduce((resultado, valor)=> resultado*valor) ;
    console.log("Factorial de "+ numeroSolitado + " es = "  + factorial);

}



window.onload = function(){
    document.getElementById("numeroFactorial").addEventListener("click", factorial);
}