const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

// Defnimos el modelo Usuario
const Usuario = sequelize.define("Usuario", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
})

module.exports = Usuario;