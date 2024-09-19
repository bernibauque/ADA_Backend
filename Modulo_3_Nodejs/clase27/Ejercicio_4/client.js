// Importamos los módulos necesarios
const net = require('net'); // Módulo para crear conexiones de red
const readline = require('readline'); // Módulo para leer entrada del usuario

// Definimos las constantes para la conexión
const PORT = 11000; // El puerto en el que escucha el servidor
const HOST = 'localhost'; // La dirección del servidor (en este caso, la máquina local)

// Creamos un nuevo socket de cliente
const client = new net.Socket();

// Creamos una interfaz de lectura para la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,  // Usamos la entrada estándar (teclado)
    output: process.stdout // Usamos la salida estándar (pantalla)
});

// Conectamos al servidor
client.connect(PORT, HOST, () => {
    // Esta función se ejecuta cuando la conexión se establece
    console.log('Conectado al servidor');
    console.log('Escribe un mensaje (o "salir" para terminar):');
    rl.prompt(); // Muestra un prompt al usuario para que escriba
});

// Manejamos los datos recibidos del servidor
client.on('data', (data) => {
    // Esta función se ejecuta cada vez que recibimos datos del servidor
    console.log('Respuesta del servidor:', data.toString().trim());
    rl.prompt(); // Volvemos a mostrar el prompt para el siguiente mensaje
});

// Manejamos la entrada del usuario
rl.on('line', (input) => {
    // Esta función se ejecuta cada vez que el usuario escribe una línea y presiona Enter
    if (input.toLowerCase() === 'salir') {
        // Si el usuario escribe 'salir', cerramos la conexión y la interfaz de lectura
        client.end();
        rl.close();
    } else {
        // Si no, enviamos el mensaje al servidor
        client.write(input);
    }
});

// Manejamos el cierre de la conexión
client.on('close', () => {
    // Esta función se ejecuta cuando la conexión se cierra
    console.log('Conexión cerrada');
    process.exit(0); // Terminamos el proceso de Node.js
});

// Manejamos los errores de la conexión
client.on('error', (err) => {
    // Esta función se ejecuta si ocurre algún error en la conexión
    console.error('Error:', err);
});



