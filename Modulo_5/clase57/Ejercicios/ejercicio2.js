const http = require('http'); // Importa el módulo 'http'.

const server = http.createServer((req, res) => {
    // Verifica si la solicitud es un GET en la ruta /usuarios.
    if (req.method === 'GET' && req.url === '/usuarios') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Envía un array de usuarios como respuesta en formato JSON.
        const usuarios = [
            { id: 1, nombre: 'Ana' },
            { id: 2, nombre: 'Carlos' },
            { id: 3, nombre: 'Beatriz' }
        ];
        res.end(JSON.stringify(usuarios)); // Convierte el array a JSON y lo envía.
    } else {
        // Si no es la ruta esperada, responde con un 404.
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Recurso no encontrado');
    }
});

// Inicia el servidor.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
