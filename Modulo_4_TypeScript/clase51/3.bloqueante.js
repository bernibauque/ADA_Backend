// Simulamos operacion bloqueante
function operacionBloqueante() {
    const inicio = Date.now()
    while (Date.now() - inicio < 3000) {
    }
    return 42;
}

console.log("Resultado:", operacionBloqueante());
// Espera de 3 segundos antes de mostrar el resultado

// Operacion Bloqueante: La funcion simula una tarea que toma tiempo
// en este caso 3 segundos. Durante ese tiempo, el hilo principal
// se encuentra que no puede realizar otra tarea ni responder a eventos
// Esto resulta en una experiencia de usuario poco fluida ya que cualquier
// otra operacion se detiene hasta que se complete la funcion
