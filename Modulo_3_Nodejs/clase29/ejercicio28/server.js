const net = require('net');
const readline = require('readline');
const path = require('path');
const { timeStamp } = require('console');

const PORT = 7200;
const HISTORY_FILE = path.join(__dirname, 'history.json');

// Arreglo para almacenar los clientes conectados 
let clients = [];

// Crear el servidor 
const server = net.createServer((socket) => {
    console.log('Cliente conectado: ', socket.remoteAddress);
    clients.push(socket);

    // Manejar datos del cliente
    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log('Mensaje recibido: ', message);
    })

    if (message === '--history') {
        const history = loadHistory();
        socket.write(JSON.stringify(history, null, 2));
    } else if (message === '--eraseMessages') {
        saveHistory([{}])
        socket.write('Historial fue borrado.');
    } else {
        clients.forEach(client => {
            if (client !== socket) {
                client.write(message);
            }
        });

        const timeStamp = getFormattedDate();
        const userName = process.argv[2]?.split('=')[1] || 'Unknow';

        const messageObject = {
            message,
            sentby: userName,
            date: timeStamp
        };

        const history = loadHistory();
        history.push(messageObject);
        saveHistory(history);
    }
});

// Manejamos desconexion del cliente
socket.on('end', () => {
    console.log('Cliente desconectado: ', socket.remoteAddress);
    clients = clients.filter(client => client !== socket);

})
