// Importa el módulo 'http' de Node.js para crear un servidor HTTP.
const http = require('http');

// Crea un servidor HTTP utilizando el método 'createServer'.
// La función de callback toma dos parámetros:
// - 'req' (request): Representa la solicitud que hace el cliente.
// - 'res' (response): Representa la respuesta que el servidor enviará al cliente.
const server = http.createServer((req, res) => {

    // Verifica si el método de la solicitud es 'GET' y la URL es '/usuarios'.
    if (req.method === 'GET' && req.url === '/usuarios') {
        // Si la condición es verdadera, configura la respuesta con un código 200 (OK)
        // y establece el encabezado 'Content-Type' como 'application/json'.
        res.writeHead(200, { 'Content-Type': 'application/json' });

        // Envía un array de usuarios en formato JSON como respuesta.
        res.end(JSON.stringify([{ id: 1, nombre: 'Juan' }, { id: 2, nombre: 'María' }]));

        // Si el método es 'POST' y la URL es '/usuarios', procesará la creación de un nuevo usuario.
    } else if (req.method === 'POST' && req.url === '/usuarios') {
        // Variable para acumular los datos que lleguen en el cuerpo de la solicitud.
        let body = '';

        // El evento 'data' se activa cada vez que llega un fragmento de datos.
        // Aquí, se acumulan los fragmentos en la variable 'body'.
        req.on('data', chunk => {
            body += chunk.toString(); // Convierte el fragmento de datos a texto y lo agrega a 'body'.
        });

        // El evento 'end' se activa cuando todos los datos han sido recibidos.
        req.on('end', () => {
            // Convierte el cuerpo recibido en JSON a un objeto de JavaScript.
            const nuevoUsuario = JSON.parse(body);

            // Configura la respuesta con un código 201 (Created) indicando que se ha creado un nuevo recurso.
            res.writeHead(201, { 'Content-Type': 'application/json' });

            // Envía el nuevo usuario como respuesta en formato JSON.
            res.end(JSON.stringify(nuevoUsuario));
        });

        // Si no se cumplen las condiciones anteriores, se devuelve un error 404 (Not Found).
    } else {
        // Configura la respuesta con un código 404 (Recurso no encontrado).
        res.writeHead(404, { 'Content-Type': 'text/plain' });

        // Envía un mensaje indicando que la ruta no fue encontrada.
        res.end('Recurso no encontrado');
    }
});

// Inicia el servidor y hace que escuche en el puerto 3000.
// Una vez que el servidor esté ejecutándose, imprime un mensaje en la consola.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});




