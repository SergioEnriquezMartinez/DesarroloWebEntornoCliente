function utilizarThisAccesoAPropiedades(){
    let punto = {
        x:19,
        y:36,
        mostrarCoordenadas:function(){
            return `(${this.x}, ${this.y})`;
        }
    }
    console.log(punto.mostrarCoordenadas());
}
function utilizarThisFuncionEstatica(){
    function doblaX(){
        this.x*=2;
    }
    let punto = {
        x:15,
        y:7,
        doble:doblaX
    };
    let puntoDos = {
        x:15,
        y:7,
        dobleDos:function(){
            return this.x*=2
        }
    };
    let incognita ={
        x:5,
        dbl:doblaX
    };
    punto.doble();
    puntoDos.dobleDos();
    incognita.dbl();
    console.log("Llama a función que está fuera --->" + punto.x);
    console.log("Llama a función declara dentro --->" + puntoDos.x);
    console.log("Incógnita.x --->" + incognita.x);
}

window.onload = function(){
    document.getElementById("utilizarThisAccesoAPropiedades").addEventListener("click", utilizarThisAccesoAPropiedades);
    document.getElementById("utilizarThisFuncionEstatica").addEventListener("click", utilizarThisFuncionEstatica);
}