
function cadenaNombreApellido(){
    let cadena = prompt("Introduce tu nombre y tus apellidos");
  
    let separaCadena = cadena.split(" ");
    let nombre = (separaCadena[0].slice(0,1).toUpperCase());
    let nombre1 = (separaCadena[0].slice(1,100).toLowerCase());
    let resultadoNombre = nombre+nombre1;
    
    let primerApellido = (separaCadena[1].slice(0,1).toUpperCase());
    let primerApellido1 =(separaCadena[1].slice(1,100).toLowerCase());
    let resutladoPrimerApellido = primerApellido+primerApellido1;

    let segundoApellido = separaCadena[2].slice(0,1).toUpperCase();
    let segundoApellido2 = separaCadena[2].slice(1,100).toLowerCase();
    let resultadoSegundoApellido = segundoApellido+segundoApellido2;

    console.log("Tu nombre es : " +resultadoNombre);
    console.log("Tu primer apellido es : " +resutladoPrimerApellido);
    console.log("Tu segundo apellido es : " +resultadoSegundoApellido);
       
}

window.onload = function (){
    document.getElementById("cadenaNombreApellido").addEventListener("click", cadenaNombreApellido);
}