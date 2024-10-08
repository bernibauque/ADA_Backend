// Ejemplo basico con un array
let perritos = ['Dalmata', 'Caniche', 'Salchicha'];

for (let perrito of perritos) {
    console.log(`Ejemplo de Array: ${perrito}`);
}

// En este ejemplo;, el bucle for of recorre cada valor del array Perritos 
// en cada iteracion, la variable perrito toma el valor de uno de los 
// elementos del array (en este caso son 'Dalmata', 'Caniche', 'Salchicha')

console.log('-------------------------------------------------');

// Ejemplo con una cadena de texto
export let saludo = 'Hola';

for(let letra of saludo) {
    console.log(`Ejemplo de String: ${letra}`);
}

// En este ejemplo, el bucle recorre cada letra de la cadena de texto 
// 'Hola' y en cada iteracion imprime una letra