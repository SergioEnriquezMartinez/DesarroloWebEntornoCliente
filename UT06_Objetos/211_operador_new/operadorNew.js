//Constructor de objeto con una funciópn constructora
function Punto(coordX, coordY){
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = ()=>`(${this.x}, ${this.y})`;
}
//Constructor de objeto con declaracion clase
class PuntoDos {
    constructor(coordX, coordY) {
        this.x = coordX;
        this.y = coordY;
        this.mostrarCoordenadas = () => `(${this.x}, ${this.y})`;
    }
}
function crearOperadorNew(){
    let a = new Punto(10,20);
    let b = new Punto(-3,6);
    let c = new PuntoDos(8,4);
    console.log("a.mostrarCoordenadas --->" + a.mostrarCoordenadas());
    console.log("b.mostrarCoordenadas --->" + b.mostrarCoordenadas());
    console.log("typeof Punto --->" + typeof Punto);
    console.log("typeof Punto --->" + typeof PuntoDos);
    console.log("b instanceOf Punto --->" + (b instanceof Punto));
    console.log("b instanceOf Object  --->" + (b instanceof Object));
    console.log("b constructor,name  --->" + (b.constructor.name));
}

window.onload = function(){
    document.getElementById("crearOperadorNew").addEventListener("click",crearOperadorNew);
}