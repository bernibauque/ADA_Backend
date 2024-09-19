const net = require('net');

// Crear una conexión TCP al servidor en localhost en el puerto 8080
const client = net.createConnection({ port: 8080 }, () => {
    console.log('Conectado al servidor.');
    // Enviar un mensaje al servidor
    client.write('Hola desde el cliente');
});

// Manejar los datos recibidos del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    // Cerrar la conexión después de recibir la respuesta
    client.end();
});

// Manejar el cierre de la conexión
client.on('end', () => {
    console.log('Desconectado del servidor');
});

// Manejar errores
client.on('error', (err) => {
    console.error('Error:', err.message);
});
