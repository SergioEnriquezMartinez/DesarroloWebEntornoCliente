let x = "Esto es una variable global";

function funcionVariable() {
    let x = "Esto es una variable dentro de una funcion";
    document.getElementById("rFuncion").textContent = x;
}

function variableBucle() {
    for (let x = 0; x < 5; x++) {
        let x = "Esto es una variable dentro de un bucle";
        document.getElementById("rBucle").textContent += x + " ";
    }
}
window.onload = function() {
    document.getElementById("vGlobal").addEventListener("click",() => {document.getElementById("rGlobal").textContent = x});
    document.getElementById("vFuncion").addEventListener("click",funcionVariable);
    document.getElementById("vBucle").addEventListener("click",variableBucle);
}