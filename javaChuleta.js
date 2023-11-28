// Crear un array vacío
let miArray = [];

// Crear un array con elementos
let otroArray = [1, 2, 3, 4, 5];

// Crear un array con diferentes tipos de datos
let arrayMixto = ["Hola", 42, true, "Mundo"];

// Crear un array utilizando el constructor Array
let arrayConstructor = new Array("Manzana", "Banana", "Naranja");

// Acceder a elementos del array
console.log(otroArray[0]); // Imprime: 1

// Modificar un elemento del array
otroArray[1] = 10;

// Obtener la longitud del array
let longitud = otroArray.length;

// Agregar un elemento al final del array
otroArray.push(6);

// Eliminar el último elemento del array
otroArray.pop();

// Iterar sobre los elementos del array
for (let i = 0; i < otroArray.length; i++) {
  console.log(otroArray[i]);
}

// O utilizar forEach para iterar
otroArray.forEach(function (elemento) {
  console.log(elemento);
});

// Crear un array
let miArray2 = [1, 2, 3, 4, 5];

// Iterar sobre los elementos del array usando for...of
for (let elemento of miArray2) {
  console.log(elemento);
}
// Resultado: Imprimirá cada elemento del array en la consola

// Array de números desordenados
let numeros = [5, 2, 9, 1, 5, 6];

// Utilizar la función sort para ordenar los números de forma ascendente
let numerosOrdenadosAscendente = numeros.sort(function(a, b) {
  return a - b;
});

console.log("Ascendente:", numerosOrdenadosAscendente);
// Resultado: Ascendente: [1, 2, 5, 5, 6, 9]

// Utilizar la función sort para ordenar los números de forma descendente
let numerosOrdenadosDescendente = numeros.sort(function(a, b) {
  return b - a;
});

console.log("Descendente:", numerosOrdenadosDescendente);
// Resultado: Descendente: [9, 6, 5, 5, 2, 1]

// Array que deseamos ordenar de forma aleatoria
let miArray4 = [1, 2, 3, 4, 5];

// Función de comparación para ordenar de forma aleatoria
function comparacionAleatoria() {
  return Math.random() - 0.5;
}

// Utilizar la función sort con la función de comparación aleatoria
let arrayAleatorio = miArray4.sort(comparacionAleatoria);

console.log(arrayAleatorio);


// Generar un número entero aleatorio entre 1 y 10 (ambos inclusive)
let numeroEnteroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(numeroEnteroAleatorio);


let numeros2 = [1, 2, 3, 4, 5, 6];

// Filtrar solo los números pares
let numerosPares = numeros2.filter(numero => numero % 2 === 0);

console.log(numerosPares);  // Resultado: [2, 4, 6]


let frutas = ["manzana", "banana", "uva"];

// Encontrar la primera fruta que tenga más de 5 letras
let frutaLarga = frutas.find(fruta => fruta.length > 5);

console.log(frutaLarga);  // Resultado: "manzana"


let edades = [25, 30, 18, 22];

// Comprobar si todas las edades son mayores de 18
let todasMayoresDe18 = edades.every(edad => edad > 18);

console.log(todasMayoresDe18);  // Resultado: true

// Comprobar si al menos una edad es mayor de 21
let algunaMayorDe21 = edades.some(edad => edad > 21);

console.log(algunaMayorDe21);  // Resultado: true


let elementos = [1, 2, 3, 4, 4, 5, 6, 6];

// Eliminar elementos duplicados utilizando Set
let elementosUnicos = [...new Set(elementos)];

console.log(elementosUnicos);  // Resultado: [1, 2, 3, 4, 5, 6]


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Concatenar dos arrays
let arrayConcatenado = array1.concat(array2);

console.log(arrayConcatenado);  // Resultado: [1, 2, 3, 4, 5, 6]


let arrayOriginal = [1, 2, 3, 4, 5];

// Invertir el orden de los elementos
let arrayInvertido = arrayOriginal.reverse();

console.log(arrayInvertido);  // Resultado: [5, 4, 3, 2, 1]


let frutas2 = ["manzana", "plátano", "uva", "pera"];

// Eliminar "uva" del array
let frutasSinUva = frutas2.filter(fruta => fruta !== "uva");

console.log(frutasSinUva);  // Resultado: ["manzana", "plátano", "pera"]

let colores = ["rojo", "azul", "verde", "amarillo"];

// Encontrar el índice de "verde"
let indiceVerde = colores.indexOf("verde");

console.log(indiceVerde);  // Resultado: 2


let frutas3 = ["manzana", "plátano", "uva"];

// Verificar si "plátano" está en el array
let contienePlatano = frutas3.includes("plátano");

console.log(contienePlatano);  // Resultado: true


let frutas5 = ["manzana", "plátano", "uva", "fresa"];

// Utilizar forEach para imprimir cada fruta en la consola
frutas.forEach(function(fruta) {
  console.log(fruta);
});


