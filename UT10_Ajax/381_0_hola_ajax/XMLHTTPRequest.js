function cargarXMLDoc() {
    let xhttp = new XMLHttpRequest();

    alert/("-Hola mundo --> " + xhttp.readyState);

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) { // 200: Codigo de OK
                document.getElementById("demo").textContent = "Texto cagado de forma asincrona";
            }
        }
        alert("+Hola mundo --> " + xhttp.readyState);
    };

    xhttp.open("GET", "hola.txt", true);
    xhttp.send(null);
}

window.onload = function() {
    document.getElementById("pulsaDemo").addEventListener("click", cargarXMLDoc, true);
}