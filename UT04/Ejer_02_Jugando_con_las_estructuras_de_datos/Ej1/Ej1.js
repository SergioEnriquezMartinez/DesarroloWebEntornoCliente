function generarCaracteres() {
  
  let contador = 0, aleatorio = 0, resultado = "", cadena = "";
  
  do {
    aleatorio = Math.floor(Math.random() * 16);
    if (aleatorio >= 0 && aleatorio < 10) {
      cadena = aleatorio.toString();
    } else {
      switch (aleatorio) {
        case 10:
          cadena = "A";
          break;
        case 11:
          cadena = "B";
          break;
        case 12:
          cadena = "C";
          break;
        case 13:
          cadena = "D";
          break;
        case 14:
          cadena = "E";
          break;
        case 15:
          cadena = "F";
          break;
      }
    }

    if(!resultado.includes(cadena)) {
      resultado += cadena + " ";
      contador++;
    }
  } while (contador < 16);
  document.getElementById("resultado").textContent = resultado;
}

window.onload = function () {
  document.getElementById("generar").addEventListener("click",generarCaracteres);
}
