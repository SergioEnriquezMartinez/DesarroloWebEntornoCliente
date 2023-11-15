class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  verPropiedadesProducto() {
    console.log(
      `Código: ${this.codigo}\nNombre: ${this.nombre}\nPrecio: ${this.precio}`
    );
  }

  cambiarPropiedades(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.verPropiedades();
  }
}

class Hortaliza {
    constructor(codigo, nombre, precio, estacion, color) {
        this.__proto__ = new Producto(codigo, nombre, precio);
        this.estacion = estacion;
        this.color = color;

        this.verPropiedadesHortaliza = function () {
            console.log(this.__proto__.verPropiedadesProducto()+`\nEstación: ${this.estacion}\nColor: ${this.color}`);
        };

        this.cambiarPropiedades = function (estacion, color) {
            this.estacion = estacion;
            this.color = color;
            this.verPropiedades();
        };
    }
}
  

class Fruta {
    constructor(codigo, nombre, precio, estacion, color, zona,vitaminas) {
        this.__proto__ = new Producto(codigo, nombre, precio);
        this.__proto__ =new Hortaliza(estacion,color);
        this.zona = zona;
        this.vitaminas = vitaminas;

        this.verPropiedadesFruta = function () {
            console.log(this.__proto__. verPropiedadesHortaliza()+`\nZona: ${this.zona}\nVitaminas: ${this.vitaminas}`);
        };

        this.cambiarPropiedades = function (zona, vitaminas) {
            this.zona = zona;
            this.vitaminas = vitaminas;
            this.verPropiedades();
        };
    }
}
 

const producto = new Producto("001", "Producto 1", 10);
const hortaliza = new Hortaliza("002", "Tomate", 2, "Verano", "rojo");
const fruta = new Fruta("003", "Manzana", 1, "España", " C");


function verProducto() {
  producto.verPropiedadesProducto();
}

function cambiarProducto() {
  producto.cambiarPropiedades("Producto actualizado", 15);
}

function borrarProducto(){
  delete producto;
}

function  verHortaliza(){
    hortaliza.verPropiedadesHortaliza();
}

function cambiarHortaliza(){
    hortaliza.cambiarPropiedades("invierno", "verde");
}

function borrarHortaliza(){
  delete hortaliza;
}


function verFruta(){
    fruta.verPropiedadesFruta();
}

function cambiarFruta(){
    fruta.cambiarPropiedades("América", "A y C");
}

function borrarFruta(){
  delete fruta;
}

window.onload = function () {
  document.getElementById("verProducto").addEventListener("click", verProducto);
  document.getElementById("cambiarProducto").addEventListener("click", cambiarProducto);
  document.getElementById("borrarProducto").addEventListener("click", borrarProducto);
  document.getElementById("verHortaliza").addEventListener("click", verHortaliza);
  document.getElementById("cambiarHortaliza").addEventListener("click", cambiarHortaliza);
  document.getElementById("borrarHortaliza").addEventListener("click", borrarHortaliza);
  document.getElementById("verFruta").addEventListener("click", verFruta);
  document.getElementById("cambiarFruta").addEventListener("click", cambiarFruta);
  document.getElementById("borrarFruta").addEventListener("click", borrarFruta);
};

