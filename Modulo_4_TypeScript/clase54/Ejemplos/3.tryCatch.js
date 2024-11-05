// Simula una función que solicita datos, con una opción de éxito o error
function obtenerDatos(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Datos recibidos correctamente");  // Resuelve con éxito
            } else {
                reject("Error al obtener los datos");  // Lanza un error
            }
        }, 2000);
    });
}

// Función asincrónica que intenta obtener los datos y maneja posibles errores
async function consultarDatos() {
    try {
        console.log("Iniciando consulta de datos...");

        // Pausa hasta que obtenerDatos se complete, o atrapa un error si ocurre
        const resultado = await obtenerDatos(false);  // Cambia a true para éxito
        console.log(resultado);  // Imprime si fue exitoso
    } catch (error) {
        console.error("Ocurrió un error:", error);  // Captura y muestra el error
    } finally {
        console.log("Finalizando consulta de datos.");  // Siempre se ejecuta
    }
}

// Llamamos a la función para ver el manejo de errores en acción
consultarDatos();





