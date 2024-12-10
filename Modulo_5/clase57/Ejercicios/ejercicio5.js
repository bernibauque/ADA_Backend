const http = require('http'); // Importar el módulo 'http'.

// Array de usuarios como base de datos simulada.
let usuarios = [
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Carlos' }
];

// Crear el servidor.
const server = http.createServer((req, res) => {
    // Verificar si el método es PUT y la URL comienza con /usuarios/.
    if (req.method === 'PUT' && req.url.startsWith('/usuarios/')) {
        // Extraer el ID del usuario desde la URL.
        const id = parseInt(req.url.split('/')[2]);
        let body = '';

        // Recibir los datos enviados en el cuerpo de la solicitud.
        req.on('data', chunk => {
            body += chunk.toString(); // Convertir el fragmento recibido a texto.
        });

        // Procesar los datos una vez que se hayan recibido por completo.
        req.on('end', () => {
            const datosActualizados = JSON.parse(body); // Convertir el texto a JSON.

            // Buscar el usuario con el ID proporcionado.
            const usuario = usuarios.find(u => u.id === id);

            if (usuario) {
                // Si se encuentra el usuario, actualizar su nombre.
                usuario.nombre = datosActualizados.nombre || usuario.nombre;

                // Responder con el usuario actualizado.
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(usuario));
            } else {
                // Si no se encuentra, responder con un código 404.
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Usuario no encontrado' }));
            }
        });
    } else {
        // Si no coincide con la ruta, devolver 404.
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Recurso no encontrado');
    }
});

// Iniciar el servidor en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
