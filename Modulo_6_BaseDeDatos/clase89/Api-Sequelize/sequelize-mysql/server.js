const express = require("express")
const cors = require("cors")
const sequelize = require("./config/database")
const Usuario = require("./models/Usuario")
const rutaUsuarios = require("./routes/usuarios")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/usuario", rutaUsuarios)

// sincronizamos la base de datos y levantar el servidor
sequelize.sync().then(() => {
    console.log("Base de datos sincronizada");
    app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"))
})