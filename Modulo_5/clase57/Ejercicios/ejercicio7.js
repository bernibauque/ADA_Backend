const http = require('http'); // Importar el módulo 'http'.

// Crear el servidor HTTP.
const server = http.createServer((req, res) => {
    // Registrar cada solicitud recibida con su método y ruta.
    console.log(`Método: ${req.method}, Ruta: ${req.url}`);

    // Verificar si la solicitud es un GET a la ruta '/ping'.
    if (req.method === 'GET' && req.url === '/ping') {
        // Responder con un mensaje "Pong!" y un código de estado 200 (OK).
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Pong!');
    } else {
        // Si la ruta o método no coinciden, devolver un error 400 (Bad Request).
        res.writeHead(400, { 'Content-Type': 'application/json' });
        // Enviar un mensaje de error en formato JSON.
        res.end(JSON.stringify({ error: 'Solicitud no válida' }));
    }
});

// Iniciar el servidor en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});

