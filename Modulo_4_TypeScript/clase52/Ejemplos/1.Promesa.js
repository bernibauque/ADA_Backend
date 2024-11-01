// Creamos una nueva promesa
const miPromesa = new Promise((resolve, reject) => {
    console.log("Estado: Pending. La operación ha comenzado...");
    // Indica que la operación ha comenzado y la promesa está pendiente.

    // Simulamos una operación asíncrona usando setTimeout
    setTimeout(() => {
        // Genera un valor booleano aleatorio; true representa éxito, false representa fallo
        const exito = Math.random() > 0.5;

        // Si la operación es exitosa, resolvemos la promesa con un mensaje de éxito
        if (exito) {
            resolve("Operación completada con éxito."); // Resolvemos la promesa con un mensaje exitoso.
        } else {
            // Si la operación falla, rechazamos la promesa con un mensaje de error
            reject("Error: La operación falló."); // Rechazamos la promesa con un mensaje de error.
        }
    }, 2000); // La operación se simula que toma 2 segundos.
});

// Manejo de la promesa
miPromesa
    .then((resultado) => {
        // Este bloque se ejecuta si la promesa se resuelve exitosamente
        console.log("Éxito:", resultado); // Imprime el resultado de la operación exitosa.
    })
    .catch((error) => {
        // Este bloque se ejecuta si la promesa es rechazada
        console.error("Error:", error); // Imprime el mensaje de error si la operación falla.
    })
    .finally(() => {
        // Este bloque se ejecuta siempre que la promesa finaliza, independientemente del resultado
        console.log("Promesa finalizada.");
        // Imprime un mensaje indicando que la promesa ha terminado su ejecución.
    });

// Este mensaje se imprime inmediatamente después de crear la promesa, antes de que se complete
console.log("Promesa creada, esperando resultado...");
// Indica que la promesa ha sido creada y está en espera del resultado.












