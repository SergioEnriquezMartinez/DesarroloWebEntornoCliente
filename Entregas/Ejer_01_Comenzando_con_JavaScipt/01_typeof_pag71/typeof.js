function operadorTypeof(){
    let numero = typeof 12 ;
    let string = typeof "hola" ;
    let undefined = typeof hola;
    let object = typeof null;
    let boolean = typeof true;
    let funcion = typeof function nuevaFuncion() {}  
    alert("Typeof de número es " +numero +"\n"+
        "Typeof de string es " +string +"\n"+
        "Typeof de undefined es " +undefined +"\n"+
        "Typeof de object es " +object +"\n"+
        "Typeof de boolean es " +boolean +"\n"+
        "Typeof de funcion es " +funcion +"\n"
    );
}

window.onload= function(){
    document.getElementById("typeof").addEventListener("click", operadorTypeof);
}