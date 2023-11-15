
function preguntas(x,y,...mas){
    x = prompt("¿Cómo te llamas?");
    y = prompt("¿Cuántos años tienes");
    mas = prompt("¿Cuál es tu color preferido");
    mas = prompt("¿Lenguaje favorito?");
    mas = prompt("¿Qué hobbies tienes?");
    mas = prompt("Dime un número");

    console.log("Resultado con 2 respuestas : " + x,y);
    console.log("Resulado con 3 respuestas " + x,y, mas);
    console.log("Resulado con 4 respuestas " + x,y, mas, mas);
    console.log("Resulado con 5 respuestas " + x,y, mas, mas ,mas);
    console.log("Resulado con 6 respuestas " + x,y, mas, mas, mas ,mas);

}

window.onload = function(){
    document.getElementById("preguntas").addEventListener("click", preguntas);
}