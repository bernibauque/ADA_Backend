const { Sequelize } = require("sequelize")

// Creamos la conexion con la base de datos
const sequelize = new Sequelize("test_db", "root", "password", {
    host: "localhost",
    dialect: "mysql",
})

// verificar la conexion
sequelize.authenticate()
    .then(() => console.log("Conexion exitosa a la base de datos"))
    .catch((error) => console.error("Error al conectar"))

module.exports = sequelize