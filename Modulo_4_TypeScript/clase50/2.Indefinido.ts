// 1. Intervalo Indefinido (hasta cancelacion manual)
export let contador = 0;

const Intervalo = setInterval(() => {
    contador++;
    console.log(`Contador (indefinido): ${contador}`);
}, 1000);
console.log("Intervalo indefinido iniciado");
