async function asyncTryCatch() {
    try {
        let resultado = await Promise.reject("Promesa rechazada");
    } catch (error) {
        console.log(error);
    }
}

window.onload = function() {
    document.getElementById("asyncTryCatch").addEventListener("click", asyncTryCatch);
}