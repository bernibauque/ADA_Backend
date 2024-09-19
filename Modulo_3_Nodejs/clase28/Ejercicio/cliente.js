const net = require('net'); // Módulo para crear y gestionar conexiones de red (TCP)
const readline = require('readline'); // Módulo para leer datos del usuario de forma no bloqueante

// Configuración de conexión
const OPTIONS = {
    port: 7200, // Puerto en el que se conecta el cliente
    host: '127.0.0.1', // Dirección IP del servidor
};

// Crear la conexión TCP al servidor
const clientTCP = net.createConnection(OPTIONS);

// Configurar la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin, // Flujo de entrada desde la consola
    output: process.stdout, // Flujo de salida a la consola
});

const userName = process.argv[2]?.split('=')[1] || 'Unknown';
// Obtener el nombre del usuario desde los argumentos de línea de comandos (si no hay, usar 'Unknown')

// Función para manejar la entrada del usuario
const handleInput = () => {
    rl.question('CLIENT --> ', (clientMsg) => { // Leer la entrada del usuario
        // Enviar el mensaje al servidor
        clientTCP.write(clientMsg);

        // Volver a llamar a handleInput para permitir más entradas
        handleInput();
    });
};

// Manejar la conexión exitosa al servidor
clientTCP.on('connect', () => {
    console.log('Conexión exitosa con el servidor!');
    handleInput(); // Llamar a la función para manejar la entrada del usuario
});

// Manejar datos recibidos del servidor
clientTCP.on('data', (serverData) => {
    const serverMsg = serverData.toString(); // Convertir los datos recibidos en una cadena de texto
    console.log('SERVER -->', serverMsg); // Imprimir el mensaje recibido del servidor
});

// Manejar la desconexión del servidor
clientTCP.on('end', () => {
    console.log('El servidor ha cerrado la conexión.');
    rl.close(); // Cerrar la interfaz de readline
});

// Manejar errores de conexión
clientTCP.on('error', (err) => {
    console.log('Error en la conexión:', err); // Imprimir el error de conexión
    rl.close(); // Cerrar la interfaz de readline
});



