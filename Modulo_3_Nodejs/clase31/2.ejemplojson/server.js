const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('datos.json', 'utf-8', (err, data) => {
        if (err) {
            res.end('No se pudo leer el archivo JSON.');
            return;
        }

        res.setHeader('Content-type', 'application/json');
        res.end(data)
    })
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);

})