// Importamos modulo http
const http = require('http');

// Creamos un servidor usando el metodo 'createServer'
// Esta funcion toma un callback con dos parametros:
// - req: Representa la solicitud que hace el cliente
// - res: Representa la respuesta que enviara el servidor 
// al cliente
const server = http.createServer((req, res) => {

    // Establece el codigo de estado de la respuesta a 
    // 200 (ok) indicando que la solicitud fue exitosa 
    res.status = 200;

    // Configura el encabezado 'Content-Type' para que el 
    // cliente sepa que el contenido sera texto plano
    res.setHeader('Content-Type', 'text/plain');

    // Envia la respuesta al cliente con el mensaje
    // Hola chicas y finaliza la respuesta
    res.end('Hola, Chicas')
})

// Hace que el servidor escuche en el puerto 3000
// Cuando el servidor esta listo, imprime un mensaje en 
// la terminal.
server.listen(3000, () => {
    console.log('Servidor ejecutandose en http://localhost:3000');
})

