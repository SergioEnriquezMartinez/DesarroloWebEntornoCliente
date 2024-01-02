var arrayCiclos = [];
var arrayBusqueda = [];
var posicionGlobal = -1;
var contadorAutomaticos = 0;
console.log(arrayCiclos);
class CiclosFormativos {
  constructor(
    codigo,
    nombreCiclo,
    grado,
    comunidadAutonoma,
    provincia,
    localidad
  ) {
    this.codigo = codigo;
    this.nombreCiclo = nombreCiclo;
    this.grado = grado;
    this.comunidadAutonoma = comunidadAutonoma;
    this.provincia = provincia;
    this.localidad = localidad;
  }
  setCodigo(codigo) {
    this.codigo = codigo;
  }
  setNombreCiclo(nombreCiclo) {
    this.nombreCiclo = nombreCiclo;
  }
  setGrado(grado) {
    this.grado = grado;
  }
  setComunidadAutonoma(comunidadAutonoma) {
    this.comunidadAutonoma = comunidadAutonoma;
  }
  setProvincia(provincia) {
    this.provincia = provincia;
  }
  setLocalidad() {
    this.localidad = this.localidad;
  }
}
function aniadirAuto() {
  if(contadorAutomaticos == 0){

    let grado1 = new CiclosFormativos(
      1,
      "DAW",
      "Superior",
      "Madrid",
      "Madrid",
      "Torrejon"
      );
  let grado2 = new CiclosFormativos(
    2,
    "DAW",
    "Superior",
    "Madrid",
    "Madrid",
    "Alcala"
    );
  let grado3 = new CiclosFormativos(
    3,
    "DAW",
    "Superior",
    "CyL",
    "Avila",
    "Arevalo"
    );
    let grado4 = new CiclosFormativos(
    4,
    "Cocina",
    "Medio",
    "CyL",
    "Salamanca",
    "Salamanca"
  );
  let grado5 = new CiclosFormativos(
    5,
    "Mecanica",
    "Medio",
    "CyL",
    "Salamanca",
    "Santa Marta"
    );
    arrayCiclos.push(grado1, grado2, grado3, grado4, grado5);
    contadorAutomaticos++;
  }
  }
  function crearCiclo() {
    let codigo = document.getElementById("codigo").value;
    let ciclo = document.getElementById("nombreC").value;
  let nombreGrado = document.getElementById("grado").value;
  let comunidadAutonoma = document.getElementById("comunidadA").value;
  let provincia = document.getElementById("provincia").value;
  let localidad = document.getElementById("localidad").value;

  var objetoCiclo = new CiclosFormativos(
    codigo,
    ciclo,
    nombreGrado,
    comunidadAutonoma,
    provincia,
    localidad
  );
  arrayCiclos.push(objetoCiclo);
  var formulario = document.getElementById("formulario");
  formulario.reset();
}
function crearContenido(id, contenido, namePadre) {
  let divHijo = document.createElement("div");
  divHijo.id = id;
  divHijo.textContent = contenido;
  divHijo.classList.add("mostrarDinamico");
  let padre = document.getElementById(namePadre);
  padre.appendChild(divHijo);
}
function crearBotones(id, padre) {
  /*divHijo1.onclick = function () {
    deleteCiclo(divHijo1.id);
  };*/
  let divHijo1 = document.createElement("div");
  let divHijo2 = document.createElement("div");
  divHijo1.id = id + "eli";
  divHijo2.id = id + "mod";
  divHijo1.classList.add("eliminar");
  divHijo2.classList.add("modificar");

  divHijo1.textContent = "Eliminar";
  divHijo2.textContent = "Modificar";
  let padrazo = document.getElementById(padre);
  padrazo.appendChild(divHijo1);
  padrazo.appendChild(divHijo2);
}
function padreBotones(id) {
  let padre = document.createElement("div");
  padre.id = "padreBotones" + id;
  let yayo = document.getElementById("botones");
  yayo.appendChild(padre);
  padre.classList.add("flex");
}
function cleanView() {
  var codigo = document.getElementById("codigoCreado");
  var nombre = document.getElementById("nombreCiclo");
  var grado = document.getElementById("gradoCreado");
  var ca = document.getElementById("comunidadAutonoma");
  var pc = document.getElementById("provinciaCreada");
  var lc = document.getElementById("localidadCreada");
  var botones = document.getElementById("botones");
  codigo.textContent = "";
  nombre.textContent = "";
  grado.textContent = "";
  ca.textContent = "";
  pc.textContent = "";
  lc.textContent = "";
  botones.textContent = "";
  codigo.classList.add("dynamic-div");
}
function mostrar() {
  cleanView();

  for (let i = 0; i < arrayCiclos.length; i++) {
    crearContenido(
      arrayCiclos[i].codigo,
      arrayCiclos[i].codigo,
      "codigoCreado"
    );
    crearContenido(
      arrayCiclos[i].codigo,
      arrayCiclos[i].nombreCiclo,
      "nombreCiclo"
    );
    crearContenido(arrayCiclos[i].codigo, arrayCiclos[i].grado, "gradoCreado");
    crearContenido(
      arrayCiclos[i].codigo,
      arrayCiclos[i].comunidadAutonoma,
      "comunidadAutonoma"
    );
    crearContenido(
      arrayCiclos[i].codigo,
      arrayCiclos[i].provincia,
      "provinciaCreada"
    );
    crearContenido(
      arrayCiclos[i].codigo,
      arrayCiclos[i].localidad,
      "localidadCreada"
    );
    padreBotones(i);
    crearBotones(i, "padreBotones" + i);
  }
}
function printBuscador() {
  cleanView();

  for (let i = 0; i < arrayBusqueda.length; i++) {
    crearContenido(
      arrayBusqueda[i].codigo,
      arrayBusqueda[i].codigo,
      "codigoCreado"
    );
    crearContenido(
      arrayBusqueda[i].codigo,
      arrayBusqueda[i].nombreCiclo,
      "nombreCiclo"
    );
    crearContenido(
      arrayBusqueda[i].codigo,
      arrayBusqueda[i].grado,
      "gradoCreado"
    );
    crearContenido(
      arrayBusqueda[i].codigo,
      arrayBusqueda[i].comunidadAutonoma,
      "comunidadAutonoma"
    );
    crearContenido(
      arrayBusqueda[i].codigo,
      arrayBusqueda[i].provincia,
      "provinciaCreada"
    );
    crearContenido(
      arrayBusqueda[i].codigo,
      arrayBusqueda[i].localidad,
      "localidadCreada"
    );
    padreBotones(i);
    crearBotones(i, "padreBotones" + i);
  }
}
function deleteCiclo(id) {
  let posicion = Number(id[0]);
  console.log("Esta es la posición" + posicion);
  arrayCiclos.splice(posicion, 1);
  mostrar();
}
function modificarCiclo(id) {
  console.log(arrayCiclos);
  console.log("Estamos en modificar");
  let posicion = Number(id[0]);
  posicionGlobal = posicion;
  let codigo = (document.getElementById("codigo").value =
    arrayCiclos[posicion].codigo);
  let ciclo = (document.getElementById("nombreC").value =
    arrayCiclos[posicion].nombreCiclo);
  let nombreGrado = (document.getElementById("grado").value =
    arrayCiclos[posicion].grado);
  let comunidadAutonoma = (document.getElementById("comunidadA").value =
    arrayCiclos[posicion].comunidadAutonoma);
  let provincia = (document.getElementById("provincia").value =
    arrayCiclos[posicion].provincia);
  let localidad = (document.getElementById("localidad").value =
    arrayCiclos[posicion].localidad);
}
function conocerClick(event) {
  let botonClickeado = event.target;
  if (botonClickeado.classList.contains("modificar")) {
    console.log("Pasamos por la función conocer Click");
    let id1 = event.target.id;
    modificarCiclo(id1);
  } else if (botonClickeado.classList.contains("eliminar")) {
    let id2 = event.target.id;
    deleteCiclo(id2);
  }
}
function actualizarCiclo() {
  if (posicionGlobal != -1) {
    let codigo = document.getElementById("codigo").value;
    let ciclo = document.getElementById("nombreC").value;
    let nombreGrado = document.getElementById("grado").value;
    let comunidadAutonoma = document.getElementById("comunidadA").value;
    let provincia = document.getElementById("provincia").value;
    let localidad = document.getElementById("localidad").value;
     

    var objetoCiclo = new CiclosFormativos(
      codigo,
      ciclo,
      nombreGrado,
      comunidadAutonoma,
      provincia,
      localidad
    );
    arrayCiclos[posicionGlobal] = objetoCiclo;
    var formulario = document.getElementById("formulario");
    formulario.reset();
    posicionGlobal = -1;
    mostrar();
  }
}
function buscar() {
  arrayBusqueda = [];
  let variables = [];
  let resultadoFiltrado = [];
  let resultadoFinal = [];

  cleanView();
  let codigo = document.getElementById("codigo").value;
  if(codigo !=""){
    codigo = parseInt(codigo);
  }
  console.log(codigo);
  let ciclo = document.getElementById("nombreC").value;
  console.log(ciclo);
  let nombreGrado = document.getElementById("grado").value;
  console.log(nombreGrado);
  let comunidadAutonoma = document.getElementById("comunidadA").value;
  console.log(comunidadAutonoma);
  let provincia = document.getElementById("provincia").value;
  console.log(provincia);
  let localidad = document.getElementById("localidad").value;
  console.log(localidad);
  variables.push(
    codigo,
    ciclo,
    nombreGrado,
    comunidadAutonoma,
    provincia,
    localidad
  );

  let atributos = ["codigo", "nombreCiclo", "grado", "comunidadAutonoma", "provincia", "localidad"];
  for (let i = 0; i < arrayCiclos.length; i++) {
    let cumpleCriterios = true;
    for (let j = 0; j < variables.length; j++) {
      if (variables[j] !== "" && arrayCiclos[i][atributos[j]] !== variables[j]) {
        cumpleCriterios = false;
        //break;
      }
    }
    
    if (cumpleCriterios) {
      arrayBusqueda.push(arrayCiclos[i]);
    }
  }
  printBuscador();
}
window.onload = function () {
  document.getElementById("mostrar").addEventListener("click", mostrar);
  document.getElementById("aniadir").addEventListener("click", crearCiclo);
  document
    .getElementById("actualizar")
    .addEventListener("click", actualizarCiclo);
  document.getElementById("buscar").addEventListener("click", buscar);
  document.getElementById("aniadirAuto").addEventListener("click", aniadirAuto);
  document.addEventListener("click", function (event) {
    conocerClick(event);
  });
  console.log(arrayCiclos);
};
