function creaNuevoConMap() {
    const notas = [5,6,,,,9,,8,,9,,7,8];
    const doble = notas.map(x => 2*x);

    console.log(notas);
    console.log(doble);
}

window.onload = function() {
    document.getElementById("creaNuevoConMap").addEventListener("click",creaNuevoConMap);
}