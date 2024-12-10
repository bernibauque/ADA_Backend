const http = require('http'); // Importar el módulo 'http'.

// Crear el servidor HTTP.
const server = http.createServer((req, res) => {
    // Verificar si la solicitud es un GET a la ruta '/buscar'.
    if (req.method === 'GET' && req.url.startsWith('/buscar')) {
        // Crear un objeto URL para analizar los parámetros.
        const url = new URL(req.url, `http://localhost:3000`);
        // Obtener el valor del parámetro 'nombre' de la query string.
        const nombre = url.searchParams.get('nombre');

        // Verificar si el parámetro 'nombre' fue proporcionado.
        if (nombre) {
            // Si se proporciona, responder con un mensaje.
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Buscando usuario con nombre: ${nombre}`);
        } else {
            // Si no se proporciona, devolver un error 400 (Bad Request).
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Falta el parámetro "nombre"');
        }
    } else {
        // Si la ruta no coincide, devolver un error 404 (Not Found).
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

// Iniciar el servidor en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
