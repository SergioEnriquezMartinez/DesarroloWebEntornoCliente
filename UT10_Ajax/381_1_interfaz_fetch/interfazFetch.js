function intefazFetch() {
    fetch("nifAleatorio.php").then(response => {console.log(response);})
    .catch(error => {console.log(error);});
}

window.onload = function() {
    document.getElementById("interfazFetch").addEventListener("click", intefazFetch);
}