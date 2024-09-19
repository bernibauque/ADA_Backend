const net = require('net');
const readline = require('readline');

const PORT = 10000;
const HOST = '127.0.0.1';

// Crear la interfaz de entrada para el cliente
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Crear el cliente
const client = new net.Socket();

// Conectar al servidor
client.connect(PORT, HOST, () => {
    console.log('Conectado al servidor\n');
    promptUser();
});

// Manejar datos recibidos del servidor
client.on('data', (data) => {
    console.log(`Respuesta del servidor: ${data.toString().trim()}\n`);
    promptUser(); // Volver a solicitar entrada del usuario después de recibir respuesta
});

// Manejar eventos de cierre
client.on('close', () => {
    console.log('Conexión cerrada\n');
    rl.close(); // Cerrar la interfaz de lectura al cerrar la conexión
});

// Manejar errores
client.on('error', (err) => {
    console.error(`Error en el cliente: ${err}\n`);
});

// Función para solicitar input del usuario
function promptUser() {
    rl.question('Ingrese un mensaje para el servidor (o "exit" para salir): ', (message) => {
        if (message.toLowerCase() === 'exit') {
            client.end(); // Cerrar la conexión al salir
        } else {
            client.write(message + '\n'); // Enviar mensaje al servidor
        }
    });
}




