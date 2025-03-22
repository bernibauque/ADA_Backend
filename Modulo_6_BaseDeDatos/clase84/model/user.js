// Importamos mongoose, una biblioteca de Node.js que facilita la interacción con MongoDB.
const mongoose = require("mongoose");

// Definimos un esquema (Schema) para los documentos de la colección "users" en MongoDB.
const UserSchema = new mongoose.Schema({
    // Campo "nombre" de tipo String, obligatorio (required: true).
    nombre: { type: String, required: true },

    // Campo "email" de tipo String, obligatorio y único (para evitar correos duplicados).
    email: { type: String, required: true, unique: true },

    // Campo "edad" de tipo Number, opcional (no es obligatorio).
    edad: { type: Number }
});

// Exportamos el modelo "User" basado en UserSchema, 
// que se encargará de interactuar con la colección "users" en MongoDB.
module.exports = mongoose.model("User", UserSchema);


