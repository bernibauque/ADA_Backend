// Importar express y el tipo router para manejar rutas
//import express, {Router} from 'express'
export const express = require('express');

// Importamos el controlador que es el que tiene las funciones de las rutas
const userController = require ('./userController')

// Creamos una instancia del router
const router = express.Router()

// Ruta GET: Para obtener todos los usuarios 
// Se ejecuta la funcion "getAllUsers" del controlador
router.get('/', userController.getAllUsers);

// Ruta POST: Para crear un nuevo usuario
// Se ejecuta la funcion 'createUser' del controlador
router.post('/users', userController.createUser);

// Ruta GET: Para obtener un usuario especifico por ID
// El ID, se recibe como parametro en la URL
// Se ejecuta la funcion "getUserById" del controlador
router.get('/:id', userController.getUserById)

// Ruta PUT: Para actualizar un usuario especifico por id
// El id se recibe como parametro en la url y se envia
// la info actualizada en el cuerpo de la solicitud
router.put('/:id', userController.updateUser)

// Ruta DELETE: Para eliminar un usuario especifico por su id
// El id se recibe como parametro de la url
router.delete('/:id', userController.deleteUser)

module.exports = {router};