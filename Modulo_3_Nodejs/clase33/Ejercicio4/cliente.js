const net = require('net');

// Configura el cliente TCP para conectarse al servidor
const cliente = net.createConnection({ port: 6000 }, () => {
    console.log('Conectado al servidor');

    // Envía comandos al servidor
    cliente.write('enviar usuario1 Hola, este es un mensaje de prueba.'); // Envía un mensaje
    setTimeout(() => {
        cliente.write('enviar usuario2 Otro mensaje para probar.'); // Envía otro mensaje
    }, 1000);

    // Espera un momento y luego solicita la lista de mensajes
    setTimeout(() => {
        cliente.write('listar'); // Lista todos los mensajes
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


