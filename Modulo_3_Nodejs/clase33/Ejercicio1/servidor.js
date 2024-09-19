// Importamos el módulo net para crear el servidor TCP
const net = require('net');
// Importamos el controlador para manejar los mensajes de los clientes
const tareaControlador = require('./controladores/tareaControlador');

// Creamos un nuevo servidor TCP
const servidor = net.createServer((socket) => {
    // Configuramos el servidor para recibir datos del cliente
    socket.on('data', (data) => {
        // Convertimos los datos recibidos a una cadena
        const mensaje = data.toString();
        // Llamamos al controlador para manejar el mensaje recibido
        tareaControlador.manejarMensaje(mensaje, socket);
    });
});

// El servidor escuchará en el puerto 4000
servidor.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000');
});
