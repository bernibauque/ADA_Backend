const http = require('http'); // Importa el módulo 'http'.

// Array con usuarios para simular una base de datos.
const usuarios = [
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Carlos' },
    { id: 3, nombre: 'Beatriz' }
];

const server = http.createServer((req, res) => {
    // Verifica si la solicitud es GET y tiene un ID en la URL.
    if (req.method === 'GET' && req.url.startsWith('/usuarios/')) {
        const id = parseInt(req.url.split('/')[2]); // Extrae el ID de la URL.
        const usuario = usuarios.find(u => u.id === id); // Busca el usuario por ID.

        if (usuario) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(usuario)); // Devuelve el usuario encontrado.
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Usuario no encontrado' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Recurso no encontrado');
    }
});

server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
