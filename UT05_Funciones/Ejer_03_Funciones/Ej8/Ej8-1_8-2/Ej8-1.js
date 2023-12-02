const listaEventos = [

    {
        id: 476,
        evento: "Caída del Imperio Romano de Occidente"
    },
    {
        id: 1401,
        evento: "Diseño de las puertas del Baptisterio de Florencia"
    },
    {
        id: 1453,
        evento: "Caída de Constantinopla"
    },
    {
        id: 1760,
        evento: "Invención de la máquina de vapor"
    },
    {
        id: 1776,
        evento: "Declaración de la Independencia de los Estados Unidos"
    },
    {
        id: 1789,
        evento: "Revolución Francesa"
    },
    {
        id: 1904,
        evento: "Comienzo de la construcción del Canal de Panamá"
    },
    {
        id: 1917,
        evento: "Revolución Rusa"
    },
    {
        id: 1919,
        evento: "Tratado de Versalles"
    },
    {
        id: 1922,
        evento: "Caída del Imperio Otomano"
    },
    {
        id: 1936,
        evento: "Guerra Civil Española"
    },
    {
        id: 1939,
        evento: "Segunda Guerra Mundial"
    },
    {
        id: 1947,
        evento: "Comienzo de la Guerra Fría"
    },
    {
        id: 1948,
        evento: "Apartheid en Sudáfrica"
    },
    {
        id: 1955,
        evento: "Guerra de Vietnam"
    },
    {
        id: 1957,
        evento: "Creación de la Comunidad Económica Europea"
    },
    {
        id: 1959,
        evento: "Revolución Cubana"
    },
    {
        id: 1989,
        evento: "Caída del Muro de Berlín"
    },
    {
        id: 1991,
        evento: "Disolución de la Unión Soviética"
    },
    {
        id: 1992,
        evento: "Tratado de Maastricht"
    }
];
/*La justificacion del uso del foreach que se pide en el apartado 8-2 la podemos ver aqui, en un ejemplo real.
En este caso, el uso del foreach es para recorrer el array de objetos listaEventos y crear un div por cada uno de ellos.
Ademas lo combinamos con con el metodo sort para que nos los muestre de forma aleatoria.
*/
function crearElementos (){
    listaEventos.sort(() => Math.random() - 0.5).forEach(elemento => {
        const {id} = elemento;
        const {evento} = elemento;
        const div = document.createElement("div");
        div.setAttribute("id", id);
        div.textContent = evento;
        document.getElementById("listaEventos").appendChild(div);
    });
}

const respuestas = new Array();

function aniadirEventos(){
    document.getElementById("listaEventos").addEventListener("click", (e) => {
        if ("listaEventos" === e.target.id) return;
        if (respuestas.length < 5){
            e.target.classList.add("seleccionado");
            let texto = e.target.textContent;
            meterDatosSacarDatos(e, texto);
        } else {
            mostrarRespuestas();
        }
    })
}

function meterDatosSacarDatos(e, texto){
    const respuesta = {
        id: e.target.id,
        evento: texto
    }
    if (respuestas.includes(e.target)) {
        respuestas.splice(respuestas.indexOf(e.target), 1);
        e.target.classList.remove("seleccionado");
    } else {
        respuestas.push(respuesta);
    }
}

function mostrarRespuestas(){
    respuestas.sort((a,b) => a.id - b.id).forEach(elemento => {
        const {id} = elemento;
        const {evento} = elemento;
        const div = document.createElement("p");
        div.textContent = "El evento: " + evento + " ocurrió en el año: " + id;
        document.getElementById("respuestas").appendChild(div);
    });
}

window.onload = function(){
    crearElementos();
    aniadirEventos();
}
