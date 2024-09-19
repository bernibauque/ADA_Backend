const net = require('net');  // Importa el módulo net para trabajar con TCP

// Crea el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Envía un mensaje al cliente cuando se conecta
    socket.write('Hola, cliente');

    // Maneja el evento de cierre de la conexión
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    // Maneja el evento de error
    socket.on('error', (err) => {
        console.log('Error:', err.message);
    });
});

// El servidor escucha en el puerto 5000
server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});
