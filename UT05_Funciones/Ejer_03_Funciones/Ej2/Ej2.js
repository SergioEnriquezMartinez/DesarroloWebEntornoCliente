function funcionTradicional() {
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);

    // Dejo permisibilidad a que ambos lados sean iguales ya que técnicamente un cuadrado es un rectángulo
    // con base y altura iguales, por esa razón no hay validación de base y altura de distinto valor
    document.getElementById("resultadoTradicional").textContent = base * altura;
}

function funcionAnonima() {
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);

}

function funcionFlecha() {
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);

}

window.onload = function() {
    document.getElementById("funcionTradicional").addEventListener("click",funcionTradicional);
    document.getElementById("funcionAnonima").addEventListener("click",funcionAnonima);
    document.getElementById("funcionFlecha").addEventListener("click",funcionFlecha);
}