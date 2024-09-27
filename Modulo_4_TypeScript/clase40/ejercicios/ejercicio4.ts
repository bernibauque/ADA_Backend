// Crear un array con las frutas favoritas
export let frutas: string[] = ["Manzana", "Banana", "Pera", "Durazno", "Uva"];

// Añadir otra fruta al final del array
frutas.push("Kiwi");

// Encontrar el índice de "Manzana"
let indiceManzana = frutas.indexOf("Manzana");
console.log(indiceManzana);  // 0

// Eliminar la última fruta
frutas.pop();

// Mostrar el array actualizado
console.log(frutas);
