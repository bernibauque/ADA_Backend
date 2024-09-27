// Declaración de un array de frutas (strings)
let frutas: string[] = ['manzana', 'banana', 'pera'];

// Agregar una fruta al final del array
frutas.push('naranja');
console.log('Frutas después de agregar naranja:', frutas);

// Eliminar la última fruta del array
let ultimaFruta = frutas.pop();
console.log('Fruta eliminada (pop):', ultimaFruta);
console.log('Frutas después de eliminar la última fruta:', frutas);

// Agregar una fruta al inicio del array
frutas.unshift('mango');
console.log('Frutas después de agregar mango al inicio:', frutas);

// Eliminar la primera fruta del array
let primeraFruta = frutas.shift();
console.log('Fruta eliminada (shift):', primeraFruta);
console.log('Frutas después de eliminar la primera fruta:', frutas);

// Buscar la posición de la pera
let posicionPera = frutas.indexOf('pera');
console.log('Posición de la pera:', posicionPera);

// Verificar si el array contiene la banana
let tieneBanana = frutas.includes('banana');
console.log('¿El array contiene banana?:', tieneBanana);

// Combinar todos los elementos del array en una cadena
let cadenaFrutas = frutas.join(', ');
console.log('Frutas unidas por una coma:', cadenaFrutas);

// Invertir el orden del array
frutas.reverse();
console.log('Frutas después de invertir el orden:', frutas);

// Concatenar dos arrays
let otrasFrutas: string[] = ['fresa', 'kiwi'];
let todasLasFrutas = frutas.concat(otrasFrutas);
console.log('Array concatenado:', todasLasFrutas);


