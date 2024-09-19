// Importar los módulos necesarios para trabajar con archivos
const fs = require('fs'); // Módulo para manipular el sistema de archivos
const path = require('path'); // Módulo para manejar y transformar rutas de archivos

// Ruta del archivo JSON donde se almacenará el historial de mensajes
const historyFilePath = path.join(__dirname, 'history.json');
// `__dirname` es el directorio del archivo actual. `path.join` construye una ruta al archivo 'history.json'

// Función para cargar el historial de mensajes desde el archivo
const loadHistory = () => {
    if (fs.existsSync(historyFilePath)) { // Verifica si el archivo existe
        return JSON.parse(fs.readFileSync(historyFilePath, 'utf8')); // Lee el archivo y convierte su contenido a un objeto JavaScript
    } else {
        return []; // Si el archivo no existe, devuelve un arreglo vacío
    }
};

// Función para guardar el historial de mensajes en el archivo
const saveHistory = (history) => {
    fs.writeFileSync(historyFilePath, JSON.stringify(history, null, 2)); // Convierte el historial a JSON y lo escribe en el archivo
};

// Función para agregar un mensaje al historial
const addMessage = (message, sentBy) => {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 16); // Obtiene la fecha y hora actual en formato 'YYYY-MM-DD HH:MM'
    const newMessage = { message, sentBy, date: timestamp }; // Crea un objeto de mensaje con el contenido, el remitente y la fecha
    const history = loadHistory(); // Carga el historial actual
    history.push(newMessage); // Agrega el nuevo mensaje al historial
    saveHistory(history); // Guarda el historial actualizado
};

// Función para borrar el historial de mensajes
const eraseHistory = () => {
    saveHistory([{}]); // Guarda un historial vacío con un objeto vacío
};

// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = {
    loadHistory,
    saveHistory,
    addMessage,
    eraseHistory
};

