
function elemento(){
    let elemento = document.getElementById("elemento");
    console.log(elemento.nodeType);
    if(elemento.nodeType == 1){
        console.log("NodeType --> Elemento");
    }
}

function texto (){
    let texto = document.body;
    console.log(texto.firstChild.nodeType);
    if(texto.firstChild.nodeType == 3){
        console.log("NodeType --> Texto");
    }
}

function atributo(){
    let atributo = document.querySelector(".atributo");
    console.log(atributo.nodeType);
}

function comentario(){
    let comentario = document.querySelector("div");
    var resultado = comentario.childNodes[1];
    console.log(resultado.nodeType);
    if(resultado.nodeType == 8){
        console.log("NodeType --> Comentario");
    }
}

function referenciaEntidad(){
    
}


window.onload = function(){
    document.getElementById("elemento").addEventListener("click", elemento);
    document.getElementById("texto").addEventListener("click", texto);
    document.getElementById("atributo").addEventListener("click", atributo);
    document.getElementById("comentario").addEventListener("click", comentario);
    document.getElementById("referenciaEntidad").addEventListener("click", referenciaEntidad);
}