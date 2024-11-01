// Promesas de ejemplo
const promesa1 = Promise.resolve(3);
// Crea una promesa que se resuelve inmediatamente con el valor 3.

const promesa2 = new Promise((resolve, reject) => {
    // Crea una promesa que se resuelve después de 100ms.
    setTimeout(resolve, 100, "¡Hola!");
    // Después de 100ms, la promesa se resuelve con el valor "¡Hola!".
});

const promesa3 = new Promise((resolve, reject) => {
    // Crea otra promesa que se resuelve después de 500ms.
    setTimeout(resolve, 500, "¡Mundo!");
    // Después de 500ms, esta promesa se resuelve con el valor "¡Mundo!".
});

// Usamos Promise.all() para esperar que todas las promesas se resuelvan.
Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        // Si todas las promesas se resuelven con éxito,
        // se ejecuta este bloque con un array de resultados.
        console.log("Resultados de todas las promesas:", resultados);
        // Imprime: [3, "¡Hola!", "¡Mundo!"] 
        // (Los resultados aparecen en el mismo orden que las promesas).
    })
    .catch((error) => {
        // Si alguna de las promesas es rechazada, 
        // se ejecuta este bloque para manejar el error.
        console.error("Una de las promesas fue rechazada:", error);
    });






