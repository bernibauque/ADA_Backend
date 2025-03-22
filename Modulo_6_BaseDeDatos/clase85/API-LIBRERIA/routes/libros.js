// Importamos la librería express, que nos permite crear un servidor web y manejar rutas.
const express = require("express");

// Creamos un enrutador (router) de express para definir las rutas de la API.
const router = express.Router();

// Importamos el modelo 'Libro' desde el archivo '../models/Libro'.
// Este modelo nos permite interactuar con la colección de libros en la base de datos.
const Libro = require("../models/Libro");

// Ruta POST para crear un nuevo libro.
router.post("/", async (req, res) => {
    // Creamos una nueva instancia del modelo 'Libro' con los datos enviados en el cuerpo de la solicitud (req.body).
    const nuevoLibro = new Libro(req.body);

    // Guardamos el nuevo libro en la base de datos utilizando el método save().
    await nuevoLibro.save();

    // Respondemos con el nuevo libro creado en formato JSON.
    res.json(nuevoLibro);
});

// Ruta GET para obtener todos los libros, incluyendo la información del autor relacionado.
router.get("/", async (req, res) => {
    // Buscamos todos los libros en la base de datos utilizando el método find().
    // Utilizamos populate("autor") para incluir la información completa del autor relacionado (referenciado por el campo 'autor').
    const libros = await Libro.find().populate("autor");

    // Respondemos con la lista de libros, incluyendo los datos del autor, en formato JSON.
    res.json(libros);
});

// Ruta PUT para actualizar un libro existente.
router.put("/:id", async (req, res) => {
    // Buscamos y actualizamos el libro por su ID (req.params.id) con los datos enviados en el cuerpo de la solicitud (req.body).
    // La opción { new: true } devuelve el libro actualizado en lugar del original.
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Respondemos con el libro actualizado en formato JSON.
    res.json(libro);
});

// Ruta DELETE para eliminar un libro existente.
router.delete("/:id", async (req, res) => {
    // Buscamos y eliminamos el libro por su ID (req.params.id) utilizando el método findByIdAndDelete().
    await Libro.findByIdAndDelete(req.params.id);

    // Respondemos con un mensaje indicando que el libro fue eliminado.
    res.json({ mensaje: "Libro eliminado" });
});

// Exportamos el enrutador para que pueda ser utilizado en otros archivos de la aplicación.
module.exports = router;

