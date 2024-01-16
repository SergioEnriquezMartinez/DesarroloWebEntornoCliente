function objetoPromise() {
    let promesa = Promise.resolve("Ha funcionado");
    promesa.then((mensaje) => {
        console.log(mensaje);
    });

    let promesa2 = Promise.reject(Error("No ha funcionado"));
    promesa2.then((mensaje) => {
        console.log(mensaje);
    }).catch((error) => {
        console.log(error.message);
    });
}

window.onload = function () {
    document.getElementById("objetoPromise").addEventListener("click", objetoPromise);
}