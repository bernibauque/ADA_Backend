const net = require('net');

// Configura el cliente TCP para conectarse al servidor
const cliente = net.createConnection({ port: 6000 }, () => {
    console.log('Conectado al servidor');

    // Envía comandos al servidor
    cliente.write('agregar usuario1 contraseñasegura'); // Agrega una contraseña
    setTimeout(() => {
        cliente.write('agregar usuario2 contraseñasegura2'); // Agrega otra contraseña
    }, 1000);

    // Espera un momento y luego solicita la lista de contraseñas
    setTimeout(() => {
        cliente.write('listar'); // Lista todas las contraseñas
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

// Maneja errores en el cliente
cliente.on('error', (err) => {
    console.error(`Error en el cliente: ${err.message}`);
});

