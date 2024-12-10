// Importa el módulo 'http' de Node.js, que permite crear un servidor HTTP.
const http = require('http');

// Crea un servidor usando el método 'createServer'.
// Esta función toma un callback con dos parámetros:
// - 'req' (request): representa la solicitud que hace el cliente.
// - 'res' (response): representa la respuesta que enviará el servidor al cliente.
const server = http.createServer((req, res) => {

    // Establece el código de estado de la respuesta a 200 (OK), indicando que la solicitud fue exitosa.
    res.statusCode = 200;

    // Configura el encabezado 'Content-Type' para que el cliente sepa que el contenido es texto plano.
    res.setHeader('Content-Type', 'text/plain');

    // Envía la respuesta al cliente con el mensaje 'Hola, Mundo!' y finaliza la respuesta.
    res.end('Hola, Mundo!');
});

// Hace que el servidor escuche en el puerto 3000.
// Cuando el servidor está listo, imprime un mensaje en la consola.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});




