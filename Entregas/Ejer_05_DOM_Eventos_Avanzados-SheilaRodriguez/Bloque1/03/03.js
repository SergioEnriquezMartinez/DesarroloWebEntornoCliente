
function contenedor(){
    let eliminar = document.getElementById("listaUno");
    let lista1 = document.getElementsByClassName("elemento");
    let temporizador = document.getElementById("temporizador");
    let desactivarTemporizador= document.getElementById("temporizadorDesactivar");
    console.log(lista1.length);
    temporizador = setInterval(()=>{
        eliminar.removeChild(eliminar.children[0]);
        console.log("--------------- Despues de eliminar ---------------");
        console.log(lista1.length);
        if(desactivarTemporizador){
            clearInterval(temporizador);
        }
    },1000);
    
}

function contenedorDos(){
    let eliminarDos = document.getElementById("listaDos");
    let listaDos = document.querySelectorAll(".elementoDos");
    let temporizadorDos = document.getElementById("temporizadorDos");
    let desactivarTemporizadorDos = document.getElementById("temporizadorDesactivarDos");
    console.log(listaDos.length);
    temporizadorDos = setInterval(()=>{
        eliminarDos.removeChild(eliminarDos.children[0]);
        console.log("--------------- Despues de eliminar ---------------");
        console.log(listaDos.length);
        if(desactivarTemporizadorDos){
            clearInterval(temporizadorDos);
        }
    },1000);
    

}

window.onload = function(){
    document.getElementById("contenedor").addEventListener("click", contenedor);
    document.getElementById("contenedorDos").addEventListener("click", contenedorDos);
}