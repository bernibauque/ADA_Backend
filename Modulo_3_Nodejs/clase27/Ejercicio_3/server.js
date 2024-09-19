const net = require('net');
const readline = require('readline');

const PORT = 10000;

// Crear el servidor
const server = net.createServer((socket) => {
    console.log('Cliente conectado\n');

    // Enviar un mensaje inicial al cliente
    socket.write('Bienvenido al servidor TCP. Envía "status" para verificar el estado.\n');

    // Manejar datos recibidos del cliente
    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Mensaje recibido del cliente: ${message}\n`);

        // Responder al cliente según el comando
        if (message === 'status') {
            socket.write('El servidor está en funcionamiento.\n');
        } else {
            socket.write(`Servidor recibió: ${message}\n`);
        }
    });

    // Manejar el cierre de la conexión
    socket.on('end', () => {
        console.log('Cliente desconectado\n');
    });

    // Manejar errores del socket
    socket.on('error', (err) => {
        console.error(`Error en el socket: ${err}\n`);
    });

    // Enviar mensajes desde el servidor
    sendMessageFromServer(socket);
});

// Manejar errores del servidor
server.on('error', (err) => {
    console.error(`Error en el servidor: ${err}\n`);
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}\n`);
});

// Función para enviar mensajes desde el servidor
function sendMessageFromServer(socket) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt('Mensaje para el cliente: ');
    rl.prompt();

    rl.on('line', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Servidor cerrado.\n');
            rl.close();
            socket.end();
            server.close();
        } else {
            socket.write(input + '\n');
            rl.prompt();
        }
    });
}




