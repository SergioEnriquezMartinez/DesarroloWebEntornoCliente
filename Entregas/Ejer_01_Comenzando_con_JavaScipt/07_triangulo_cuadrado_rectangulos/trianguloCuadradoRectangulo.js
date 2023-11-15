
function dibujar(){
    let figuraDibujar = prompt("¿Qué dibuja quieres que dibuje?");
    figuraDibujar= figuraDibujar.toLowerCase();
    //console.log(figuraDibujar);
    let longitud = prompt("Introduce una longitud númerica");

    if(figuraDibujar == "cuadrado"){
        document.write ("<h1>Cuadrado</h1>");
        for(let i = 1 ; i <=longitud; i++){
            for(let j = 1; j<=longitud; j++){
                document.write(" * ");
            }
            document.write("<br>");
        }  
    } else if(figuraDibujar == "triangulo"){
        document.write ("<h1>Triángulo</h1>");
        for (let i = 0; i < longitud; i++) {
            for (let j = 0; j <= i ; j++) {
               document.write(" * ");
            }
            document.write("<br>");
        }
    }else if(figuraDibujar == "rectangulo"){
        document.write ("<h1>Rectángulo</h1>");
        let anchura = prompt("Introduce la anchura para el rectángulo");
        for(let i = 1 ; i <=longitud; i++){
            for(let j = 1; j<=anchura; j++){
                document.write(" * ");
            }
            document.write("<br>");
        }
        
    }else{
        alert("FIGURA NO ENCONTRADA");
    }
  
}

window.onload = function(){
    document.getElementById("dibujar").addEventListener("click", dibujar);
}