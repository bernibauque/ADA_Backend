const net = require('net');

const server = net.createServer((socket) => {
    console.log(`Cliente conectado: ${socket.remoteAddress}:${socket.remotePort}`);

    socket.on('data', (data) => {
        console.log(`Mensaje recibido de ${socket.remoteAddress}:${socket.remotePort}: ${data.toString()}`);
        socket.write('Mensaje recibido');
    });

    socket.on('end', () => {
        console.log(`Cliente desconectado: ${socket.remoteAddress}:${socket.remotePort}`);
    });

    socket.on('error', (err) => {
        console.error('Error:', err.message);
    });
});

server.listen(9000, () => {
    console.log('Servidor TCP escuchando en el puerto 9000.');
});
