const { incrementCounter } = require('./model');

// Función que procesa el mensaje recibido, incrementa el contador, y devuelve el mensaje modificado
const processMessage = (message) => {
    const sequenceNumber = incrementCounter();  // Incrementa el contador
    return `Mensaje ${sequenceNumber}: ${message}`;  // Añade el número de secuencia al mensaje
};

module.exports = {
    processMessage,
};

