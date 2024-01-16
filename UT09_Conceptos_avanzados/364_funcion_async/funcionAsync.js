function ejecutarAsync() {
    let promesa1 = Promise.resolve("Estoy resuelta");
    let promesa2 = Promise((resolver) => {
        setTimeout(() => {
            resolver("Resuelvo en 3s")}, 3000);
    });
    let promesa3 = new Promise((resolver) => {
        setTimeout(() => {
            resolver("Resuelvo en 5s")}, 5000);
    });

    async function esperarTiempos() {
        let resultado1 = await promesa1;
        console.log(resultado1);
        let resultado2 = await promesa2;
        console.log(resultado2);
        let resultado3 = await promesa3;
        console.log(resultado3);
    }
    esperarTiempos();
}

window.onload = function() {
    document.getElementById("ejecutarAsync").addEventListener("click", ejecutarAsync);
}