
function acontecimientos(){
    let acontecimiento1 = prompt("Introduce un acontecimiento histórico(empieza por el año)");
    let acontecimiento2 = prompt("Introduce un acontecimiento histórico(empieza por el año)");
    let acontecimiento3 = prompt("Introduce un acontecimiento histórico(empieza por el año)");
    let acontecimiento4 = prompt("Introduce un acontecimiento histórico(empieza por el año)");
    let acontecimiento5 = prompt("Introduce un acontecimiento histórico(empieza por el año)");
    let acontecimiento6 = "2019,COVID";
    let acontecimient7 = "2001, torres Gemelas";
    let acontecimient8 = "1989, Caída del Muro de Berlín"
    let acontecimiento9 = "1968, Olimpiadas México";
    let acontecimiento10 = "1994, Lanzamiento de EZLN";
    let acontecimiento11 = "2012, Movimiento yo soy 132 en la Ibero";
    let acontecimiento12 = "1963, Martín Luther King";
    let acontecimiento13 = "2007, Masacre de Virgina Tech" ;
    let acontecimiento14 = "1929, Crisis econónica";
    let acontecimiento15 = "1962, Crisis de los misiles";
    let acontecimiento16 = "1973, Golpe de Estado en Chile";
    let acontecimiento17 = "1979, Triunfo de la Revolución Sandinista";
    let acontecimiento18 = "2011, Ocupa Wall Street";
    let acontecimiento19 = "1969, Festival Woodstock";
    let acontecimiento20 = "2014, Desaparición en Ayotzinapa";

    const ordenarAcontecimiento=[
        acontecimiento1, acontecimiento2, acontecimiento3, acontecimiento4, acontecimiento5,
        acontecimiento6, acontecimient7, acontecimient8, acontecimiento9, acontecimiento10,
        acontecimiento11, acontecimiento12, acontecimiento13, acontecimiento14, acontecimiento15,
        acontecimiento16, acontecimiento17, acontecimiento18, acontecimiento19, acontecimiento20
    ];


    ordenarAcontecimiento.sort();
    ordenarAcontecimiento.forEach(element => {
        console.log(element);
    });
    
}

window.onload = function(){
    document.getElementById("acontecimientos").addEventListener("click", acontecimientos);
}