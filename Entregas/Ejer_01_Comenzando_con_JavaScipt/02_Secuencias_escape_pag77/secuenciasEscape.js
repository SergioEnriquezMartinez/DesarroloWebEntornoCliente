function secuenciasEscape(){
    let nariz = "\..";
    let boca = "----------";
    let ojos = "\--";
    
    console.log(ojos + "\t\t"  + ojos 
            + "\n\t" +nariz     
            + "\n" +boca
    );
   
    alert(ojos + "\t\t"  + ojos 
            + "\n\t" +nariz     
            + "\n" +boca
    );

}

function secuenciaEscapeEmoticonos(){
    let ojo = "\u{1F440}";
    let narizDibujo = "\u{1F443}";
    let labios = "\u{1F444}";
    
    alert( ojo +  "\n" + narizDibujo + "\n" + labios); 
}

window.onload= function(){
    document.getElementById("secuenciasEscape").addEventListener("click", secuenciasEscape);
    document.getElementById("secuenciasEscapeEmoticonos").addEventListener("click", secuenciaEscapeEmoticonos);
}