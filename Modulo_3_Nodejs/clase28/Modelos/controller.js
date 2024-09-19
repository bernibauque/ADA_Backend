// controller.js

// Importa todas las funciones del archivo model.js
import * as model from './model.js';

// Función para obtener el historial completo de mensajes
const getHistory = () => {
    // Llama a la función getHistory del modelo para obtener el historial de mensajes
    return model.getHistory();
};

// Función para borrar todo el historial de mensajes
const eraseHistory = () => {
    // Llama a la función eraseHistory del modelo para borrar el historial
    return model.eraseHistory();
};

// Función para agregar un nuevo mensaje al historial
const pushMessage = (message, userName) => {
    // Llama a la función pushMessage del modelo para agregar el nuevo mensaje
    return model.pushMessage(message, userName);
};

// Exporta las funciones para que puedan ser usadas por el servidor o el cliente
export { getHistory, eraseHistory, pushMessage };
