//Este codigo huele a caca
function Punto(coordX,coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
}

//Este tambien pero menos
class PuntoDos {
    constructor(coordX, coordY) {
        this.x = coordX;
        this.y = coordY;
        this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
    }
}
function crearOperadorNew() {
    let a = new Punto(10,20);
    let b = new Punto(-3,6);
    let c = new PuntoDos(8,4);
    
    console.log(a.mostrarCoordenadas());
    console.log(b.mostrarCoordenadas());
    console.log(c.mostrarCoordenadas());
    console.log(typeof Punto);
    console.log(typeof PuntoDos);
    console.log(b instanceof Punto);
    console.log(b instanceof Object);
    console.log(b.constructor.name);
}

window.onload = function() {
    document.getElementById("crearOperador").addEventListener("click",crearOperadorNew);
}