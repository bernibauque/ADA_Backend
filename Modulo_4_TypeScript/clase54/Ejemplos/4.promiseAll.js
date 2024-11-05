// Simula un proceso que tarda 1 segundo
function procesoA() {
    return new Promise((resolve) => setTimeout(() => resolve("Proceso A completado"), 1000));
}

// Simula un proceso que tarda 2 segundos
function procesoB() {
    return new Promise((resolve) => setTimeout(() => resolve("Proceso B completado"), 2000));
}

// Simula un proceso que tarda 3 segundos
function procesoC() {
    return new Promise((resolve) => setTimeout(() => resolve("Proceso C completado"), 3000));
}

// Función principal que ejecuta los procesos en paralelo usando Promise.all
async function ejecutarProcesosParalelos() {
    try {
        console.log("Iniciando procesos en paralelo...");

        // Ejecuta los tres procesos a la vez y espera hasta que todos terminen
        const resultados = await Promise.all([procesoA(), procesoB(), procesoC()]);
        console.log("Resultados:", resultados);  // Muestra los resultados de cada proceso en un array

        console.log("Todos los procesos completados.");
    } catch (error) {
        console.error("Error en uno de los procesos:", error);  // Captura error si ocurre en alguno
    }
}

// Ejecuta la función para ver el resultado
ejecutarProcesosParalelos();






