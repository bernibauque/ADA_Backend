// Simulación de una operación no-bloqueante utilizando un callback
function operacionNoBloqueante(callback) {
    setTimeout(() => {
        callback(42); // Simula la respuesta después de 3 segundos
    }, 3000);
}

console.log("Iniciando operación no-bloqueante...");
operacionNoBloqueante((resultado) => {
    console.log("Resultado:", resultado); // Muestra el resultado después de 3 segundos
});

// Operación No-Bloqueante: La función operacionNoBloqueante() simula una tarea que toma
// tiempo, pero en lugar de bloquear el hilo principal, utiliza setTimeout() para ejecutar
// un callback después de 3 segundos. Esto permite que el programa siga ejecutándose sin
// interrupciones. Cuando el resultado está listo, se llama al callback y se muestra el resultado.


