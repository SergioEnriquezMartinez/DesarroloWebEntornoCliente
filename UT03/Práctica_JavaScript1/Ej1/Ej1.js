var tiposDeDatos = [
    "undefined",
    "boolean",
    "number",
    "string",
    "bigint",
    "symbol",
    "object",
    "function",
];

document.getElementById("mostrarTipos").addEventListener("click", function () {
    var mensaje = "Los tipos de datos en JavaScript son:\n\n";

    for (var i = 0; i < tiposDeDatos.length; i++) {
        var tipo = tiposDeDatos[i];
        mensaje += "typeof " + tipo + ": " + tipo + "\n";
    }

    document.getElementById("result").textContent = mensaje;
});
