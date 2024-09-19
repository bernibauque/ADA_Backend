const net = require('net');

// Crea la conexión con el servidor TCP
const client = net.createConnection({ port: 7000, host: 'localhost' }, () => {
    console.log('Conectado al servidor.');
    client.write('Hola, servidor!');
});

// Maneja el evento 'data' para recibir datos del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    client.end(); // Cierra la conexión después de recibir la respuesta
});

// Maneja el evento 'end' cuando se cierra la conexión
client.on('end', () => {
    console.log('Desconectado del servidor.');
});

// Maneja el evento 'error' para capturar errores
client.on('error', (err) => {
    console.error('Error:', err.message);
});
