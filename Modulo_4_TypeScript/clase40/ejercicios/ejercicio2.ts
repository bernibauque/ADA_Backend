// Declarar una tupla para representar un libro
export let libro: [string, number, boolean];

// Inicializar la tupla
libro = ["El principito", 1943, true];

// Imprimir el título del libro y el año de publicación
console.log(libro[0]);  // "El principito"
console.log(libro[1]);  // 1943

// Cambiar el valor de disponibilidad
libro[2] = false;
console.log(libro[2]);  // false
