// Declarar un array de números
export let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Verificar si el número 5 está presente
console.log(numeros.includes(5));  // true

// Encontrar el índice del número 8
console.log(numeros.indexOf(8));  // 7

// Invertir el orden del array
numeros.reverse();

// Mostrar el array final
console.log(numeros);
