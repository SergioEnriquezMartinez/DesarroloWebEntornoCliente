class Punto {
  constructor(cordX, coordY) {
    this.x = cordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x}, ${this.y})`;
  }
}
function prototipo() {
  let a = new Punto(10, 20);
  console.log(a.__proto__);
  console.log("****************");
  console.log(Object.getPrototypeOf(a));
}
function aniadirPrototipo() {
  let a = new prototipo(10, 20);
  Punto.prototype.sumarXY = function () {
    return this.x + this.y;
  };
  Punto.prototype.z = 0;
  console.log(Punto.prototype);
  console.log(a.__proto__);
}
function mostrarDosObjetos(){
    let a = new Punto(10,20);
    let b = new Punto(-3,6);
    Punto.prototype.sumarXY = function () {
        return this.x + this.y;
      };
    Punto.prototype.z = 0;
    Punto.prototype.g = 46;
      console.log(a.sumarXY());
      console.log(b.sumarXY());
      console.log(a.z);
      console.log(b.z);
      console.log(a.g);
}
function modificarPropiedadesDePrototipo(){
    let a = new Punto(10,20);
    let b = new Punto(-3,6);
    Punto.prototype.sumarXY = function () {
        return this.x + this.y;
      };
      Punto.prototype.z = 0;
      a.z= 7; // Z es una propiedad solo de a
      b.__proto__.z=13;
      console.log(a.sumarXY());
      console.log(b.sumarXY());
      console.log("Valor de la propiedad    a.z ---> " + a.z);
      console.log("Valor de prototipo       a.__proto__.z ----> " +a.__proto__.z);
      console.log("Valor de la propiedad    b.z ---> " + b.z);
      console.log("Valor de prototipo       b.__proto__.z ----> " +b.__proto__.z);
}
window.onload = function () {
  document.getElementById("prototipo").addEventListener("click", prototipo);
  document
    .getElementById("aniadirPrototipo")
    .addEventListener("click", aniadirPrototipo);
  document
    .getElementById("mostrarDosObjetos")
    .addEventListener("click", mostrarDosObjetos);
  document
    .getElementById("modificarPropiedadesDePrototipo")
    .addEventListener("click", modificarPropiedadesDePrototipo);
};
