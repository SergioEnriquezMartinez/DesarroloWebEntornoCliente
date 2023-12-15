function mostrarConTextContent() {
    console.log(document.getElementById("pSol").textContent);
}

function modificaConTextContent() {
    document.getElementById("pSol").textContent = "Soy el <strong>sol</strong>";

}

function concatenarConTextContent() {
    document.getElementById("pSol").textContent += " y la <strong>luna</strong>";
}

window.onload = function () {
    document.getElementById("mostrarConTextContent").addEventListener("click", mostrarConTextContent);
    document.getElementById("modificaConTextContent").addEventListener("click", modificaConTextContent);
    document.getElementById("concatenarConTextContent").addEventListener("click", concatenarConTextContent);
}