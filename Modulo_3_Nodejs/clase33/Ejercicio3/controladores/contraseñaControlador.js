const contraseñaModelo = require('../modelos/contraseña');
const contraseñaVista = require('../vistas/contraseñaVista');

// Función para manejar los mensajes recibidos del cliente
const manejarMensaje = (mensaje, socket) => {
    const [comando, usuario, ...contraseñaParts] = mensaje.trim().split(' ');
    const contraseña = contraseñaParts.join(' ');

    switch (comando) {
        case 'agregar':
            const confirmacion = contraseñaModelo.agregarContraseña(usuario, contraseña);
            socket.write(confirmacion);
            break;
        case 'listar':
            try {
                const contraseñas = contraseñaModelo.listarContraseñas();
                const listaFormateada = contraseñaVista.formatearContraseñas(contraseñas);
                socket.write(listaFormateada);
            } catch (error) {
                socket.write(`Error al formatear las contraseñas: ${error.message}`);
            }
            break;
        default:
            socket.write('Comando no reconocido');
    }
};

module.exports = {
    manejarMensaje
};
