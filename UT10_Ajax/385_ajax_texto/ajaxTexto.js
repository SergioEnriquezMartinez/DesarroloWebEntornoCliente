function ajaxTexto() {
    alert("ajaxTexto");
    let pre  = document.querySelector("pre");
    let capaError = document.getElementById("error");

    fetch("../poemaAleatorio.php").then((response => response.text()))
    .then((texto) =>{
        pre.textContent = texto;
    }).catch((error) =>{
        capaError.textContent = error;
    })
}

window.onload = () =>{
    document.getElementById("ajaxTexto").addEventListener("click", ajaxTexto);
}