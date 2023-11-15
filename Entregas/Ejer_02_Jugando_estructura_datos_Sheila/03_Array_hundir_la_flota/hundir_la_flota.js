const tableroDinamico = new Array();
const barcos3Pos = new Array();
const barcos4Pos = new Array();
const barcos5Pos = new Array();
let derecha = 0;
let izquierda = 0;
let abajo = 0;
let arriba = 0;


function generarTablon(){
    for(let i = 0; i<7; i++){
        tableroDinamico [i] = new Array();
        for(let j = 0; j<10; j++){
            tableroDinamico[i][j] =i+j;
        }
    }
}

function generarBarcos() {
    //barco 3 posiciones
    for(let i = 0 ; i<1 ; i++){
        barcos3Pos[i] = new Array();
        for(let j = 0 ; j < 3 ; j++){
            barcos3Pos[i][j] ="barco3";
        }
    }
    /*tableroDinamico[5][9] = barcos3Pos;
    tableroDinamico[6][9] = barcos3Pos;
    tableroDinamico[7][9] = barcos3Pos;*/
    
    //barco 4 posiciones
    for(let i = 0 ; i<1 ; i++){
        barcos4Pos[i] = new Array();
        for(let j = 0 ; j < 4 ; j++){
            barcos4Pos[i][j] ="barco4";
        }
    }
    /*tableroDinamico[2][2] = barcos4Pos;
    tableroDinamico[2][3] = barcos4Pos;
    tableroDinamico[2][4] = barcos4Pos;
    tableroDinamico[2][5] = barcos4Pos;*/

    //barco 5 posiciones
    for(let i = 0; i<1; i++){
        barcos5Pos[i]=new Array();
        for(let j=0; j<5; j++){
            barcos5Pos[i][j]="barco5";
        }
    }
    
    /*tableroDinamico[9][5]=barcos5Pos;
    tableroDinamico[9][6]=barcos5Pos;
    tableroDinamico[9][7]=barcos5Pos;
    tableroDinamico[9][8]=barcos5Pos;
    tableroDinamico[9][9]=barcos5Pos;*/

tableroDinamico.push(...barcos3Pos, ...barcos4Pos, ...barcos5Pos);

console.log(tableroDinamico);
tableroDinamico.sort(function(){
    return Math.random() - 0.5
});
console.log(tableroDinamico);
    
    
}



window.onload=function(){
    document.getElementById("hundir").addEventListener("click", generarTablon);
    document.getElementById("barcos").addEventListener("click", generarBarcos);
}

