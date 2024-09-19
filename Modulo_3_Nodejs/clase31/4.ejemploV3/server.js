// Importamos los módulos necesarios: 'net' para el servidor TCP y 'uuid' para generar los UUIDs.
const net = require('net');
const { v3: uuidv3 } = require('uuid');

// Espacio de nombres UUID. Esto puede ser cualquier UUID válido o usar constantes predeterminadas.
const NAMESPACE = uuidv3.URL;

// Creamos un servidor TCP
const server = net.createServer((socket) => {
    // Generamos un UUID basado en un nombre (ej. nombre de usuario) y el espacio de nombres definido.
    const nombre = "usuarioEjemplo"; // Aquí podrías usar un nombre dinámico o recibido.
    const connectionId = uuidv3(nombre, NAMESPACE);
    console.log('Nueva conexión con ID:', connectionId);

    // Manejamos el evento 'data', que se dispara cuando se reciben datos a través del socket
    socket.on('data', (data) => {
        console.log(`Datos recibidos de ${connectionId}: ${data}`);
    });

    // Manejamos el evento 'end', que se dispara cuando la conexión se cierra
    socket.on('end', () => {
        console.log(`Conexión con ID ${connectionId} finalizada`);
    });
});

// Hacemos que el servidor escuche en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});


