const { Sequelize } = require("sequelize");

// Configuración de la conexión con la base de datos
const sequelize = new Sequelize("nombre_basedatos", "usuario", "contraseña", {
    host: "localhost", // Dirección del servidor de base de datos
    dialect: "mysql",  // Base de datos utilizada (puede ser mysql, postgres, sqlite, etc.)
});

// Probar la conexión
sequelize
    .authenticate()
    .then(() => console.log("✅ Conexión exitosa a la base de datos"))
    .catch((error) => console.error("❌ Error al conectar:", error));
