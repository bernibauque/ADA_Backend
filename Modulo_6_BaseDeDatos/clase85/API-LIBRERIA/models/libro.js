// Importamos la librería mongoose, que nos permite interactuar con MongoDB y definir esquemas y modelos.
const mongoose = require("mongoose");

// Definimos un esquema para los libros utilizando mongoose.Schema.
// Un esquema es una estructura que define la forma de los documentos en una colección de MongoDB.
const LibroSchema = new mongoose.Schema({
    // Definimos el campo 'titulo' como un String y lo marcamos como obligatorio (required: true).
    titulo: { type: String, required: true }, // El título del libro es un campo obligatorio.

    // Definimos el campo 'anioPublicacion' como un Number, pero no es obligatorio.
    anioPublicacion: { type: Number }, // El año de publicación del libro es un campo opcional.

    // Definimos el campo 'autor' como una referencia a un documento de la colección 'Autor'.
    // Utilizamos mongoose.Schema.Types.ObjectId para almacenar el ID del autor.
    // La opción 'ref: "Autor"' indica que este campo está relacionado con el modelo 'Autor'.
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "Autor" } // Relación con el modelo Autor.
});

// Exportamos un modelo llamado 'Libro', que está basado en el esquema LibroSchema.
// Un modelo es una clase que nos permite interactuar con la colección 'Libros' en la base de datos.
module.exports = mongoose.model("Libro", LibroSchema);

