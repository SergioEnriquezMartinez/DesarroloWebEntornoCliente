//-----------APARTADO 6.1----------------
function voltearCadena() {
    let cadena = document.getElementById("cadena").value;
    
    function voltear(cadena) {
      if (cadena === "") return "";
      else return voltear(cadena.substr(1)) + cadena[0];
    }

    document.getElementById("resultadoCadena").textContent = voltear(cadena);
}
/*La funcion voltearCadena simplemente sirve para recoger la cadena y mostrar el resultado
La funcion voltear recibe por parametro la cadena recogida anteriormente y se encarga de voltear la cadena
En cada llamada comprueba si la cadena esta vacia o no
Vamos dividiendo la cadena mediante recursividad hasta que se encuentre vacía, momento en el que todas las llamadas tienen un return*/ 

//----------------APARTADO 6.2----------------
function calcularN() {
    let num = document.getElementById("numero").value;
    
    function fibonnacci(num) {
      if (num <= 0) return 0;
      else if (num == 1) return 1;
      else return fibonnacci(num - 1) + fibonnacci(num - 2);
    }

    document.getElementById("resultadoFibonnacci").textContent = fibonnacci(num);

    function factorial(num) {
      if (num == 0) return 1;
      else return num * factorial(num - 1);
    }

    document.getElementById("resultadoFactorial").textContent = factorial(num);
}

window.onload = function() {
    document.getElementById("boton1").addEventListener("click", voltearCadena);
    document.getElementById("boton2").addEventListener("click", calcularN);
}