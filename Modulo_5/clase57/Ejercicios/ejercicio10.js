const http = require('http'); // Importar el módulo 'http'.

// Crear el servidor HTTP.
const server = http.createServer((req, res) => {
    // Obtener la fecha y hora actuales para el log.
    const timestamp = new Date().toISOString();

    // Registrar la solicitud con el método, ruta y timestamp.
    console.log(`[${timestamp}] Método: ${req.method}, Ruta: ${req.url}`);

    // Responder con un mensaje simple indicando que el log ha sido registrado.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Log registrado');
});

// Iniciar el servidor en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});

