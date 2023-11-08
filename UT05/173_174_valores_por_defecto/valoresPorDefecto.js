function declaracionFuncionesValoresPorDefecto() {
    function saludo(texto="Hola") {
        console.log(texto);
    }
    saludo();
    saludo("Buenos dias");
}

window.onload = function() {
    document.getElementById("declararcionFuncionesValoresPorDefecto").addEventListener("click", declaracionFuncionesValoresPorDefecto);
}