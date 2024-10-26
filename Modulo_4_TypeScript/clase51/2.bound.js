// Simulacion de una operacion CPU-BOUND
function operacionCpuBound() {
    let resultado = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
        resultado += i;
    }
    return resultado;
}

//Simulacion I/O BOUND
function operacionIO() {
    console.log("Simulando lectura de un archivo... ");
    setTimeout(() => {
        console.log("Archivo leido con exito");
    }, 2000)
}

// Funcion que ejecuta ambas operaciones
function ejecutarOperaciones() {
    console.log("Ejecutando operacion CPU-Bound...");
    const resultadoCpu = operacionCpuBound()
    console.log(`Resultado de la operacion CPU-Bound: ${resultadoCpu}`);

    console.log("Ejecutando operacion I/O Bound...");
    operacionIO()
}

ejecutarOperaciones()

// Operacion CPU-BOUND: La funcion operacionCpuBound() realiza un calculo
// intensivo que utiliza la CPU. La ejecucion de este codigo puede hacer que
// el progrma se congele hasta que el calculo termine, ya que consume los
// recursos de la CPU.

// Opercaion I/O Bound: La funcion operacionIO() simula una operacion
// de entrada y salida como la lectura de un archivo utilizando setTimeOut
// Esta operacion, no depende del cpu, de la misma manera que las operaciones
// cpu-bound, ya que delega la tarea al sistema operativo y puede realizar
// otras tareas mientras espera que la operacion de i/o se complete
