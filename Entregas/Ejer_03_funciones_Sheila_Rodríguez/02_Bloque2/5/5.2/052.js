let a = prompt("Introduce las cilindradas del vehículo");
let b = prompt("Introduce el peso para el vehículo");
const mas = Number(prompt("Introduce el resto 3 para numPasajeros, 4 para climatizador, 5 para radar, 6 para piloto automático"));

function datos(a,b, mas){
  console.log(`a : ${a}, b ${b}, mas ${mas}`);
  switch (mas) {
    case 3:
      console.log("Sidecar");
      break;
    case 4: 
      console.log("Coche");
    case 5: 
      console.log("Barco");
      break; 
    case 6:
      console.log("Avión");
      break;
    default:
      console.log('default');
  }
}

datos(a,b, mas);

window.onload = function(){
  document.getElementById("datos").addEventListener("click", datos);
}

