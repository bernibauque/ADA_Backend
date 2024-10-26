function processOrder(orderNumber, clientName, callback) {
    const processingTime = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
        const statusMessage = processingTime < 2000 ?
            `¡Pedido completado rápidamente!` :
            `Pedido completado, gracias por su paciencia.`;
        callback(`Cliente: ${clientName}, Pedido: ${orderNumber} - ${statusMessage}`);
    }, processingTime);
}

processOrder(12345, "Carlos", (message) => {
    console.log(message);
});
