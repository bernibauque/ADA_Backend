// Simulación de una operación bloqueante
function operacionBloqueante() {
    // Simulando una operación que toma tiempo
    const inicio = Date.now();
    while (Date.now() - inicio < 3000) {
        // Espera 3 segundos
    }
    return 42; // Devuelve un resultado
}

console.log("Resultado:", operacionBloqueante());
// Espera 3 segundos antes de mostrar el resultado

// Operación Bloqueante: La función operacionBloqueante()
// simula una tarea que toma tiempo (en este caso, 3 segundos).
// Durante este tiempo, el hilo principal se encuentra ocupado,
// lo que significa que no puede realizar otras tareas ni r
// esponder a eventos. Esto resulta en una experiencia de usuario
// poco fluida, ya que cualquier otra operación se detiene hasta
// que se complete la función.





