const mensajeModelo = require('../modelos/mensaje');
const mensajeVista = require('../vistas/mensajeVista');

// Función para manejar los mensajes recibidos del cliente
const manejarMensaje = (mensaje, socket) => {
    const [comando, usuario, ...mensajeParts] = mensaje.trim().split(' ');
    const contenidoMensaje = mensajeParts.join(' ');

    switch (comando) {
        case 'enviar':
            const confirmacion = mensajeModelo.agregarMensaje(usuario, contenidoMensaje);
            socket.write(confirmacion);
            break;
        case 'listar':
            try {
                const mensajes = mensajeModelo.listarMensajes();
                const listaFormateada = mensajeVista.formatearMensajes(mensajes);
                socket.write(listaFormateada);
            } catch (error) {
                socket.write(`Error al formatear los mensajes: ${error.message}`);
            }
            break;
        default:
            socket.write('Comando no reconocido');
    }
};

module.exports = {
    manejarMensaje
};

