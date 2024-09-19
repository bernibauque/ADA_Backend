const net = require('net'); // Módulo para crear conexiones de red (TCP)
const fs = require('fs'); // Módulo para interactuar con el sistema de archivos
const path = require('path'); // Módulo para manejar rutas de archivos

// Variables globales
const PORT = 7200; // Puerto en el que el servidor escuchará las conexiones
const HISTORY_FILE = path.join(__dirname, 'history.json'); // Ruta del archivo de historial de mensajes

// Arreglo para almacenar los clientes conectados
let clients = [];

// Crear el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado:', socket.remoteAddress);

    // Añadir el cliente al arreglo de clientes conectados
    clients.push(socket);

    // Manejar datos recibidos de los clientes
    socket.on('data', (data) => {
        const message = data.toString().trim();
        // Convertir los datos recibidos en una cadena de texto y eliminar espacios en blanco
        console.log('Mensaje recibido:', message);

        if (message === '--history') {
            // Si el mensaje es '--history', enviar el historial de mensajes al cliente
            const history = loadHistory();
            socket.write(JSON.stringify(history, null, 2)); // Enviar el historial como JSON
        } else if (message === '--eraseMessages') {
            // Si el mensaje es '--eraseMessages', borrar el historial de mensajes
            saveHistory([{}]); // Guardar un arreglo con un solo objeto vacío
            socket.write('History has been erased.'); // Confirmar al cliente que el historial ha sido borrado
        } else {
            // Enviar el mensaje a todos los clientes conectados
            clients.forEach(client => {
                if (client !== socket) { // No enviar el mensaje al cliente que lo envió
                    client.write(message);
                }
            });

            // Preparar el objeto de mensaje para almacenar en el historial
            const timestamp = getFormattedDate(); // Obtener la fecha y hora actual en el formato 'dd/MM/yyyy - HH:mm'
            const userName = process.argv[2]?.split('=')[1] || 'Unknown';
            // Obtener el nombre del usuario desde los argumentos de línea de comandos (si no hay, usar 'Unknown')
            const messageObject = {
                message, // Mensaje recibido
                sentBy: userName, // Nombre del usuario que envió el mensaje
                date: timestamp // Fecha y hora en la que se envió el mensaje
            };

            // Cargar el historial de mensajes existente
            const history = loadHistory();
            history.push(messageObject); // Añadir el nuevo mensaje al historial
            saveHistory(history); // Guardar el historial actualizado
        }
    });

    // Manejar desconexión de clientes
    socket.on('end', () => {
        console.log('Cliente desconectado:', socket.remoteAddress);
        clients = clients.filter(client => client !== socket); // Eliminar el cliente del arreglo
    });
});

// Función para cargar el historial de mensajes
const loadHistory = () => {
    try {
        const data = fs.readFileSync(HISTORY_FILE, 'utf8'); // Leer el archivo de historial
        return JSON.parse(data); // Parsear los datos como JSON
    } catch (err) {
        console.error('Error al cargar el historial:', err);
        return []; // Retornar un arreglo vacío si ocurre un error
    }
};

// Función para guardar el historial de mensajes
const saveHistory = (history) => {
    try {
        fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2)); // Escribir el historial en el archivo
    } catch (err) {
        console.error('Error al guardar el historial:', err);
    }
};

// Función para obtener la fecha y hora en formato 'dd/MM/yyyy - HH:mm'
const getFormattedDate = () => {
    const now = new Date(); // Obtener la fecha y hora actual
    const day = String(now.getDate()).padStart(2, '0'); // Obtener el día del mes y asegurarse de que tenga dos dígitos
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Obtener el mes (1-12) y asegurarse de que tenga dos dígitos
    const year = now.getFullYear(); // Obtener el año
    const hours = String(now.getHours()).padStart(2, '0'); // Obtener las horas y asegurarse de que tenga dos dígitos
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Obtener los minutos y asegurarse de que tenga dos dígitos

    return `${day}/${month}/${year} - ${hours}:${minutes}`; // Formato 'dd/MM/yyyy - HH:mm'
};

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en 127.0.0.1:${PORT}`);
    // Imprimir en consola que el servidor está escuchando en el puerto especificado
});



