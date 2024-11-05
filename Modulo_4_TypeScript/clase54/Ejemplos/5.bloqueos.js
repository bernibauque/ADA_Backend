// Función que simula una tarea asincrónica de 2 segundos
function tareaAsincrona1() {
    return new Promise(resolve => setTimeout(() => resolve("Tarea 1 completada"), 2000));
}

// Función que simula otra tarea asincrónica de 2 segundos
function tareaAsincrona2() {
    return new Promise(resolve => setTimeout(() => resolve("Tarea 2 completada"), 2000));
}

// Función que simula una tarea asincrónica de 1 segundo
function tareaAsincrona3() {
    return new Promise(resolve => setTimeout(() => resolve("Tarea 3 completada"), 1000));
}

// Función principal para ejecutar tareas concurrentemente
async function ejecutarConcurrentemente() {
    try {
        // Llamamos a las tareas sin await, así se ejecutan en paralelo
        const promesa1 = tareaAsincrona1();
        const promesa2 = tareaAsincrona2();
        const promesa3 = tareaAsincrona3();

        // Usamos Promise.all para esperar a todas las promesas al mismo tiempo
        const resultados = await Promise.all([promesa1, promesa2, promesa3]);
        console.log("Resultados:", resultados);  // Muestra todos los resultados al finalizar
    } catch (error) {
        console.error("Error en alguna de las tareas:", error);
    }
}

// Llamamos a la función para ejecutar todas las tareas concurrentemente
ejecutarConcurrentemente();






