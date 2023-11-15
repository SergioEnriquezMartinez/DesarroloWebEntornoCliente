let completado = false;
let aleatoriosArray = [];
let comprobarArray = [];
let rango = 0;
let numerosAleatorio;
let cadena="";

function rellenaArray() {
    while (completado == false) {
        numerosAleatorio = parseInt(Math.random() * 10);
        let comprobacion = comprobarArray.includes(numerosAleatorio);
        if (comprobacion == false) {
            aleatoriosArray.push(numerosAleatorio);
            rango++;
            if (rango == 10) {
                completado == true;
            }
            console.log(numerosAleatorio);
        }
        comprobarArray.push(numerosAleatorio);
    }
    console.log(aleatoriosArray);
}

function muestraValores(){
    let cadena = "";
  for(const numero of aleatoriosArray){
      //cadena = cadena + "\n" +numero;
      cadena = cadena + "," +numero ;
    
  
  }
  alert(cadena);
}




window.onload = function () {
    document.getElementById("rellenar").addEventListener("click", rellenaArray);
    document.getElementById("mostrar").addEventListener("click", muestraValores);
}






