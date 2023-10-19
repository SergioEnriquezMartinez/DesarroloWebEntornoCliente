function alertBooleanos() {
  alert("El tipo de valor de 12 es: " + typeof 12);
  alert("El tipo de valor de 12.3 es: " + typeof 12.3);
  alert("El tipo de valor de 12*3 es: " + typeof (12 * 3));
  alert('El tipo de valor de "Hola" es: ' + typeof "Hola");
  alert("El tipo de valor de 'Hola' es: " + typeof "Hola");
  alert("El tipo de valor de Hola es: " + typeof Hola);
  alert("El tipo de valor de 1/0 es: " + typeof (1 / 0));
  alert("El tipo de valor de null es: " + typeof null);
  alert('El tipo de valor de {nombre:"Jorge"} es: ' + typeof { nombre: "Jorge" });
  alert("El tipo de valor de [1, 2, 3, 4, 5] es: " + typeof [1, 2, 3, 4, 5]);
  alert("El tipo de valor de true es: " + typeof true);
  alert("El tipo de valor de 12>3 es: " + typeof (12 > 3));
}

window.onload = function() {
    alertBooleanos();
}