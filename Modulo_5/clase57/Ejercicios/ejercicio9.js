const http = require('http'); // Importar el módulo 'http'.

// Crear el servidor HTTP.
const server = http.createServer((req, res) => {
    // Obtener el encabezado 'Authorization' de la solicitud.
    const authHeader = req.headers['authorization'];

    // Verificar si el encabezado tiene el valor correcto.
    if (authHeader === 'Bearer 123') {
        // Si es correcto, responder con un mensaje de acceso concedido.
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Acceso concedido');
    } else {
        // Si no es correcto, devolver un error 403 (Forbidden).
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Acceso denegado');
    }
});

// Iniciar el servidor en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
