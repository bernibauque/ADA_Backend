function prepararPedido(nombrePedido, tiempoPreparacion) {
    let tiempoTranscurrido = 0; // Contador para medir el tiempo que ha pasado

    console.log(`Preparando el pedido: ${nombrePedido}`);

    // Iniciamos el temporizador que se ejecutará cada segundo
    const intervaloId = setInterval(() => {
        tiempoTranscurrido++; // Incrementamos el contador de tiempo en cada segundo
        console.log(`Tiempo transcurrido: ${tiempoTranscurrido} segundos`);

        // Verificamos si el tiempo transcurrido ha alcanzado el tiempo de preparación
        if (tiempoTranscurrido >= tiempoPreparacion) {
            clearInterval(intervaloId);
            // Detenemos el temporizador cuando el tiempo es igual al tiempo de preparación
            console.log(`El pedido ${nombrePedido} está listo para servir`);
        }
    }, 1000); // Ejecutamos setInterval cada 1000 ms (1 segundo)
}

// Llamamos a la función con un pedido de ejemplo de 5 segundos
prepararPedido("Pizza Margarita", 5);





