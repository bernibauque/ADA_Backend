// Simulación de concurrencia
function tareaConcurrencia(tarea, tiempo) {
    setTimeout(() => {
        console.log(`Tarea: ${tarea} completada en ${tiempo} ms`);
    }, tiempo);
}

// Ejecutar varias tareas concurrentemente
function ejecutarTareasConcurrencia() {
    tareaConcurrencia("Tarea 1", 1000); // Se completará en 1 segundo
    tareaConcurrencia("Tarea 2", 500);   // Se completará en 0.5 segundos
    tareaConcurrencia("Tarea 3", 1500);  // Se completará en 1.5 segundos
}

// Llamar a la función para ejecutar las tareas
ejecutarTareasConcurrencia();

// Explicación del Ejemplo

// * Concurrencia: Las tres tareas se inician casi al mismo tiempo.
// Aunque Tarea 2 se completará primero (en 500 ms), Tarea 1 y Tarea 3
// seguirán ejecutándose. Esto muestra cómo varias tareas pueden progresar
// al mismo tiempo, aunque solo una tarea se esté ejecutando en un momento dado.

// * Paralelismo: No se simula en este código, ya que setTimeout y el event loop
// de JavaScript manejan todo en un solo hilo. Sin embargo, en un sistema con
// múltiples núcleos, las tareas podrían ejecutarse simultáneamente.

