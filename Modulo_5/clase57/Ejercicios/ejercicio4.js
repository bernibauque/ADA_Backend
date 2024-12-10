const http = require('http'); // Importa el módulo 'http'.

const server = http.createServer((req, res) => {
    // Verifica si la solicitud es POST en la ruta /usuarios.
    if (req.method === 'POST' && req.url === '/usuarios') {
        let body = '';

        // Recibe los datos en el cuerpo de la solicitud en fragmentos.
        req.on('data', chunk => {
            body += chunk.toString(); // Convierte el fragmento a texto y lo acumula.
        });

        // Una vez recibidos todos los datos, los procesa.
        req.on('end', () => {
            const nuevoUsuario = JSON.parse(body); // Convierte el texto a un objeto JSON.
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ mensaje: 'Usuario creado', data: nuevoUsuario }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Recurso no encontrado');
    }
});

server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});

