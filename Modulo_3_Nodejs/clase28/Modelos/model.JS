// model.js

// Importa el módulo 'fs' para realizar operaciones de archivo como lectura y escritura
import * as fs from 'fs';
// Importa el módulo 'path' para manejar las rutas de archivos de manera segura y portátil
import path from 'path';

// Define la ruta al archivo JSON donde se almacenarán los mensajes
const PATH = path.join(__dirname, 'history.json');

// Función para obtener todo el historial de mensajes
const getHistory = () => {
    // Lee el archivo JSON de manera sincrónica y guarda el contenido en un buffer
    const messagesCollectionBuffer = fs.readFileSync(PATH);
    // Convierte el buffer del archivo JSON en un objeto JavaScript
    const messagesCollection = JSON.parse(messagesCollectionBuffer);
    // Devuelve el historial de mensajes como un array de objetos
    return messagesCollection;
};

// Función para borrar todos los mensajes del historial
const eraseHistory = () => {
    // Escribe un array vacío en el archivo JSON para borrar el historial
    fs.writeFileSync(PATH, '[]');
    // Devuelve 'true' para indicar que el historial ha sido borrado con éxito
    return true;
};

// Función para agregar un nuevo mensaje al historial
const pushMessage = (message, userName) => {
    // Obtiene el historial actual de mensajes llamando a la función getHistory
    const messagesCollection = getHistory();
    // Crea un nuevo objeto de mensaje con la información proporcionada
    const messageObj = {
        message: message,            // Mensaje enviado por el usuario
        sentBy: userName,           // Nombre del usuario que envía el mensaje
        date: new Date().toLocaleString('es-ES', { timeZone: 'UTC' }) // Fecha y hora actual en formato legible
    };
    // Agrega el nuevo mensaje al array de historial
    messagesCollection.push(messageObj);
    // Convierte el historial de mensajes actualizado a una cadena JSON
    const historyJsonString = JSON.stringify(messagesCollection, null, 2);
    // Escribe la cadena JSON en el archivo para guardar el historial actualizado
    fs.writeFileSync(PATH, historyJsonString);
};

// Exporta las funciones para que puedan ser usadas en otros módulos
export { getHistory, eraseHistory, pushMessage };




