
function sumasAleatorias(){
    let numero1 = Math.floor(Math.random()*20)+1;
    console.log(numero1);
    let numero2 = Math.floor(Math.random()*20)+1;
    console.log(numero2);
    let error = document.getElementById("error");
    let info = document.getElementById("info");
    let suma = numero1 + numero2;

    let resultado = prompt("¿Cuál es el resultado?");
    try{
        if(isNaN(resultado)){
            let errorCadena = new Error("Debe de ser un número");
            error.textContent=errorCadena;
        }else if(suma == resultado){
            let cadena = "num1 : " + numero1 + " num2 " + numero2 + " = ";
            let infoCorrecto =cadena + suma;
            info.textContent= infoCorrecto;
        }
    }catch{
        let miError = new Error("Fallo");
        console.log(miError);
    }
}

window.onload = function(){
    document.getElementById("sumasAleatorias").addEventListener("click", sumasAleatorias);
}