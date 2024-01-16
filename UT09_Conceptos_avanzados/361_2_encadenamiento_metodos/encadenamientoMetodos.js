function encadenamientoMetodos() {
    console.log("Inicio de la promesa");
    let promesa = new Promise((resolve, reject) => {
        let n = 0;
        let intervalo = setInterval(function() {
            n++;
            console.log("Número: " + n);
            if (n == 9) {
                resolve("Han pasado 10 segundos");
                clearInterval(intervalo);
            } 
        }, 1000);
    });
    promesa.then((mensaje) => {
        console.log(mensaje);
        return "Se ha puesto un temporizador de 10 segundos";
    }).then((mensaje) => {
        console.log(mensaje);
    });
    console.log("Fin de la promesa");
}

window.onload = function () {
    document.getElementById("encadenamientoMetodos").addEventListener("click", encadenamientoMetodos);
}