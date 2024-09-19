// Importamos la biblioteca readline-sync para utilizar sus métodos de entrada
const readlineSync = require('readline-sync');

// Usamos el método keyInYN para hacer una pregunta de sí/no al usuario
// Muestra el mensaje y espera que el usuario responda 'y' para sí o 'n' para no
const deseaContinuar = readlineSync.keyInYN('Deseas continuar con la operacion?');

// Verificamos la respuesta del usuario usando una estructura condicional
if (deseaContinuar) {
  // Si el usuario presionó 'y', la variable deseaContinuar es true
  // Mostramos un mensaje indicando que la operación continuará
  console.log('Continuando con la operación...');
} else {
  // Si el usuario presionó 'n', la variable deseaContinuar es false
  // Mostramos un mensaje indicando que la operación se ha cancelado
  console.log('Operación cancelada por el usuario.');
}

// Explicación adicional:
// - El prompt '¿Deseas continuar con la operación?' es la pregunta que se muestra al usuario.
// - El usuario puede responder 'y' para sí o 'n' para no.
// - Si se presiona otra tecla, el programa seguirá esperando hasta recibir una respuesta válida.

