function cargarHijos() {
    let parrafo1 = document.getElementById("parrafo1");
    for(let hijo of parrafo1.childNodes) {
        console.log(`Texto: "${hijo.nodeValue}" - Tipo: "${hijo.nodeType}" - Nombre: "${hijo.nodeName}"`);
        console.log("--------------------------------------------------");
    }
}

function cargarHijosElementos() {
    let parrafo1 = document.getElementById("parrafo1");
    for(let hijo of parrafo1.children) {
        console.log(`Texto: "${hijo.nodeValue}" - Tipo: "${hijo.nodeType}" - Nombre: "${hijo.nodeName}"`);
    }
}

window.onload = function() {
    document.getElementById("cargarHijos").addEventListener("click", cargarHijos);
    document.getElementById("cargarHijosElementos").addEventListener("click", cargarHijosElementos);
}