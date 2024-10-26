// Simulacion de concurrencia
function tareaConcurrencia(tarea, tiempo) {
    setTimeout(() => {
        console.log(`Tarea: ${tarea} completada en ${tiempo} ms`);
    }, tiempo)
}

// Ejecutamos tareas concurrentes
function ejecutarTareas() {
    tareaConcurrencia("Tarea 1", 1000)
    tareaConcurrencia("Tarea 2", 500)
    tareaConcurrencia("Tarea 3", 1500)
}

ejecutarTareas();

// Concurrencia: Las tres tareas se incian casi al mismo tiempo
// Aunque tarea 2 se complete primero , tarea 1 y tarea 3 seguiran
// ejecutandose. Esto muestra como varias tareas pueden progresar
// al mismo timepo, aunque solo una tarea se este ejecutando en un momento
// dado