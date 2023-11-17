function forTradicional() {
    const notas  = [5,6,7,4,9,8,9,7,8];
    for (let i = 0; i < notas.length; i++) {
        console.log(`La nota ${i} es ${notas[i]}`);
    }
}

function forTradicionalIndefinidos() {
    const notas  = [5,6,,,,9,,,8,,9,,7,8];
    for (let i = 0; i < notas.length; i++) {
        console.log(`La nota ${i} es ${notas[i]}`);
    }
}

function forTradicionalEvitarIndefinidos() {
    const notas  = [5,6,,,,9,,,8,,9,,7,8];
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] != undefined) {
            console.log(`La nota ${i} es ${notas[i]}`);
        }
    }
}

function forIn() {
    const notas  = [5,6,,,,9,,,8,,9,,7,8];
    for(let i in notas) {
        console.log(`La nota ${i} es ${notas[i]}`);
    }
}

function forOf() {
    const notas  = [5,6,,,,9,,,8,,9,,7,8];
    for(let nota of notas) {
        console.log(nota);
    }
}

function forOfSinIndefinidos() {
    const notas  = [5,6,,,,9,,,8,,9,,7,8];
    for(let nota of notas) {
        if(nota != undefined) {
            console.log(nota);
        }
    }
}

window.onload = function() {
    document.getElementById("forTradicional").addEventListener("click", forTradicional);
    document.getElementById("forTradicionalIndefinidos").addEventListener("click", forTradicionalIndefinidos);
    document.getElementById("forTradicionalEvitarIndefinidos").addEventListener("click", forTradicionalEvitarIndefinidos);
    document.getElementById("forIn").addEventListener("click", forIn);
    document.getElementById("forOf").addEventListener("click", forOf);
    document.getElementById("forOfSinIndefinidos").addEventListener("click", forOfSinIndefinidos);
}