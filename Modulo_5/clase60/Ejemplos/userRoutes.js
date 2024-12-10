// Importamos express y creamos un enrutador para manejar las rutas.
const express = require("express");
const router = express.Router();

// Importamos el controlador que contiene las funciones de las rutas.
const userController = require("./userController");

// Definimos las rutas relacionadas con usuarios.

// Ruta GET para obtener todos los usuarios.
router.get("/", userController.getAllUsers);

// Ruta POST para crear un nuevo usuario.
router.post("/users", userController.createUser);

// Ruta GET para obtener un usuario específico por su ID.
router.get("/:id", userController.getUserById);

// Ruta PUT para actualizar un usuario específico por su ID.
router.put("/:id", userController.updateUser);

// Ruta DELETE para eliminar un usuario específico por su ID.
router.delete("/:id", userController.deleteUser);

// Exportamos el router para poder usarlo en otros archivos.
module.exports = router;
