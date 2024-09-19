// Importamos la biblioteca readline-sync
// Esto nos permite usar el método questionInt para leer números enteros de la consola
const readlineSync = require('readline-sync');

// Utilizamos el método questionInt para pedir la edad del usuario
// Muestra el mensaje y espera que el usuario ingrese un número entero
// Si se ingresa algo que no es un número, vuelve a pedir la entrada
const edad = readlineSync.questionInt('Por favor, ingresa tu edad: ');

// Verificamos si la edad ingresada cumple con ciertos criterios
// Por ejemplo, verificar si el usuario es mayor de 18 años
if (edad >= 18) {
    // Si la condición se cumple, mostramos este mensaje
    console.log('Eres mayor de edad, puedes acceder a este sitio.');
} else {
    // Si la condición no se cumple, mostramos este otro mensaje
    console.log('Lo siento, necesitas ser mayor de 18 años para acceder a este sitio.');
}

// Explicación adicional para mostrar cómo manejar números inválidos:
// Si el usuario ingresa algo como "veinte", readline-sync seguirá pidiendo una entrada válida.
// Este comportamiento asegura que siempre obtengamos un número entero válido.

