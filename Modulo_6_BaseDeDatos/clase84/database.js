// Importamos el módulo mongoose, que nos permite interactuar con MongoDB desde Node.js
const mongoose = require("mongoose");

// Importamos el módulo dotenv para poder leer las variables de entorno desde un archivo .env
require("dotenv").config();

// Definimos una función asíncrona llamada connectDB que se encargará de conectar nuestra aplicación con MongoDB
const connectDB = async () => {
    try {
        // Intentamos establecer la conexión con la base de datos usando mongoose.connect()
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true -> Indica que se debe utilizar el nuevo sistema de análisis de URL de MongoDB
            useNewUrlParser: true,
            // useUnifiedTopology: true -> Habilita el nuevo motor de administración de conexiones de MongoDB
            useUnifiedTopology: true
        });

        // Si la conexión es exitosa, mostramos un mensaje en la consola
        console.log("✅ Conectado a MongoDB");

    } catch (error) {
        // Si ocurre un error en la conexión, lo capturamos y lo mostramos en la consola
        console.error("❌ Error de conexión a MongoDB:", error);

        // Terminamos el proceso de Node.js con un código de error (1 indica que hubo un problema)
        process.exit(1);
    }
};

// Exportamos la función connectDB para poder usarla en otros archivos de nuestra aplicación
module.exports = connectDB;






