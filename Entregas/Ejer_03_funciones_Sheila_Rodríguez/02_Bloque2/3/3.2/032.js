
var arrayPrincipal =[];

function array(){
    let limiteInferior = 1;
    let limiteSuperior = 100;
    let valorAleatorio;

    for(let i = 0; i<9; i++){
        valorAleatorio=recuperarAleatorio(limiteInferior,limiteSuperior);
        arrayPrincipal.push(valorAleatorio);
    }
    console.log("Array creado --> " + arrayPrincipal);

    console.log("--------------------------------");
    let ordenarArray = arrayPrincipal.length;
    for(let i=0; i < ordenarArray; i++){
      for(let j=0; j < ordenarArray; j++){
        if(j+1 !== ordenarArray){
          if(arrayPrincipal[j] > arrayPrincipal[j+1]){
            let swapElement = arrayPrincipal[j+1];
            arrayPrincipal[j+1] = arrayPrincipal[j];
            arrayPrincipal[j] = swapElement;
          }
        }  
      }
    }
    console.log("ordenar array de menor a mayor --> " + arrayPrincipal);
    
    console.log("--------------------------------");
    for(i= arrayPrincipal.length; i>0 ; i--){
        const x = Math.floor(Math.random()* (i+1));
        const temporal = arrayPrincipal[i];
        arrayPrincipal[i] = arrayPrincipal[x];
        arrayPrincipal[x] = temporal;
    }
    console.log("Desordenar el array " + arrayPrincipal);
}

function recuperarAleatorio(min,max){
    let valorMaximo = max - min +1;
    let valor = parseInt(Math.random()*valorMaximo)+min;
    return valor;
}



window.onload = function(){
    document.getElementById("array").addEventListener("click", array);
}