// Importamos las funciones definidas en el modelo
const model = require('./model');

// Función que obtiene el historial de mensajes
// Llama a la función correspondiente del modelo y retorna los mensajes
const getHistory = () => {
    return model.getHistory();
};

// Función que borra el historial de mensajes
// Llama a la función correspondiente del modelo
const eraseHistory = () => {
    return model.eraseHistory();
};

// Función que agrega un mensaje al historial
// Llama a la función correspondiente del modelo y le pasa el mensaje y el nombre del usuario
const pushMessage = (message, userName) => {
    return model.pushMessage(message, userName);
};

// Exportamos las funciones para que puedan ser usadas en otros módulos
module.exports = { getHistory, eraseHistory, pushMessage };
