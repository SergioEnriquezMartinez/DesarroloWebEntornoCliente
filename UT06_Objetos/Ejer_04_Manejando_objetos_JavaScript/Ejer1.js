class CicloFormativo {
    constructor(codigo, nombre_ciclo, grado, comunidad_autonoma, provincia, localidad){
        this.codigo = codigo;
        this.nombre_ciclo = nombre_ciclo;
        this.grado = grado;
        this.comunidad_autonoma = comunidad_autonoma;
        this.provincia = provincia;
        this.localidad = localidad;
    }

    getCodigo(){
        return this.codigo;
    }
    getNombreCiclo(){
        return this.nombre_ciclo;
    }
    getGrado(){
        return this.grado;
    }
    getComunidadAutonoma(){
        return this.comunidad_autonoma;
    }
    getProvincia(){
        return this.provincia;
    }
    getLocalidad(){
        return this.localidad;
    }

    setNombreCiclo(nombre_ciclo){
        this.nombre_ciclo = nombre_ciclo;
    }
    setGrado(grado){
        this.grado = grado;
    }
    setComunidadAutonoma(comunidad_autonoma){
        this.comunidad_autonoma = comunidad_autonoma;
    }
    setProvincia(provincia){
        this.provincia = provincia;
    }
    setLocalidad(localidad){
        this.localidad = localidad;
    }
}

const ciclosFormativos = [
    new CicloFormativo(1, "Desarrollo de Aplicaciones Web", "Superior", "Castilla y León", "Ávila", "Ávila"),
    new CicloFormativo(2, "Desarrollo de Aplicaciones Multiplataforma", "Superior", "Castilla y León", "Ávila", "Ávila"),
    new CicloFormativo(3, "Administración de Sistemas Informáticos en Red", "Superior", "Castilla y León", "Ávila", "Ávila"),
    new CicloFormativo(4, "Sistemas Microinformáticos y Redes", "Medio", "Castilla y León", "Ávila", "Ávila"),
    new CicloFormativo(5, "Formación Profesional Básica", "Básico", "Castilla y León", "Ávila", "Ávila"),
];

function pasarAJSON(){
    let ciclosJSON = JSON.stringify(ciclosFormativos);
    return ciclosJSON;
}

function pasarDeJSON(ciclosJSON){
    let ciclos = JSON.parse(ciclosJSON);
    return ciclos;
}

function crearCiclo(){
    let codigo = document.getElementById("codigo").value;
    let nombre_ciclo = document.getElementById("nombre").value;
    let grado = document.getElementById("grado").value;
    let comunidad_autonoma = document.getElementById("ccaa").value;
    let provincia = document.getElementById("provincia").value;
    let localidad = document.getElementById("localidad").value;

    let ciclo = new CicloFormativo(codigo, nombre_ciclo, grado, comunidad_autonoma, provincia, localidad);
    ciclosFormativos.push(ciclo);
}

function buscarCiclo() {
    let codigo = document.getElementById("codigo").value;
    let tabla = document.getElementById("tablaContenido");

    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }

    let ciclosEncontrados = [];
    
    for (let i = 0; i < ciclosFormativos.length; i++) {
        if (ciclosFormativos[i].getCodigo() == codigo) {
            ciclosEncontrados.push(ciclosFormativos[i]);
        }
    }

    mostrarCiclos(ciclosEncontrados);
}

function mostrarCiclos(ciclos){
    
    let tabla = document.getElementById("tablaContenido");

    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }

    ciclos.forEach(function(ciclo){
        let fila = document.createElement("tr");

        for (let propiedad in ciclo) {
            let celda = document.createElement("td");
            celda.textContent = ciclo[propiedad];
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    });
}

window.onload = function(){
    document.getElementById("botonCrear").addEventListener("click", crearCiclo);
    document.getElementById("botonBuscar").addEventListener("click", buscarCiclo);
    document.getElementById("botonMostrar").addEventListener("click", () => mostrarCiclos(ciclosFormativos));
    //document.getElementById("botonModificar").addEventListener("click", modificarCiclo);
}