function enviarRecordatorioVacunacion(nombreMascota, tiempoEspera, callback) {
    console.log(`Programando recordatorio para la vacunación de ${nombreMascota} en ${tiempoEspera} segundos...`);

    // Usa setTimeout para generar una pausa que dure el tiempo especificado
    setTimeout(() => {
        // Creamos el mensaje que será enviado al callback
        const mensaje = `Recordatorio: ${nombreMascota} necesita vacunación.`;
        callback(mensaje); // Llama al callback con el mensaje de recordatorio
    }, tiempoEspera * 1000); // Multiplicamos por 1000 para convertir segundos a milisegundos
}

// Función callback que muestra el recordatorio en la consola
function mostrarRecordatorio(mensaje) {
    console.log(mensaje);
}

// Llamamos a enviarRecordatorioVacunacion con el nombre de la mascota y el tiempo en segundos
enviarRecordatorioVacunacion("Bobby", 3, mostrarRecordatorio);



