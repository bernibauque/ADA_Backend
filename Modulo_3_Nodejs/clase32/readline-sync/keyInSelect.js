// Importamos la biblioteca readline-sync
// Esto nos permite usar el método keyInSelect para mostrar un menú interactivo
const readlineSync = require('readline-sync');

// Definimos un array con las opciones de lenguajes de programación
const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

// Usamos el método keyInSelect para mostrar las opciones al usuario
// El prompt es el mensaje que aparece antes de las opciones
// El usuario debe seleccionar un número correspondiente a la opción
const indiceSeleccionado = readlineSync.keyInSelect(lenguajes, 'Cual es tu lenguaje de programacion favorito?');

// Verificamos si el usuario seleccionó una opción o canceló la operación
if (indiceSeleccionado === -1) {
    // Si el usuario presiona 'cancelar' (Escape), mostramos este mensaje
    console.log('No has seleccionado ningún lenguaje.');
} else {
    // Si el usuario selecciona una opción, mostramos el lenguaje elegido
    console.log(`Has seleccionado: ${lenguajes[indiceSeleccionado]}`);
}

// Explicación adicional:
// - Si el usuario ingresa una selección inválida (como una letra), readline-sync no la aceptará.
// - Esto asegura que solo se elijan opciones válidas (1, 2, 3, ...).
// - El método devuelve el índice correspondiente a la opción seleccionada o -1 si se presiona "cancelar".

