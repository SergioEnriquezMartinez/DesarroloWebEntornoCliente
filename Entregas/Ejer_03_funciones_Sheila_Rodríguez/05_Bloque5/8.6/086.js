const array =new Array(100);
for(i = 1; i< array.length; i++){
    array[i]=i+1;
}
 
function numPrimos(){
    const arrayPrimos = array.filter(x => x%array ==0);
    console.log("Números primos : " + arrayPrimos);
}


function numPares(){
    const arrayPares = array.filter(x => x%2 ==0);
    console.log("Numeros pares: " + arrayPares);
}

function numImpares(){
    const arrayImpares = array.filter(x => x%2 !=0);
    console.log("Numeros impares: " + arrayImpares);
}

function numdivisiblesTres(){
    const arrayDivisibleTres = array.filter(x => x%3 ==0);
    console.log("Números divisibles entre 3 : " + arrayDivisibleTres);
}

function numDivisiblesCuatro(){
    const arrayDivisibleCuatro = array.filter(x => x%4 ==0);
    console.log("Números divisbles entre 4 : " + arrayDivisibleCuatro);
    
}

function numSumadosSeanPares(){
    const numSumadosPares = array.filter(x => x%2 == x+array);
    console.log("Números que sumados sean pares : " + numSumadosPares);
}


window.onload = function(){
    document.getElementById("numPrimos").addEventListener("click", numPrimos);
    document.getElementById("numPares").addEventListener("click", numPares);
    document.getElementById("numImpares").addEventListener("click", numImpares);
    document.getElementById("numdivisiblesTres").addEventListener("click", numdivisiblesTres);
    document.getElementById("numDivisiblesCuatro").addEventListener("click", numDivisiblesCuatro);
    document.getElementById("numSumadosSeanPares").addEventListener("click", numSumadosSeanPares);
}