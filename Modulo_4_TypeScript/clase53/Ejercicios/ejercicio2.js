function countdown(seconds) {
    console.log(`Cuenta regresiva: ${seconds} segundos`);

    const intervalId = setInterval(() => {
        if (seconds > 0) {
            console.log(`Tiempo restante: ${seconds} segundos`);
            seconds--;
        } else {
            console.log("¡Tiempo agotado!");
            clearInterval(intervalId); // Detenemos el intervalo cuando llega a 0
        }
    }, 1000); // Ejecuta el bloque cada segundo (1000 ms)
}

// Llamamos a la función con 5 segundos
countdown(5);

