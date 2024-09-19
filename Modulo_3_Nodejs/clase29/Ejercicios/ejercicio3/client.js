// client.js

const net = require('net');
const readline = require('readline');

// Configuramos la interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creamos una conexión al servidor
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor');

    // Mensaje de instrucción para el usuario
    console.log('Por favor, ingrese dos números separados por un espacio. Ejemplo: "5 10"');

    // Pedimos al usuario que ingrese dos números
    rl.question('Ingrese los números: ', (input) => {
        client.write(input);  // Enviamos los números al servidor
    });
});

// Evento que se dispara cuando se recibe una respuesta del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());  // Mostramos la respuesta del servidor (la suma)
    client.end();  // Cerramos la conexión después de recibir la respuesta
});

// Evento que se dispara cuando se cierra la conexión
client.on('end', () => {
    console.log('Desconectado del servidor');
    rl.close();  // Cerramos la interfaz de readline al final
});

