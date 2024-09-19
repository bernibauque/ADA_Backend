// Función para formatear la lista de mensajes en una cadena legible
const formatearMensajes = (mensajes) => {
    if (!Array.isArray(mensajes)) {
        throw new Error('El parámetro debe ser un array');
    }
    return mensajes.map(m => `ID: ${m.id}, Usuario: ${m.usuario}, Mensaje: ${m.mensaje}`).join('\n');
};

module.exports = {
    formatearMensajes
};



