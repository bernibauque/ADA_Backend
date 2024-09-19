const net = require('net');
const { processRequest } = require('./controller');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Evento que se dispara cuando se recibe un dato del cliente
    socket.on('data', () => {
        const response = processRequest();  // Procesamos la solicitud utilizando el controlador
        socket.write(response);  // Enviamos la respuesta de vuelta al cliente
    });

    // Evento que se dispara cuando el cliente se desconecta
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor de tiempo escuchando en el puerto 3000');
});
