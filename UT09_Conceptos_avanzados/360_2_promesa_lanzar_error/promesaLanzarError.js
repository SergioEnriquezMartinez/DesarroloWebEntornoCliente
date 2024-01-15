function promesaLanzarError() {
    let promesa = new Promise((resolve, reject) => {
        throw new Error("Error lanzado desde la promesa");
    });

    promesa.then((resolve) => {
        console.log("La promesa se ha resuelto");
    }).catch((error) => {
        console.log("La promesa ha fallado");
        console.log(error.message);
    });
}

window.onload = function() {
    document.getElementById("ejemploProemsa").addEventListener("click", promesaLanzarError);
}