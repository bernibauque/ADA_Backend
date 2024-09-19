// Importamos el modelo de usuarios y la vista de usuarios
const usuarioModelo = require('../modelos/usuario');
const usuarioVista = require('../vistas/usuarioVista');

// Función para manejar los mensajes recibidos del cliente
const manejarMensaje = (mensaje, socket) => {
    // Separamos el mensaje en comando y argumentos
    const [comando, ...args] = mensaje.trim().split(' ');

    // Procesamos el comando
    switch (comando) {
        case 'agregar':
            // Agregamos un nuevo usuario usando el nombre proporcionado
            const usuario = usuarioModelo.agregarUsuario(args.join(' '));
            // Enviamos una respuesta al cliente confirmando la adición del usuario
            socket.write(`Usuario añadido: ID ${usuario.id}`);
            break;
        case 'listar':
            // Obtenemos la lista de usuarios
            const usuarios = usuarioModelo.listarUsuarios();
            // Enviamos la lista de usuarios formateada al cliente
            socket.write(usuarioVista.formatearUsuarios(usuarios));
            break;
        default:
            // Enviamos un mensaje de error si el comando no es reconocido
            socket.write('Comando no reconocido');
    }
};

// Exportamos la función del controlador
module.exports = {
    manejarMensaje
};
