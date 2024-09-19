// Importamos los módulos necesarios
const net = require('net'); // Módulo para crear el servidor TCP
const readline = require('readline'); // Módulo para leer la entrada desde la terminal
const controller = require('./controller'); // Importamos el controlador que maneja la lógica de negocio

// Obtenemos el nombre del usuario desde los argumentos de la línea de comandos
// Ejemplo de uso: node server.js --name Servidor1
const userName = process.argv[2]?.split('=')[1] || 'Servidor';

// Crear el servidor TCP
// La función callback se ejecuta cada vez que un cliente se conecta al servidor
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Evento que se ejecuta cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        // Convertimos los datos recibidos a un string y eliminamos los espacios innecesarios
        const message = data.toString().trim();

        // Comprobamos si el mensaje recibido es un comando especial
        if (message === '--history') {
            // Si es el comando --history, obtenemos el historial y lo enviamos al cliente
            const history = controller.getHistory();
            socket.write(JSON.stringify(history, null, 2));
        } else if (message === '--eraseMessages') {
            // Si es el comando --eraseMessages, borramos el historial y confirmamos al cliente
            controller.eraseHistory();
            socket.write('Historial de mensajes borrado.\n');
        } else {
            // Si no es un comando, lo tratamos como un mensaje normal
            // Agregamos el mensaje al historial y confirmamos al cliente
            controller.pushMessage(message, userName);
            socket.write(`Mensaje recibido: ${message}\n`);
        }
    });

    // Evento que se ejecuta cuando el cliente se desconecta del servidor
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    // Evento que se ejecuta cuando ocurre un error en la conexión
    socket.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
});

// Configuramos el servidor para que escuche en el puerto 3000
// La función callback se ejecuta cuando el servidor comienza a escuchar conexiones
server.listen(3000, () => {
    console.log(`Servidor ejecutándose en el puerto 3000`);
});

