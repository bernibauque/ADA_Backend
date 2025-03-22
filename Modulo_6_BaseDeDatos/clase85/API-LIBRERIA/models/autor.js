// Importamos la librería mongoose, que nos permite interactuar con MongoDB y definir esquemas y modelos.
const mongoose = require("mongoose");

// Definimos un esquema para los autores utilizando mongoose.Schema.
// Un esquema es una estructura que define la forma de los documentos en una colección de MongoDB.
const AutorSchema = new mongoose.Schema({
    // Definimos el campo 'nombre' como un String y lo marcamos como obligatorio (required: true).
    nombre: { type: String, required: true }, // El nombre del autor es un campo obligatorio.

    // Definimos el campo 'nacionalidad' como un String, pero no es obligatorio.
    nacionalidad: { type: String } // La nacionalidad del autor es un campo opcional.
});

// Exportamos un modelo llamado 'Autor', que está basado en el esquema AutorSchema.
// Un modelo es una clase que nos permite interactuar con la colección 'Autores' en la base de datos.
module.exports = mongoose.model("Autor", AutorSchema);
