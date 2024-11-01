function startTimer() {
    let seconds = 0;

    // Crea el intervalo que incrementa y muestra los segundos cada segundo
    const intervalId = setInterval(() => {
        seconds++;
        console.log(`Tiempo transcurrido: ${seconds} segundos`);
    }, 1000);

    // Usamos setTimeout para detener el temporizador después de 5 segundos
    setTimeout(() => {
        clearInterval(intervalId); // Detiene el intervalo
        console.log("Temporizador detenido después de 5 segundos");
    }, 5000);
}

startTimer();
