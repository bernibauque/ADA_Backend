// Importamos los tipos request y response de express para tipar los parametros de las funciones
export const { Request, Response } = require('express');

// Funcion para obtener los usuarios
// Responde con un mensaje indicando que se estan obt los usuarios
const getAllUsers = (req, res) => {
    res.json({ message: 'Obteniendo todos los usuarios'})
}

// Funcion para crear un nuevo usuario 
// Recibe los datos del usuario en el cuerpo de la soli
// (req.body) y responde con un mensaje que incluye el id
const createUser = (req, res) => {
    res.json({message: 'Usuario Creado'})
}

// Funcion para obtener todos los usuarios por id
// el id se extrae de los parametros de la url (req.params.id)
// y se responde con un mensaje que incluye el id
const getUserById = (req, res) => {
    const usuarioId = req.params.id
    res.json({message: `Obteniendo usuario con id ${usuarioId}`})
}

// Funcion para actualizar un usuario por id
// El id se extrae de los parametros de la url y los datos actualizados
// del cuerpo de la solicitud
const updateUser = (req, res) => {
    const usuarioId = req.params.id
    res.json({message: `Usuario con id: ${usuarioId} actualizado`, data:req.body})
}

// Funcion para eliminar un usuario por id
// El id se extrae de los parametros de la url 
const deleteUser = (req, res) => {
    const usuarioId = req.params.id
    res.json({message: `Usuario con id: ${usuarioId} eliminado`})
}

// Exportamos los controladores usando module.exports
module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}