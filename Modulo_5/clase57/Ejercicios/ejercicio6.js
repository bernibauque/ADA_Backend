const http = require('http'); // Importar el módulo 'http'.

// Base de datos simulada.
let usuarios = [
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Carlos' }
];

// Crear el servidor.
const server = http.createServer((req, res) => {
    // Verificar si el método es DELETE y la URL comienza con /usuarios/.
    if (req.method === 'DELETE' && req.url.startsWith('/usuarios/')) {
        // Extraer el ID desde la URL.
        const id = parseInt(req.url.split('/')[2]);

        // Encontrar el índice del usuario con el ID proporcionado.
        const indice = usuarios.findIndex(u => u.id === id);

        if (indice !== -1) {
            // Si el usuario existe, eliminarlo del array.
            usuarios.splice(indice, 1);
            res.writeHead(204); // Código 204: No Content.
            res.end();
        } else {
            // Si no se encuentra, devolver 404.
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Usuario no encontrado' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Recurso no encontrado');
    }
});

// Iniciar el servidor en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
