function funcionTradicional() {
    document.getElementById("resultadoTradicional").textContent = "Función tradicional --> " + Math.PI;
}

function funcionAnonima() {
    let result = function() {
        return "Función anónima --> " + Math.PI;
    };
    document.getElementById("resultadoAnonima").textContent = result();
}

function funcionFlecha () {
    let result = () => {
        return "Función flecha --> " + Math.PI;
    };
    document.getElementById("resultadoFlecha").textContent = result();
}

window.onload = function() {
    document.getElementById("tradicional").addEventListener("click", funcionTradicional);
    document.getElementById("anonima").addEventListener("click", funcionAnonima);
    document.getElementById("flecha").addEventListener("click", funcionFlecha);
}
