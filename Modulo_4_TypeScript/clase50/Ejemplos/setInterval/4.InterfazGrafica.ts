// Actualización de una interfaz gráfica
// setInterval() también puede ser útil para actualizar partes de una interfaz 
// gráfica de usuario de forma periódica. Por ejemplo, un reloj que se actualiza 
// cada segundo.

function actualizarReloj() {
    // Creamos una nueva instancia de Date para obtener la fecha y hora actuales
    const ahora = new Date();
    
    // Obtenemos la hora actual (de 0 a 23) de la instancia de Date
    const horas = ahora.getHours();
    
    // Obtenemos los minutos actuales (de 0 a 59) de la instancia de Date
    const minutos = ahora.getMinutes();
    
    // Obtenemos los segundos actuales (de 0 a 59) de la instancia de Date
    const segundos = ahora.getSeconds();
    
    // Mostramos la hora actual en formato "horas:minutos:segundos" en la consola
    console.log(`${horas}:${minutos}:${segundos}`);
  }
  
  // Se crea un intervalo que llama a la función `actualizarReloj` cada segundo (1000 ms)
  let relojIntervalo = setInterval(actualizarReloj, 1000);
  
  // Nota: Este intervalo seguirá ejecutándose indefinidamente hasta que sea detenido manualmente
  // usando clearInterval(relojIntervalo) si lo necesitas más adelante.
  


  