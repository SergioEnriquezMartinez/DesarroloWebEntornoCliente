async function esperaRespuesta() {
    let mensaje1 = await Promise.resolve("Estoy resuelta");
    console.log(mensaje1);
    let mensaje2 = await new Promise((resolver) => {
        setTimeout(() => {
            resolver("Resuelvo en 3 segundos");
        }, 3000);
    });
    console.log(mensaje2);
    let mensaje3 = await new Promise((resolver) => {
        setTimeout(() => {
            resolver("Resuelvo en 5 segundos");
        }, 5000);
    });
    console.log(mensaje3);
}

window.onload = function() {
    document.getElementById("esperaRespuesta").addEventListener("click", esperaRespuesta);
}