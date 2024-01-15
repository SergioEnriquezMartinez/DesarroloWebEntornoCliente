function ejemploPromesa() {
    var promesa = new Promise(function(resolver, rechazar) {
        let n1 = 2;
        let n2 = 3;
        if (n1 == n2) {
            resolver("Los números son iguales");
        } else {
            rechazar(Error("Los números son diferentes"));
        }
    });
    promesa.then(function(respuesta) {
        console.log(respuesta);
    });
}

window.onload = function() {
    document.getElementById("ejemploPromesa").addEventListener("click", ejemploPromesa);

}