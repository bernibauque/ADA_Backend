// Importamos el módulo uuid para generar identificadores únicos
const { v4: uuidv4 } = require('uuid');

// Lista de usuarios inicial vacía
let usuarios = [];

// Función para añadir un nuevo usuario
const agregarUsuario = (nombre) => {
    // Creamos un nuevo usuario con un ID único y un nombre
    const usuario = { id: uuidv4(), nombre };
    // Añadimos el usuario a la lista de usuarios
    usuarios.push(usuario);
    // Devolvemos el usuario añadido
    return usuario;
};

// Función para listar todos los usuarios
const listarUsuarios = () => {
    // Devolvemos la lista de usuarios
    return usuarios;
};

// Exportamos las funciones del modelo
module.exports = {
    agregarUsuario,
    listarUsuarios
};
