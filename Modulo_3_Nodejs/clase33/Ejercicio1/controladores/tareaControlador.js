// Importamos el modelo de tareas y la vista de tareas
const tareaModelo = require('../modelos/tarea');
const tareaVista = require('../vistas/tareaVista');

// Función para manejar los mensajes recibidos del cliente
const manejarMensaje = (mensaje, socket) => {
    // Separamos el mensaje en comando y argumentos
    const [comando, ...args] = mensaje.trim().split(' ');

    // Procesamos el comando
    switch (comando) {
        case 'agregar':
            // Agregamos una nueva tarea usando el título proporcionado
            const tarea = tareaModelo.agregarTarea(args.join(' '));
            // Enviamos una respuesta al cliente confirmando la adición de la tarea
            socket.write(`Tarea añadida: ID ${tarea.id}`);
            break;
        case 'listar':
            // Obtenemos la lista de tareas
            const tareas = tareaModelo.listarTareas();
            // Enviamos la lista de tareas formateada al cliente
            socket.write(tareaVista.formatearTareas(tareas));
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
