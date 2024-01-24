function cargarXMLDoc() {
    let xhttp = new XMLHttpRequest();

    alert/("-Hola mundo --> " + xhttp.readyState);

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 0) {
                document.getElementById("demo").textContent = "Texto cagado de forma asincrona";
            }
        }
        alert("+Hola mundo --> " + xhttp.readyState);
    };

    xhttp.open("GET", "Esto es una prueba", true);
    xhttp.send(null);
}

window.onload = function() {
    document.getElementById("pulsaDemo").addEventListener("click", cargarXMLDoc, true);
}