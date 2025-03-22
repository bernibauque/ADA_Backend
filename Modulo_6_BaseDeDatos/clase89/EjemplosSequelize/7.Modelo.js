const { DataTypes } = require("sequelize");

// Definir un modelo de "Usuario"
const Usuario = sequelize.define("Usuario", {
    nombre: {
        type: DataTypes.STRING, // Tipo de dato: cadena de texto
        allowNull: false, // No puede ser nulo
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // No se puede repetir
    },
    edad: {
        type: DataTypes.INTEGER, // Tipo numérico
        allowNull: true, // Puede ser nulo
    },
});

// Sincronizar el modelo con la base de datos
sequelize.sync().then(() => console.log("📦 Tabla 'Usuarios' creada"));
