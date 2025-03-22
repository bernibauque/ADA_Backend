// Importamos la librería express, que nos permite crear un servidor web y manejar rutas.
const express = require("express");

// Creamos un enrutador (router) de express para definir las rutas de la API.
const router = express.Router();

// Importamos el modelo 'Autor' desde el archivo '../models/Autor'.
// Este modelo nos permite interactuar con la colección de autores en la base de datos.
const Autor = require("../models/Autor");

// Ruta POST para crear un nuevo autor.
router.post("/", async (req, res) => {
    // Creamos una nueva instancia del modelo 'Autor' con los datos enviados en el cuerpo de la solicitud (req.body).
    const nuevoAutor = new Autor(req.body);

    // Guardamos el nuevo autor en la base de datos utilizando el método save().
    await nuevoAutor.save();

    // Respondemos con el nuevo autor creado en formato JSON.
    res.json(nuevoAutor);
});

// Ruta GET para obtener todos los autores.
router.get("/", async (req, res) => {
    // Buscamos todos los autores en la base de datos utilizando el método find().
    const autores = await Autor.find();

    // Respondemos con la lista de autores en formato JSON.
    res.json(autores);
});

// Ruta PUT para actualizar un autor existente.
router.put("/:id", async (req, res) => {
    // Buscamos y actualizamos el autor por su ID (req.params.id) con los datos enviados en el cuerpo de la solicitud (req.body).
    // La opción { new: true } devuelve el autor actualizado en lugar del original.
    const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Respondemos con el autor actualizado en formato JSON.
    res.json(autor);
});

// Ruta DELETE para eliminar un autor existente.
router.delete("/:id", async (req, res) => {
    // Buscamos y eliminamos el autor por su ID (req.params.id) utilizando el método findByIdAndDelete().
    await Autor.findByIdAndDelete(req.params.id);

    // Respondemos con un mensaje indicando que el autor fue eliminado.
    res.json({ mensaje: "Autor eliminado" });
});

// Exportamos el enrutador para que pueda ser utilizado en otros archivos de la aplicación.
module.exports = router;

