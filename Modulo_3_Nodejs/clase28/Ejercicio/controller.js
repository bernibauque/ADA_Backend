// Importar las funciones del archivo model.js para manipular el historial
const model = require('./model'); // Importa todas las funciones del archivo model.js

// Función para obtener el historial de mensajes
const getHistory = () => {
    return model.loadHistory(); // Llama a la función `loadHistory` del modelo para obtener el historial
};

// Función para borrar el historial de mensajes
const eraseHistory = () => {
    model.eraseHistory(); // Llama a la función `eraseHistory` del modelo para borrar el historial
    return true; // Indica que la operación fue exitosa
};

// Función para agregar un mensaje al historial
const pushMessage = (message, sentBy) => {
    model.addMessage(message, sentBy); // Llama a la función `addMessage` del modelo para agregar el mensaje
};

// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = {
    getHistory,
    eraseHistory,
    pushMessage
};

