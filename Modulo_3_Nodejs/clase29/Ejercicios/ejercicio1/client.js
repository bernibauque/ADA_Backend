const net = require('net');
const readline = require('readline');

// Configuramos la interfaz para leer del terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creamos una conexión al servidor
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor');

    // Leemos mensajes desde el terminal y los enviamos al servidor
    rl.on('line', (line) => {
        client.write(line);
    });
});

// Evento que se dispara cuando se recibe una respuesta del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
});

// Evento que se dispara cuando se cierra la conexión
client.on('end', () => {
    console.log('Desconectado del servidor');
});

