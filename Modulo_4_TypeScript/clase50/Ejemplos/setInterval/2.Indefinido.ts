// 1. Intervalo indefinido (hasta cancelación manual)
// El setInterval seguirá ejecutándose indefinidamente hasta que lo detengamos manualmente.

export let contador = 0;

const intervalo = setInterval(() => {
  contador++;
  console.log(`Contador (indefinido): ${contador}`);
  
  // Aquí podrías llamar a clearInterval(intervalo) en algún momento para detener el intervalo
  // Por ejemplo, podrías tener alguna lógica condicional externa o un evento que lo detenga,
  // pero en este caso, lo dejamos correr indefinidamente.

}, 1000);

console.log("Intervalo indefinido iniciado.");


