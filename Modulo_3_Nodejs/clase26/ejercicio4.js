const net = require('net');

// Crea el cliente TCP
const client = net.createConnection({ port: 5000, host: 'localhost' }, () => {
    console.log('Conectado al servidor');
    // Envía un mensaje al servidor
    client.write('Hola, servidor');
});

// Maneja los datos recibidos del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    client.end();  // Cierra la conexión después de recibir la respuesta
});

// Maneja los errores
client.on('error', (err) => {
    console.log('Error:', err.message);
});
