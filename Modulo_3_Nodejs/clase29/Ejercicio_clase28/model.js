// Importamos el módulo 'fs' para interactuar con el sistema de archivos
const fs = require('fs');
// Importamos el módulo 'path' para manejar y resolver rutas de archivos
const path = require('path');

// Definimos la ruta completa hacia el archivo JSON que almacena el historial de mensajes
const HISTORY_PATH = path.join(__dirname, 'history.json');
// Utiliza el método join del módulo path para combinar varias partes de una ruta de archivo en una sola cadena de texto.
//__dirname: Es una variable global en Node.js que contiene la ruta absoluta al directorio donde se encuentra el archivo que está ejecutando el código. Es útil para trabajar con rutas de archivos sin importar desde qué lugar se ejecute el script.

// Función que lee el historial de mensajes del archivo JSON
// Retorna un array de objetos donde cada objeto representa un mensaje
const getHistory = () => {
    // Leemos el contenido del archivo de historial de mensajes
    const data = fs.readFileSync(HISTORY_PATH, 'utf-8');
    // Convertimos el contenido del archivo de formato JSON (texto) a un objeto JavaScript
    return JSON.parse(data);
};

// Función que agrega un nuevo mensaje al historial de mensajes
// Recibe el mensaje y el nombre del usuario que lo envió
const pushMessage = (message, userName) => {
    // Obtenemos el historial actual de mensajes
    const history = getHistory();
    // Creamos un nuevo objeto que representa el mensaje
    const newMessage = {
        // Campo 'sentBy' indica quién envió el mensaje
        sentBy: userName,
        // Campo 'date' almacena la fecha y hora de cuando se envió el mensaje
        date: new Date().toLocaleString(),
        // Campo 'message' contiene el texto del mensaje
        message: message
    };
    // Añadimos el nuevo mensaje al historial
    history.push(newMessage);
    // Guardamos el historial actualizado en el archivo JSON
    fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2));
};

// Función que borra todos los mensajes del historial
// Deja el archivo JSON vacío, representado por un array vacío
const eraseHistory = () => {
    // Sobrescribimos el archivo JSON con un array vacío
    fs.writeFileSync(HISTORY_PATH, '[]');
};

// Exportamos las funciones para que puedan ser usadas en otros módulos
module.exports = { getHistory, pushMessage, eraseHistory };
