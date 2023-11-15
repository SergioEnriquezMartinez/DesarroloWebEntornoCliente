
function serieFibonacci(){
    let numeroSolicitado = prompt("Introduce cuantos números quieres ver");
    let anterior1 = 1;
    let anterior2 = 0;
    let ultimo = 0;
    for(i = 1; i<numeroSolicitado; i++){
        ultimo = anterior1 + anterior2;
        anterior2 = anterior1;
        anterior1 = ultimo;
        ultimo = [ultimo];
        console.log(ultimo);
    }
    
    
    const fibonacci = ultimo.reduce((ultimo, valor)=> ultimo+valor);
    console.log("Fibonacci de " + numeroSolicitado + " es " + fibonacci);
}

window.onload = function(){
    document.getElementById("serieFibonacci").addEventListener("click", serieFibonacci);
}