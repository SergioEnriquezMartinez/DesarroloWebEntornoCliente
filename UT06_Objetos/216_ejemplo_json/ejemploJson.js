function jsonAJs() {
    const estructuraJson = 
    '{' 
    + ' "titulo": "Manual de UFOlogia", '
    + ' "nserie": "187C2",  '
    + ' "autores": ["Pedro Martínez","Ana León"], '
    + ' "editorial": { '
    + '     "nombre": "Inexistente S.A.", '
    + '     "pais": "España" '
    + '    }, '
    + ' "edicion": 2,'
    + ' "ensayo": true'
    + '} ';
    

    alert(estructuraJson);
    console.log(estructuraJson);
    console.log("**************************************");
    
    const obj = JSON.parse(estructuraJson);
    console.log(obj.titulo);
    console.log(obj.nserie);
    console.log(obj.autores);
    console.log(obj.editorial.nombre);
    console.log(obj.editorial.pais);
    console.log(obj.edicion);
    console.log(obj.ensayo);
}

function jsAJson() {
    const musico1 = {
        nombre:"Bob",
        apellido:"Dylan",
        fecha_nacimiento: {
            dia:24,
            mes:4,
            anio:1941
        },
        disco:['Highway 61 Revisited','Blonde on Blonde','Blood on the Tracks']
    }
    console.log(JSON.stringify(musico1, 'false'));
    console.log(JSON.stringify(musico1, ['nombre','apellido'],3));
}


window.onload = function() {
    document.getElementById("jsonAJs").addEventListener("click", jsonAJs);
    document.getElementById("jsAJson").addEventListener("click", jsAJson);
}