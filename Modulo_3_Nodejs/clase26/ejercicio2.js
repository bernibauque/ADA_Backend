const net = require('net');

// Crea el cliente TCP
const client = net.createConnection({ port: 5000, host: 'localhost' }, () => {
    console.log('Conectado al servidor');
});

// Maneja los datos recibidos del servidor
client.on('data', (data) => {
    console.log('Mensaje del servidor:', data.toString());
    client.end();  // Cierra la conexión después de recibir el mensaje
});

// Maneja los errores
client.on('error', (err) => {
    console.log('Error:', err.message);
});
