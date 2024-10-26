// Simulación de operación CPU-bound
function operacionCpuBound() {
    let resultado = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
        resultado += i; // Realizando un cálculo intensivo
    }
    return resultado;
}

// Simulación de operación I/O-bound
function operacionIoBound() {
    console.log("Simulando lectura de un archivo...");
    setTimeout(() => {
        console.log("Archivo leído con éxito.");
    }, 2000); // Simulamos una lectura de archivo que toma 2 segundos
}

// Función para ejecutar ambas operaciones
function ejecutarOperaciones() {
    console.log("Ejecutando operación CPU-bound...");
    const resultadoCpu = operacionCpuBound();
    console.log(`Resultado de la operación CPU-bound: ${resultadoCpu}`);

    console.log("Ejecutando operación I/O-bound...");
    operacionIoBound();
}

// Llamar a la función para ejecutar las operaciones
ejecutarOperaciones();

// Explicación del Ejemplo

// * Operación CPU-Bound: La función operacionCpuBound() realiza un cálculo
// intensivo que utiliza la CPU. La ejecución de este código puede hacer que
// el programa se "congele" hasta que el cálculo termine, ya que consume
// recursos de la CPU.

// * Operación I/O-Bound: La función operacionIoBound() simula una operación
// de entrada/salida, como la lectura de un archivo, utilizando setTimeout.
// Esta operación no depende del CPU de la misma manera que las operaciones
// CPU-bound, ya que delega la tarea al sistema operativo y puede realizar
// otras tareas mientras espera que la operación de I/O se complete.




