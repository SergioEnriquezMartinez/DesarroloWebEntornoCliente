/*------------FUNCIONALIDAD DEL BOTON 1------------*/

function funcion1() {
    function cambiarColorRojo() {
        document.getElementById("circuloRojo").classList.remove("negro");
        document.getElementById("circuloRojo").classList.add("rojo");
        
        setTimeout(() => {
            document.getElementById("circuloRojo").classList.remove("rojo");
            document.getElementById("circuloRojo").classList.add("negro");
            
            cambiarColorVerde();
        }, 6000);
    }

    function cambiarColorVerde() {
        document.getElementById("circuloVerde").classList.remove("negro");
        document.getElementById("circuloVerde").classList.add("verde");
        
        setTimeout(() => {
            document.getElementById("circuloVerde").classList.remove("verde");
            document.getElementById("circuloVerde").classList.add("negro");
            
            parpadearColorVerde();
        }, 6000);
    }

    function parpadearColorVerde() {
        let parpadeoIntervalVerde = setInterval(() => {
            document.getElementById("circuloVerde").classList.toggle("negro");
            document.getElementById("circuloVerde").classList.toggle("verde");
        }, 500);
        
        setTimeout(() => {
            clearInterval(parpadeoIntervalVerde);
            document.getElementById("circuloVerde").classList.remove("negro");
            document.getElementById("circuloVerde").classList.add("negro");
            
            cambiarColorAmarillo();
        }, 3000);
    }

    function cambiarColorAmarillo() {
        document.getElementById("circuloAmarillo").classList.remove("negro");
        document.getElementById("circuloAmarillo").classList.add("amarillo");
        
        setTimeout(() => {
            document.getElementById("circuloAmarillo").classList.remove("amarillo");
            document.getElementById("circuloAmarillo").classList.add("negro");
        
            cambiarColorRojo();
        }, 2000);
    }
    cambiarColorRojo();
}
        
/*------------FUNCIONALIDAD DEL BOTON 2---------------*/
        
function funcion2() {
    let estadoRojo = true;
    let estadoVerde = false;
    funcionEnEjecucion = setInterval(() => {
            if (estadoRojo) {
                document.getElementById("circuloRojo").classList.remove("negro");
                document.getElementById("circuloRojo").classList.add("rojo");
                
                document.getElementById("circuloVerde").classList.remove("verde");
                document.getElementById("circuloVerde").classList.add("negro");
                
                estadoRojo = false;
                estadoVerde = true;
            } else {
                document.getElementById("circuloRojo").classList.remove("rojo");
                document.getElementById("circuloRojo").classList.add("negro");
                
                document.getElementById("circuloVerde").classList.remove("negro");
                document.getElementById("circuloVerde").classList.add("verde");
                
                estadoRojo = true;
                estadoVerde = false;
            }
        }, 500);
}


/*-----------------FUNCIONALIDAD BOTON 3-----------*/

function funcion3() {
    funcionEnEjecucion = setInterval(() => {
            document.getElementById("circuloAmarillo").classList.toggle("negro");
            document.getElementById("circuloAmarillo").classList.toggle("amarillo");
        }, 1000);
}

window.onload = function() {
    document.getElementById("circuloRojo").addEventListener("click", funcion1);
    document.getElementById("circuloAmarillo").addEventListener("click", funcion2);
    document.getElementById("circuloVerde").addEventListener("click", funcion3);
    document.getElementById("boton").addEventListener("click", () => {location.reload()});
}