// Importamos el módulo 'net' de Node.js, que nos permite crear servidores y clientes TCP
const net = require('net');

// Definimos el puerto en el que el servidor va a escuchar
const PORT = 11000;

// Creamos un array para almacenar todos los mensajes recibidos
const messagesReceived = [];

// Creamos el servidor TCP
const server = net.createServer((socket) => {
    // Esta función se ejecuta cada vez que un cliente se conecta
    console.log('Cliente conectado');

    // Manejamos los datos recibidos del cliente
    socket.on('data', (data) => {
        // Convertimos los datos recibidos a una cadena de texto y eliminamos espacios en blanco
        const message = data.toString().trim();
        // Guardamos el mensaje en nuestro array
        messagesReceived.push(message);
        console.log('Mensaje recibido:', message);

        // Variable para almacenar la respuesta que enviaremos al cliente
        let response;

        // Decidimos qué respuesta enviar basándonos en el contenido del mensaje
        if (message.toLowerCase().includes('hola')) {
            response = '¡Hola, cliente!';
        } else if (message.toLowerCase().includes('fecha')) {
            // Si el mensaje contiene 'fecha', enviamos la fecha y hora actuales
            response = new Date().toLocaleString();
        } else {
            // Para cualquier otro mensaje, enviamos una respuesta genérica
            response = 'Mensaje recibido';
        }

        // Enviamos la respuesta al cliente
        socket.write(response);
    });

    // Manejamos el evento de desconexión del cliente
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    // Manejamos errores en la conexión con el cliente
    socket.on('error', (err) => {
        console.error('Error de socket:', err);
    });
});

// Manejamos el evento de cierre del servidor
server.on('close', () => {
    console.log('Servidor cerrado');
});

// Manejamos errores del servidor
server.on('error', (err) => {
    console.error('Error del servidor:', err);
});

// Iniciamos el servidor para que escuche en el puerto especificado
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});



