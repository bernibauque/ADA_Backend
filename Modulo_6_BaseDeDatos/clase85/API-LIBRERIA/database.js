// Importamos la librería mongoose, que nos permite interactuar con MongoDB de manera más sencilla.
const mongoose = require("mongoose");

// Importamos y configuramos la librería dotenv para cargar variables de entorno desde un archivo .env.
require("dotenv").config();

// Definimos una función asíncrona llamada connectDB para establecer la conexión con MongoDB.
const connectDB = async () => {
    try {
        // Intentamos conectar a la base de datos utilizando la URI almacenada en la variable de entorno MONGO_URI.
        await mongoose.connect(process.env.MONGO_URI);

        // Si la conexión es exitosa, mostramos un mensaje en la consola indicando que la conexión fue exitosa.
        console.log("✅ Conectado a MongoDB correctamente");
    } catch (error) {
        // Si ocurre un error durante la conexión, lo capturamos y mostramos un mensaje de error en la consola.
        console.error("❌ Error al conectar con MongoDB:", error);

        // Si hay un error, detenemos la ejecución del programa con un código de salida 1 (indica un error).
        process.exit(1);
    }
};

// Exportamos la función connectDB para que pueda ser utilizada en otros módulos de la aplicación.
module.exports = connectDB;
