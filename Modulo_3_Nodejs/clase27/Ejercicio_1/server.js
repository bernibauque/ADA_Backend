const net = require('net');

// Crea el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado:', socket.remoteAddress + ':' + socket.remotePort);

    // Configura el tiempo de espera a 10 segundos (10000 ms)
    socket.setTimeout(10000);

    // Maneja el evento 'timeout' cuando se alcanza el tiempo de espera
    socket.on('timeout', () => {
        console.log('Tiempo de espera alcanzado.');
        socket.end(); // Cierra la conexión
    });

    // Maneja el evento 'data' para recibir datos del cliente
    socket.on('data', (data) => {
        console.log('Datos recibidos del cliente:', data.toString());
        socket.write('Mensaje recibido');
    });

    // Maneja el evento 'end' cuando el cliente cierra la conexión
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });

    // Maneja el evento 'error' para capturar errores
    socket.on('error', (err) => {
        console.error('Error:', err.message);
    });
});

// El servidor escucha en el puerto 7000
server.listen(7000, () => {
    console.log('Servidor TCP escuchando en el puerto 7000.');
});
