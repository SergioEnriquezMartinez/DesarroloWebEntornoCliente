const carton = new Map();

function crearMapa(){
  for(let i = 0; i <27; i++){
    valor = "--" + i;
    carton.set(i,valor);
  }
  carton.forEach(function(valor,clave){
    console.log(`Clave: ${clave}, Valor : ${valor}`)
  });
  alert("--cartón generado");
}

function recuperarAleatorio(min, max){
  let valorMaximo = max - min +1;
  let valor = parseInt(Math.random()*valorMaximo)+min;
  return valor;
}

function rellenarPrimeros9(){
  let limiteInferior = 1;
  let limiteSuperior = 10;
  let indiceInferior = 0;
  let indiceSuperior = 2;
  let valorAleatorio;
  let indiceAleatorio;

  for(let i = 0; i<9; i++){
    valorAleatorio=recuperarAleatorio(limiteInferior,limiteSuperior);
    indiceAleatorio=recuperarAleatorio(indiceSuperior,indiceInferior);
    carton.set(indiceAleatorio,valorAleatorio);
    limiteInferior = limiteInferior + 10;
    limiteSuperior = limiteInferior + 10;
    indiceInferior = indiceInferior + 3;
    indiceSuperior = indiceSuperior + 3;
  }
}

function rellenarUltimos(){
  let completado = false;
  let contadorUltimos = 0;
  let seisUltimos = [];
  let comprobar = [false, false, false, false, false,
                    false, false, false, false];
  let cadenaMostrar="";
  while(completado == false){
    let ultimos = recuperarAleatorio(1,9);

    if(comprobar[ultimos] != true){
      seisUltimos[contadorUltimos] = ultimos;
      comprobar[ultimos] = true;
      contadorUltimos = contadorUltimos +1;
    }
    if(contadorUltimos == 6){
      completado = true;
    }
  }
  for(let i= 0 ; i< 6 ; i++){
    cadenaMostrar = cadenaMostrar + seisUltimos[i]+",";
  }
  //carton.set(cadenaMostrar);
  alert("la cadena tiene : " +cadenaMostrar);
  
}

function mostrarMapa(){
  let cadena = "";
  let cadenaTres=1;
  let marcador = 10;
  for(const numero of carton){
      //cadena = cadena + "\n" +numero;
      cadena = cadena + "," +numero ;
    if(cadenaTres==3){
      cadena = cadena + "," +numero + "\n";
      cadenaTres =0;
      marcador = marcador +10;
    }
    cadenaTres=cadenaTres+1;
  
  }
  alert(cadena);
}




window.onload = function () {
  document.getElementById("generar").addEventListener("click", crearMapa);
  document.getElementById("generarAleatorio").addEventListener("click",rellenarPrimeros9);
  document.getElementById("mostrar").addEventListener("click", mostrarMapa);
  document.getElementById("mostrarUltimos").addEventListener("click", rellenarUltimos);
};






