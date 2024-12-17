// Importamos el módulo "express" para manejar solicitudes y rutas HTTP.
const express = require("express");

// Creamos una nueva instancia del enrutador de Express.
// Este enrutador se usará para manejar rutas específicas relacionadas con los usuarios.
const router = express.Router();

// Importamos el controlador de usuarios desde el archivo "userController".
// Los controladores contienen la lógica para manejar las solicitudes y respuestas de las rutas.
const userController = require("../controllers/userController");

// Definimos una ruta para manejar solicitudes GET a la raíz de este enrutador ("/").
// Aquí llamamos al método "getAllUsers" del controlador, que es responsable de devolver todos los usuarios.
router.get("/", userController.getAllUsers);

// Definimos una ruta para manejar solicitudes POST a la raíz de este enrutador ("/").
// Esta ruta llama al método "createUser" del controlador, que es responsable de crear un nuevo usuario.
router.post("/", userController.createUser);

// Definimos una ruta para manejar solicitudes GET a una URL que incluye un parámetro dinámico ":id".
// El método "getUserById" del controlador se encarga de buscar y devolver un usuario específico basado en el ID proporcionado en la URL.
router.get("/:id", userController.getUserById);
