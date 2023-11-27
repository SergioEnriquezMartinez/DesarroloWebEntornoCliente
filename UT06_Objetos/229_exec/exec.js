function ejecutarExec() {
    let texto = "Este es un texto Este de prueba";
    let expresion = /\w+(\s)/;
    let res = expresion.exec(texto);

    console.log(res);
    console.log("**********************");
    console.log(res[0]);
}

window.onload = function () {
    document.getElementById("ejecutarExec").addEventListener("click", ejecutarExec);
}