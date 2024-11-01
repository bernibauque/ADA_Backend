// Ejercicio 3: Restaurante - Temporizador de Preparación de Pedidos con
// setInterval
// Simula un sistema de monitoreo de tiempo de preparación de pedidos en un
// restaurante. Crea una función prepararPedido que acepte el nombre del pedido
// y el tiempo de preparación en segundos. La función debe usar setInterval para
// contar cada segundo en la consola. Una vez transcurrido el tiempo de
// preparación, el temporizador debe detenerse usando clearInterval y mostrar el
// mensaje El pedido <Nombre del pedido> está listo para servir.
// Instrucciones:
// • Define la función prepararPedido que acepte nombrePedido y
// tiempoPreparacion.
// • Usa setInterval para mostrar cada segundo en la consola.
// • Usa clearInterval para detener el temporizador cuando el tiempo se agote
// y muestra un mensaje de finalización.

function prepararPedido(nombrePedido, tiempoPreparacion) {
    let contador = tiempoPreparacion;
    console.log(`Preparando el pedido: ${nombrePedido}`);

    const intervalo = setInterval(() => {
        contador--
        console.log(`Queda: ${contador} segundos`);

        if (contador === 0) {
            clearInterval(intervalo)
            console.log(`El pedido ${nombrePedido} esta listo para servir`);
        }
    }, 1000)
}

prepararPedido("Pizza", 10)
