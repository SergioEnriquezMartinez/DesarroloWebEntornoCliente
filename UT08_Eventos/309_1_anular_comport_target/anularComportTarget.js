function anularComportamientoPredeterminado(){
    document.getElementById("enlace").classList.add("anulado");
    let enlace = document.querySelectorAll("a");

    enlace.addEventListener("click", function(evento){
        if (!confirm("¿Realmente desea salir de la página?")) {
            evento.preventDefault();
        }
    });
}

window.onload = function(){
    document.getElementById("anularComporPred").addEventListener("click", anularComportamientoPredeterminado);
}