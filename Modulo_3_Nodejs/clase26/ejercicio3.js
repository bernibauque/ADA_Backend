const net = require('net');

// Crea el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Maneja los datos recibidos del cliente
    socket.on('data', (data) => {
        console.log('Mensaje recibido:', data.toString());
        // Responde con el mismo mensaje
        socket.write(data);
    });

    // Maneja el evento de cierre de la conexión
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

// El servidor escucha en el puerto 5000
server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});

