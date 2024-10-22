function prepararCafe(): void {
    console.log("Preparando café...");
    // Simulamos que la preparación del café toma tiempo (5 segundos)
    for (let i = 0; i < 5000000000; i++) {}  // Simulación de una tarea larga
    console.log("Café listo.");
}

function atenderCliente(): void {
    console.log("Tomando pedido del cliente...");
    prepararCafe();  // Toma tiempo, las demás tareas están "bloqueadas"
    console.log("Entregando café al cliente.");
}

// Simulamos la atención de varios clientes de forma sincrónica
atenderCliente();
atenderCliente();


