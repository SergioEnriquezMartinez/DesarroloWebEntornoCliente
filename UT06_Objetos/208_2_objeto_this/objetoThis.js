function utilizarThisPropiedades() {
    let punto = {
        x:19,
        y:36,
        mostrarCoordenadas:function() {
            return `(${this.x},${this.y})`;
        }
    }
    console.log(punto.mostrarCoordenadas());
}

function utilizarThisFuncion() {
    function doblarX() {
        this.x*=2;
    }
    let punto = {
        x:15,
        y:7,
        doble:doblarX
    };
    let puntoDos = {
        x:15,
        y:7,
        dobleDos:function() {
            return this.x*=2;
        }
    }
    let incognita = {
        x:5,
        dbl:doblarX
    };
    punto.doble();
    puntoDos.dobleDos();
    incognita.dbl();
    
    console.log(punto.x);
    console.log(puntoDos.x);
    console.log(incognita.x);
}

window.onload = function() {
    document.getElementById("utilizarThisAccesoPropiedades").addEventListener("click",utilizarThisPropiedades);
    document.getElementById("utilizarThisFuncionExterna").addEventListener("click",utilizarThisFuncion);
}