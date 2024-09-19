const net = require('net');

// Configura el cliente TCP para conectarse al servidor
const cliente = net.createConnection({ port: 5000 }, () => {
    console.log('Conectado al servidor');

    // Envía comandos al servidor
    cliente.write('agregar Juan'); // Agrega un nuevo usuario
    setTimeout(() => {
        cliente.write('agregar Ana'); // Agrega otro usuario
    }, 1000);

    // Espera un momento y luego solicita la lista de usuarios
    setTimeout(() => {
        cliente.write('listar'); // Lista todos los usuarios
    }, 2000);
});

// Maneja los datos recibidos del servidor
cliente.on('data', (data) => {
    console.log(`Respuesta del servidor: ${data.toString()}`);
});

// Maneja el cierre de la conexión
cliente.on('end', () => {
    console.log('Desconectado del servidor');
});
