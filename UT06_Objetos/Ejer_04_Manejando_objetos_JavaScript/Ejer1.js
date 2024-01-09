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
    new CicloFormativo(6, "Marketing y Publicidad", "Superior", "Madrid", "Madrid", "Madrid"),
    new CicloFormativo(7, "Diseño Gráfico", "Superior", "Cataluña", "Barcelona", "Barcelona"),
    new CicloFormativo(8, "Turismo y Hostelería", "Medio", "Andalucía", "Málaga", "Málaga"),
    new CicloFormativo(9, "Energías Renovables", "Superior", "Galicia", "A Coruña", "A Coruña"),
    new CicloFormativo(10, "Automatización y Robótica Industrial", "Superior", "País Vasco", "Bilbao", "Bilbao"),
    new CicloFormativo(11, "Gestión de Recursos Humanos", "Superior", "Comunidad Valenciana", "Valencia", "Valencia"),
    new CicloFormativo(12, "Arte y Diseño", "Medio", "Andalucía", "Sevilla", "Sevilla"),
    new CicloFormativo(13, "Desarrollo de Videojuegos", "Superior", "Cataluña", "Girona", "Girona"),
    new CicloFormativo(14, "Diseño de Moda", "Superior", "Comunidad Valenciana", "Alicante", "Alicante"),
    new CicloFormativo(15, "Gastronomía y Cocina", "Medio", "País Vasco", "San Sebastián", "San Sebastián")
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
    document.getElementById("formCrearCF").reset();
    mostrarCiclos(ciclosFormativos);
}

function buscarCiclo() {
    let ciclosEncontrados = [];
    let valuesRecogidos = [];
    let propiedades = ["codigo", "nombre_ciclo", "grado", "comunidad_autonoma", "provincia", "localidad"];

    let codigo = document.getElementById("codigo").value;
    let nombre_ciclo = document.getElementById("nombre").value;
    let grado = document.getElementById("grado").value;
    let comunidad_autonoma = document.getElementById("ccaa").value;
    let provincia = document.getElementById("provincia").value;
    let localidad = document.getElementById("localidad").value;

    let tabla = document.getElementById("tablaContenido");

    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }

    valuesRecogidos.push(codigo, nombre_ciclo, grado, comunidad_autonoma, provincia, localidad);

    for (let i = 0; i < ciclosFormativos.length; i++) {
        let coincide = true;

        for (let j = 0; j < valuesRecogidos.length; j++) {
            if (valuesRecogidos[j] != "" && ciclosFormativos[i][propiedades[j]] != valuesRecogidos[j]) {
                coincide = false;
                }
        }

        if (coincide) {
            ciclosEncontrados.push(ciclosFormativos[i]);
        }
    }

    mostrarCiclos(ciclosEncontrados);
    document.getElementById("formCrearCF").reset();
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
        
        let botonModificar = document.createElement("button");
        botonModificar.textContent = "Modificar";
        botonModificar.classList.add("botonModificar");
        botonModificar.addEventListener("click", () => {
            document.getElementById("codigo").value = ciclo.codigo;
            document.getElementById("codigo").disabled = true;
            document.getElementById("nombre").value = ciclo.nombre_ciclo;
            document.getElementById("grado").value = ciclo.grado;
            document.getElementById("ccaa").value = ciclo.comunidad_autonoma;
            document.getElementById("provincia").value = ciclo.provincia;
            document.getElementById("localidad").value = ciclo.localidad;
        });

        let celdaBotonModificar = document.createElement("td");
        celdaBotonModificar.appendChild(botonModificar);
        fila.appendChild(celdaBotonModificar);

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("botonEliminar");
        botonEliminar.addEventListener("click", () => {
            let posicion = ciclosFormativos.indexOf(ciclo);
            ciclosFormativos.splice(posicion, 1);
            mostrarCiclos(ciclosFormativos);
        });

        let celdaBotonEliminar = document.createElement("td");
        celdaBotonEliminar.appendChild(botonEliminar);
        fila.appendChild(celdaBotonEliminar);

        tabla.appendChild(fila);
    });
}

function modificarCiclo(){
    let codigo = document.getElementById("codigo").value;
    let nombre_ciclo = document.getElementById("nombre").value;
    let grado = document.getElementById("grado").value;
    let comunidad_autonoma = document.getElementById("ccaa").value;
    let provincia = document.getElementById("provincia").value;
    let localidad = document.getElementById("localidad").value;

    ciclosFormativos.forEach(function(ciclo){
        if (ciclo.getCodigo() == codigo) {
            ciclo.setNombreCiclo(nombre_ciclo);
            ciclo.setGrado(grado);
            ciclo.setComunidadAutonoma(comunidad_autonoma);
            ciclo.setProvincia(provincia);
            ciclo.setLocalidad(localidad);
        }
    });

    document.getElementById("codigo").disabled = false;
    mostrarCiclos(ciclosFormativos);
    document.getElementById("formCrearCF").reset();
}

window.onload = function(){
    document.getElementById("botonCrear").addEventListener("click", crearCiclo);
    document.getElementById("botonBuscar").addEventListener("click", buscarCiclo);
    document.getElementById("botonMostrar").addEventListener("click", () => mostrarCiclos(ciclosFormativos));
    document.getElementById("botonModificar").addEventListener("click", () => modificarCiclo());
}