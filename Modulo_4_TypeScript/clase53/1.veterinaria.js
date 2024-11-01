// Ejercicio 1: Veterinaria - Sistema de Recordatorio de Vacunación
// Crea un sistema de recordatorio para la vacunación de mascotas en una clínica 
// veterinaria. Debes implementar una función enviarRecordatorioVacunacion que 
// acepte el nombre de la mascota y el tiempo en segundos en el que debe enviarse 
// un recordatorio. La función debe usar setTimeout para esperar el tiempo especificado 
// y luego llamar a un callback que muestre el mensaje Recordatorio: <Nombre de la mascota> 
// necesita vacunación..
// Instrucciones:
// •	Define enviarRecordatorioVacunacion para que acepte dos parámetros: el nombre de la 
// mascota (como string) y el tiempo de espera (en segundos).
// •	Usa setTimeout para retrasar el envío del mensaje.
// •	Llama al callback después de transcurrido el tiempo, enviando el mensaje de recordatorio.

function enviarRecordatorioVacunacion(nombreMascota, tiempoEspera, callback) {
    console.log(`Programando recordatorio de vacunacion de ${nombreMascota} en ${tiempoEspera} segundos...`);

    setTimeout(() => {
        const mensaje = `Recordatorio ${nombreMascota} necesita vacunacion.`
        callback(mensaje) // llamamos al callback con el mensaje recordatorio
    }, tiempoEspera * 1000) //Multiplicamos el tiempo de espera para convertir segundos en milisegundos
}

function mostrarRecordatorio(mensaje) {
    console.log(mensaje);
}

enviarRecordatorioVacunacion("Coco", 3, mostrarRecordatorio)