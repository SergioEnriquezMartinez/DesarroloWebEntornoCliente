function cargarTipoNodo() {
    let seccion = document.getElementById("s1");
    console.log("Elemento (nodeType) ---> " + seccion.nodeType);
    console.log("Elemento (nodeName) ---> " + seccion.nodeName);
    console.log("Document (nodeType) ---> " + document.nodeType);


    let parrafoTexto = document.getElementById("texto");
    console.log("Elemento (nodeName) ---> " + parrafoTexto.nodeName);
    console.log("Valor del nodo ---> " + parrafoTexto.firstChild.nodeValue);
}

window.onload = function () {
    document.getElementById("s1").addEventListener("click", cargarTipoNodo);
}