// Función que simula un proceso asincrónico (tarda 2 segundos)
function procesoLargo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Proceso completado"), 2000);
    });
}

// Función principal que usará 'await' para esperar el resultado de procesoLargo
async function ejecutarProceso() {
    console.log("Iniciando proceso...");

    // Pausa la ejecución hasta que 'procesoLargo' se resuelve después de 2 segundos
    const resultado = await procesoLargo();
    console.log(resultado);  // Muestra "Proceso completado" después de la espera

    console.log("Proceso terminado.");
}

// Ejecutamos la función para ver todo el flujo en acción
ejecutarProceso();





