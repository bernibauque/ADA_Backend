// 2. Intervalo con condicion de parada

export let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log(`Intervalo (con condicion): ${contador}`);
    
    if(contador === 5) {
        clearInterval(intervalo);
        console.log("Intervalo con condicion detenido al llegar al 5");
    }
}, 1000);