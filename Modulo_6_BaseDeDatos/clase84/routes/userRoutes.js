// Importamos Express, que nos permite crear rutas y manejar solicitudes HTTP.
const express = require("express");

// Importamos el modelo "User" desde la carpeta "models", 
// que nos permitirá interactuar con la colección "users" en MongoDB.
const User = require("../models/User");

// Creamos un enrutador (router) para definir nuestras rutas de usuario.
const router = express.Router();

// Crear usuario
router.post("/", async (req, res) => {
    try {
        // Creamos un nuevo usuario con los datos enviados en el cuerpo de la solicitud (req.body).
        const user = new User(req.body);

        // Guardamos el usuario en la base de datos.
        await user.save();

        // Respondemos con el usuario creado y un código de estado 201 (Creado).
        res.status(201).json(user);
    } catch (error) {
        // Si ocurre un error, enviamos una respuesta con estado 400 (Solicitud incorrecta)
        // y un mensaje de error.
        res.status(400).json({ mensaje: "Error al crear usuario", error });
    }
});

// Obtener todos los usuarios
router.get("/", async (req, res) => {
    // Buscamos todos los usuarios en la base de datos.
    const users = await User.find();

    // Respondemos con la lista de usuarios en formato JSON.
    res.json(users);
});

// Exportamos el router para poder usarlo en otras partes de la aplicación (por ejemplo, en server.js).
module.exports = router;

