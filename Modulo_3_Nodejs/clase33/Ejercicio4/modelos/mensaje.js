const { v4: uuidv4 } = require('uuid');

// Lista para almacenar los mensajes
let mensajes = [];

// Función para añadir un mensaje
const agregarMensaje = (usuario, mensaje) => {
    const id = uuidv4();
    mensajes.push({ id, usuario, mensaje });
    return `Mensaje de ${usuario} recibido con éxito.`;
};

// Función para listar todos los mensajes
const listarMensajes = () => {
    return mensajes; // Asegúrate de devolver un array
};

module.exports = {
    agregarMensaje,
    listarMensajes
};


