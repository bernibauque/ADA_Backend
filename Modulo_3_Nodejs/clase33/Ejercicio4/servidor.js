const net = require('net');
const mensajeControlador = require('./controladores/mensajeControlador');

// Creamos un nuevo servidor TCP
const servidor = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Configuramos el servidor para recibir datos del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString();
        mensajeControlador.manejarMensaje(mensaje, socket);
    });

    // Maneja el cierre de la conexión
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    // Maneja errores en el socket
    socket.on('error', (err) => {
        console.error(`Error en el socket: ${err.message}`);
    });
});

// El servidor escuchará en el puerto 6000
servidor.listen(6000, () => {
    console.log('Servidor escuchando en el puerto 6000');
});


