// Importamos modulo http
const http = require('http')

// Creamos un servidor usando el metodo 'createServer'
// Esta funcion toma un callback con dos parametros:
// - req: Representa la solicitud que hace el cliente
// - res: Representa la respuesta que enviara el servidor 
// al cliente
const server = http.createServer((req, res) => {

    // Verifica si el metodo de la solicitud GET y la url
    // es '/usuarios'
    if (req.method === 'GET' && req.url === '/usuarios') {

        // Si la condicion es verdadera, configura la respuesta
        // con un codigo 200 y establece el encabezado 
        // content-type como 'application/json'
        res.writeHead(200, { 'Content-Type': 'application/json' })

        // Envia una array de usuarios en formato json como respuesta
        res.end(JSON.stringify([{ id: 1, nombre: 'Berni' }, { id: 2, nombre: 'Sofi' }]))

        // Si el metodo es post y la url es '/usuarios' 
        // procedera con la creacion del usuario
    } else if (req.method === 'POST' && req.url === '/usuarios') {

        // Variable para acumular los datos que lleguen
        // en el cuerpo de la solicitud
        let body = '';

        // El evento 'data' se activa cada vez que llega un 
        // fragmento de datos
        req.on('data', chunk => {
            body += chunk.toString();
            // Convierte el fragmento de datos a texto y lo
            // agrega al body
        })

        // El evento 'end' se activa cuando todos los datos
        // son recibidos
        req.on('end', () => {

            // Convierte el cuerpo recibido en JSON a un 
            // objeto javascript
            const nuevoUsuario = JSON.parse(body)

            // Configura la respuesta con un codigo 201 (creado)
            // indicando que se ha creado un nuevo recurso
            res.writeHead(201, { 'content-type': 'application/json' })

        })

        // Si no se cumple las condiciones anteriores, vamos a 
        // devolver un 404
    } else {
        // Configuramos la respuesta con el codigo 404
        res.writeHead(404, { 'content-type': 'text/plain' })

        // Envia un mensaje indicando que la ruta no fue 
        // encontrada
        res.end('Recurso no encontrado')
    }
})

//Iniciamos el servidor en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor ejecutandose en http://localhost:3000');
})