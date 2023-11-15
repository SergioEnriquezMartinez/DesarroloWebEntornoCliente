
let numDiscos = 5;
let torre1 = 1;
let torre2 = 2;
let torre3 = 3;

torreHanoi(numDiscos, torre1, torre2, torre3);

function torreHanoi(numDiscos, ori, des, aux){
    if(numDiscos == 1){
        console.log("Mueve el disco " + numDiscos + " desde la torre" + ori + " hasta la torre " + des);
    }else{
        torreHanoi(numDiscos-1, ori, aux, des);
        console.log("Mueve el disco " + numDiscos + " desde la torre" + ori + " hasta la torre " + des);
        torreHanoi(numDiscos-1, aux, des, ori);
    }
}

window.onload = function(){
    document.getElementById("torreHanoi").addEventListener("click", torreHanoi);
}