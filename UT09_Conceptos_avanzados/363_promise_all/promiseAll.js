function promiseAll() {
    let promesa1 = Promise.resolve("Estoy resuelta");
    let promesa2 = Promise((resolver) => {
        setTimeout(() => {
            resolver("Resuelvo en 3s")}, 3000);
    });
    let promesa3 = new Promise((resolver) => {
        setTimeout(() => {
            resolver("Resuelvo en 5s")}, 5000);
    });

    let promesaConjunta = Promise.all([promesa1, promesa2, promesa3]);
    console.log("Empezando");
    promesaConjunta.then((resultados) => {
        let n = 1;
        for (const resultado of resultados) {
            console.log(`Promesa número ${n++}: Mensaje: ${resultado}`);
            n++;
        }
    });
}

window.onload = function () {
    document.getElementById("promiseAll").addEventListener("click", promiseAll);
}