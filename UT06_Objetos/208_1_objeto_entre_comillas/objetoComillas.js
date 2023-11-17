function crearObjetoComillas() {
    let libro = {
        titulo:"Manual de UFOlogia",
        "n-serie":"187C2",
        autores:["Pedro Martínez", "Ana León"],
        editorial:{
            nombre:"Inexistente S.A.",
            pais:"España",
        },
        arrayUno: ["uno","dos"],
        arrayDos: new Array("hola"),
        map: new Map([[1,"José"],[2,"María"],[3,"Elena"]]),
        set: new Set([1,2,3,4,5])
    };
    console.log(libro.titulo);
    console.log(libro["n-serie"]);
    console.log(libro.editorial.nombre);
    console.log(libro.arrayUno);
    console.log(libro.arrayDos);
    console.log(libro.map);
    console.log(libro.set);
}

window.onload = function() {
    document.getElementById("entreComillas").addEventListener("click",crearObjetoComillas);
}