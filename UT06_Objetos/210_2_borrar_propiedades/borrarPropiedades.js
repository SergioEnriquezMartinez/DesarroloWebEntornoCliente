function borrarPropiedades() {
    let objeto = {
        x:18,
        y:-10,
        z:-1
    };
    delete objeto.z;
    console.log(objeto.x);
    console.log(objeto.z);
}

window.onload = function() {
    document.getElementById("borrarPropiedades").addEventListener("click",borrarPropiedades);
}