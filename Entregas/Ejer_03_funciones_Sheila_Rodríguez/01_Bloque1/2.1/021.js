let altura = prompt("Introduce la altura del rectángulo");
let base = prompt("Introduce la base del rectángulo");

function funcionTradicional(a,b){
    let area = altura * base;
    let funcionTradicional=document.getElementById("funcionTradicional");
    funcionTradicional.textContent="";
    funcionTradicional.textContent = "El área del rectángulo es " + altura + " * " + base + " = " + area;
}

funcionAnonima = function(altura,base){ 
    return altura*base;
};

console.log("El área del rectángulo es " + funcionAnonima(altura,base));

function textoAnonima(){
    let funcionAnonimaTexto=document.getElementById("funcionAnonimaTexto");
    funcionAnonimaTexto.textContent="";
    funcionAnonimaTexto.textContent = "El área del rectángulo es " + altura + " * " + base + " = " + funcionAnonima(altura,base);
}

window.onload = function(){
    document.getElementById("funcionTradicional").addEventListener("click", funcionTradicional);
    document.getElementById("funcionAnonimaTexto").addEventListener("click", textoAnonima);
    document.getElementById("funcionFlecha").addEventListener("click", ()=>{
        let area = altura * base;
        let funcionFlecha = document.getElementById("funcionFlecha");
        funcionFlecha.textContent= "";
        funcionFlecha.textContent= "El área del rectángulo es " + altura + " * " + base + " = " + area;
    });
}