import { add, multiply } from './mathOperations'; // Importar el módulo interno
import _ from 'lodash'; // Importar el módulo externo lodash

// Usar funciones del módulo interno
const resultAdd = add(5, 3);
const resultMultiply = multiply(5, 3);

console.log(`Resultado de sumar: ${resultAdd}`); // Resultado de sumar: 8
console.log(`Resultado de multiplicar: ${resultMultiply}`); // Resultado de multiplicar: 15

// Usar función del módulo externo lodash para eliminar duplicados de un array
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = _.uniq(numbers);

console.log(`Array sin duplicados: ${uniqueNumbers}`); // Array sin duplicados: [1, 2, 3, 4, 5]
