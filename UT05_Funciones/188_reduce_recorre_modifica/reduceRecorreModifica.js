function reduceRecorreModifica() {
    const array = [1,2,3,4,5];
    let suma = array.reduce((acu,valor)=>acu+valor,0);
    console.log(suma);
}

window.onload = function() {
    document.getElementById("reduceRecorreModifica").addEventListener("click",reduceRecorreModifica);
}