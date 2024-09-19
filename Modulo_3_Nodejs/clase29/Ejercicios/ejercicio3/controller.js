const { addNumbers } = require('./model');

// Función que procesa la solicitud del servidor, recibe los números en formato string, los convierte a número, y devuelve la suma
const processRequest = (message) => {
    const [num1, num2] = message.split(' ').map(Number);  // Dividimos el mensaje en dos números y los convertimos a tipo numérico
    const result = addNumbers(num1, num2);  // Llamamos al modelo para realizar la suma
    return `Resultado: ${result}`;  // Devolvemos el resultado como un string
};

// Exportamos la función para que otros archivos puedan utilizarla
module.exports = {
    processRequest,
};

