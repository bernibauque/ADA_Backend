// Funcion que simule un proceso asincronico
function procesoLargo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Proceso completado"), 20000)
    })
}

async function ejecutarProceso() {
    console.log("Iniciando proceso...");
    //Pausa la ejecucion hasta que procesoLargo se resuelve 
    const resultado = await procesoLargo()
    console.log(resultado);
    console.log("Proceso terminado.");
}

ejecutarProceso()