const net = require('net');

// Creamos una conexión al servidor
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor');
    client.write('Solicitar hora');  // Enviamos una solicitud al servidor
});

// Evento que se dispara cuando se recibe una respuesta del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    client.end();  // Cerramos la conexión después de recibir la respuesta
});

// Evento que se dispara cuando se cierra la conexión
client.on('end', () => {
    console.log('Desconectado del servidor');
});
