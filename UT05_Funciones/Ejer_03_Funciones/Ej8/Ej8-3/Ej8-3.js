function jugar() { 
    const valoresOriginales = [10, 20, 30, 40, 50];
    
    const valoresModificados = valoresOriginales.map((valor, indice) => {
        if (Math.random() < 0.5) {
            return valor * 2;
        }
        return valor;
    });
    
    console.log("¡Segundo jugador! Intenta adivinar qué valores han cambiado.");
    
    const valoresAdivinados = [];
    for (let i = 0; i < valoresOriginales.length; i++) {
        const adivinanza = parseInt(prompt(`Introduce tu adivinanza para el valor en la posición ${i}:`));
        valoresAdivinados.push(adivinanza);
    }
    
    console.log("\nValores Originales:", valoresOriginales);
    console.log("Valores Modificados:", valoresModificados);
    console.log("Valores Adivinados por el Segundo Jugador:", valoresAdivinados);
    
    const aciertos = valoresOriginales.filter((valor, indice) => valor === valoresModificados[indice]).length;
    (`\nEl Segundo Jugador ha acertado ${aciertos} valores.`);
}



window.onload = function(){
    jugar();
}