

function juegoArray(){
    const numerosArray = [10,4,8,2,3];  
    let modifica1 = prompt("Introduce número para cambiar en el array");
    modifica1 = 2 * modifica1;
    //console.log("Modifica1 " + modifica1);
    let modifica2 = prompt("introduce número para cambiar en el array");
    modifica2 = 2 * modifica2;
    //console.log("Modifica 2 " + modifica2);
    numerosArray.push(modifica1, modifica2);
    console.log("Array : " + numerosArray);
    numerosArray.splice(3,2);
    console.log("El nuevo array es " + numerosArray);

    let adivina1 = prompt ("¿Qué numero ha cambiado?");
    let adivina2 = prompt("¿Qué número ha cambiado?");
    do{
        adivina1 = prompt("Sigue intentandolo");
    }while((adivina1 == modifica1)){
        alert("Número encontrado");
    }
}


window.onload = function(){
    document.getElementById("juegoArray").addEventListener("click", juegoArray);
}