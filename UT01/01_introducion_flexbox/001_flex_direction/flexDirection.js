
//Cuando la ventana este cargada se hacen determinadas cosas 
//con el siguiente codigo esta linea siempre la ponemos al final
function ponerDerecha(){
    borrarClases();
    document.getElementById("caja").classList.add("derecha");
}

function ponerIzquierda(){
    borrarClases();
    document.getElementById("caja").classList.add("izquierda");

}

function ponerAbajo(){
    borrarClases();
    document.getElementById("caja").classList.add("abajo");
}

function ponerArriba(){
    borrarClases();
    document.getElementById("caja").classList.add("arriba");
}

function borrarClases(){
    document.getElementById("caja").classList.remove("derecha");
    document.getElementById("caja").classList.remove("arriba");
    document.getElementById("caja").classList.remove("abajo");
    document.getElementById("caja").classList.remove("izquierda");
    //...
}

window.onload = function(){
    document.getElementById("a").addEventListener("click",ponerDerecha);
    document.getElementById("b").addEventListener("click",ponerIzquierda);
    document.getElementById("c").addEventListener("click",ponerAbajo);
    document.getElementById("d").addEventListener("click",ponerArriba);
}