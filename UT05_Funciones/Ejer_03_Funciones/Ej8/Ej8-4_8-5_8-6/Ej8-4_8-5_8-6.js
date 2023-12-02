function factorial(){
    let num = parseInt(document.getElementById("numero").value);
    let arrayFactorial = Array.from({length: num}, (_, i) => i+1);

    let factorial = arrayFactorial.reduce((acu, valor) => acu * valor, 1);
    document.getElementById("resultadoFactorial").textContent = factorial;
}

function fibonnacci(){
    let num = parseInt(document.getElementById("numero").value);
    let arrayFibonnacci = Array.from({length: num}, (_, i) => i+1);

    let fibonnacci = arrayFibonnacci.reduce((acu, valor) => {
        if (valor == 0) {
            acu.push(valor);
        }else if(valor == 1){
            acu.push(valor);
        }else if(valor == 2){
            acu.push(valor);
        }else{
            acu.push(acu[acu.length - 1] + acu[acu.length - 2]);
        }
        return acu;
    
    }, []);
    document.getElementById("resultadoFibonnacci").textContent = fibonnacci;
}

const numeros = Array.from({length: 100}, (_, i) => i+1);
console.log(numeros);

function esPrimo(num){
    if (num == 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }        
    }
    return num !== 1;
}


function filtrarNumeros(){
    let valor = document.getElementById("opciones").value;
    switch (valor) {
        case "primos":
            document.getElementById("resultadoFiltrado").textContent = numeros.filter(esPrimo);
            break;
        case "pares":
            document.getElementById("resultadoFiltrado").textContent = numeros.filter(valor => valor % 2 == 0);
            break;
        case "impares":
            document.getElementById("resultadoFiltrado").textContent = numeros.filter(valor => valor % 2 !== 0);
            break;
        case "tres":
            document.getElementById("resultadoFiltrado").textContent = numeros.filter(valor => valor % 3 == 0);
            break;
        case "cuatro":
            document.getElementById("resultadoFiltrado").textContent = numeros.filter(valor => valor % 4 == 0);
            break;
    }
}

window.onload = function(){
    document.getElementById("botonFactorial").addEventListener("click", factorial);
    document.getElementById("botonFibonnacci").addEventListener("click", fibonnacci);
    document.getElementById("opciones").addEventListener("change", filtrarNumeros);
}