const { getCurrentTime } = require('./model');

// Función que procesa la solicitud y devuelve la hora actual
const processRequest = () => {
    const currentTime = getCurrentTime();  // Obtenemos la hora actual del modelo
    return `Hora actual: ${currentTime}`;  // Formateamos la respuesta
};

module.exports = {
    processRequest,
};
