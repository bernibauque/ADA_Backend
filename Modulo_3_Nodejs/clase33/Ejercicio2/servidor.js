// Importamos el módulo net para crear el servidor TCP
const net = require('net');
// Importamos el controlador para manejar los mensajes de los clientes
const usuarioControlador = require('./controladores/usuarioControlador');

// Creamos un nuevo servidor TCP
const servidor = net.createServer((socket) => {
    // Configuramos el servidor para recibir datos del cliente
    socket.on('data', (data) => {
        // Convertimos los datos recibidos a una cadena
        const mensaje = data.toString();
        // Llamamos al controlador para manejar el mensaje recibido
        usuarioControlador.manejarMensaje(mensaje, socket);
    });
});

// El servidor escuchará en el puerto 5000
servidor.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});
