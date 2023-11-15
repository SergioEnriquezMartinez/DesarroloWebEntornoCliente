function numAleatorioTortuga1(){
    let numAleatorioTortuga1= Math.floor(Math.random()*10)+1;
    //console.log(numAleatorioTortuga1);
    let numAleatorioTortuga11 = Math.floor(Math.random()*3)+1;
    //console.log(numAleatorioTortuga11);
    let tortuga = document.getElementById("tortuga1");
    async function carrera(){
        let espacio = await(numAleatorioTortuga1);
        console.log(espacio);
        if(espacio == 1){
            tortuga.classList.add("moverse");
        }else {
            tortuga.classList.add("moverse");
        }
    }
    setTimeout(() => {
        carrera();
    },1000);
}

function numAleatorioTortuga2(){
    let numAleatorioTortuga2= Math.floor(Math.random()*10)+1;
    console.log(numAleatorioTortuga2);
    let numAleatorioTortuga22= Math.floor(Math.random()*3)+1;
    console.log(numAleatorioTortuga22);
}

function numAleatorioTortuga3(){
    let numAleatorioTortuga3= Math.floor(Math.random()*10)+1;
    console.log(numAleatorioTortuga3);
    let numAleatorioTortuga33= Math.floor(Math.random()*3)+1;
    console.log(numAleatorioTortuga33);
}


window.onload = function(){
    document.getElementById("tortuga1").addEventListener("click", numAleatorioTortuga1);
    document.getElementById("tortuga2").addEventListener("click", numAleatorioTortuga2);
    document.getElementById("tortuga3").addEventListener("click", numAleatorioTortuga3);    
}