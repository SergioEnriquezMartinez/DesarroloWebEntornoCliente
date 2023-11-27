function validarDni() {
  let dni = prompt("Introduce el DNI");
  let expDNI = /[klxyz0-9][0-9]{7}[A-Z]/;
  console.log(expDNI);
  if (expDNI.test(dni)) {
    console.log("El dni " + dni + " es correcto");
} else {
      console.log("El dni " + dni + " NO ES CORRECTO");
  }
}
function existeCaracter(){
    let cadena = prompt("Introduce una cadena ");
    let caracter = prompt("Introduce un cáracter: ");
    let expCaracter = new RegExp(caracter);
    console.log(expCaracter);
    if(expCaracter.test(cadena)){
        console.log("En " + cadena + " existe el caracter ---> " + caracter);
    }else{
        console.log("En " + cadena + " NO EXISTE el caracter");
    }
}
function empiezaYtermina(){
    let cadena = prompt("Introduzca la cadena (D y z): ");
    let expEmpiezaYTermina = /^D.+z$/;
    if(expEmpiezaYTermina.test(cadena)){
        console.log("La cadena " + cadena + " si cumple D y z");
    } else{
        console.log("La cadena " + cadena + " NO CUMPLE D y z");
    }
}

function expresionCompleja() {
  let expresionComp = /^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]{2,}[0-9]*[a-zñáéíóú]+$/;

  const valoresTest = ["Daa44a","Daa4aa","Daaa3A","Daa44aa","Daaa","daa44a","Da44a","Daa44"];

  for (testeo of valoresTest) {
    if (expresionComp.test(testeo)) {
      console.log("La cadena " + testeo + " SI CUMPLE la expresión");
    } else {
      console.log("La cadena " + testeo + " NO CUMPLE la expresión");
    }
  }
}

window.onload = function () {
  document.getElementById("existeCaracter").addEventListener("click", existeCaracter);
  document.getElementById("validarDni").addEventListener("click", validarDni);
  document.getElementById("empiezaYtermina").addEventListener("click", empiezaYtermina);
  document.getElementById("expresionCompleja").addEventListener("click", expresionCompleja);
    
};
