// Importamos los módulos necesarios
const net = require('net'); // Módulo para crear la conexión TCP
const readline = require('readline'); // Módulo para leer la entrada desde la terminal

// Obtenemos el nombre del usuario desde los argumentos de la línea de comandos
// Ejemplo de uso: node client.js --name Cliente1
const userName = process.argv[2]?.split('=')[1] || 'Cliente';

// Crear una interfaz de readline para leer la entrada del usuario desde la terminal
const rl = readline.createInterface({
    input: process.stdin, // Establecemos la entrada estándar como fuente de datos
    output: process.stdout // Establecemos la salida estándar para mostrar los mensajes
});

// Conectamos al servidor TCP en el puerto 3000
// La función callback se ejecuta cuando la conexión es exitosa
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor');
});

// Evento que se ejecuta cuando el usuario ingresa una línea de texto en la terminal
// Enviamos el texto ingresado al servidor
rl.on('line', (input) => {
    client.write(input);
});

// Evento que se ejecuta cuando el cliente recibe datos del servidor
// Mostramos los datos recibidos en la terminal del cliente
client.on('data', (data) => {
    console.log(`Servidor: ${data.toString()}`);
});

// Evento que se ejecuta cuando el servidor cierra la conexión
client.on('end', () => {
    console.log('Desconectado del servidor');
});

// Evento que se ejecuta cuando ocurre un error en la conexión
client.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});
