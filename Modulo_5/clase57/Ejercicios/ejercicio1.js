const http = require('http'); // Importa el módulo 'http' de Node.js.

// Crea un servidor que escucha en el puerto 3000.
const server = http.createServer((req, res) => {
    // Establece un código de estado 200 (OK).
    res.statusCode = 200;
    // Configura el encabezado para el tipo de contenido como texto plano.
    res.setHeader('Content-Type', 'text/plain');
    // Envía la respuesta con el mensaje "Hola, Mundo!" y finaliza la respuesta.
    res.end('Hola, Mundo!');
});

// Inicia el servidor y lo hace escuchar en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
