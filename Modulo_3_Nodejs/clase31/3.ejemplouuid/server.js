const net = require('net');
const { v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid');

const NAMESPACE = uuidv3.URL;

// Creamos un servidor TCP
const server = net.createServer((socket) => {
    // Generamos UUIDs de diferentes versiones para la conexión
    const idV1 = uuidv1();
    const idV3 = uuidv3("usuario", NAMESPACE);
    const idV4 = uuidv4();
    const idV5 = uuidv5("usuario", NAMESPACE);

    // Imprimimos los UUIDs en la consola
    console.log("Conexión establecida:");
    console.log("UUID v1:", idV1);
    console.log("UUID v3:", idV3);
    console.log("UUID v4:", idV4);
    console.log("UUID v5:", idV5);

    // Manejar el evento 'data'
    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data}`);
    });

    // Manejar el evento 'end'
    socket.on('end', () => {
        console.log('Conexión finalizada');
    });
});

// Hacemos que el servidor escuche en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});
