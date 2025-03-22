// Importamos todas las dependencias
const express = require('express')
const rateLimit = require('express-rate-limit')
const winston = require('winston')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const app = express()
app.use(express.json())

// Configuracion de winston para logs
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: "error" }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
})

// configuracion de morgan para registrar accesos en un archivo
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: "a" })
app.use(morgan("combined", { stream: accessLogStream }))

// Configuracion de rate limit en /login
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 5,
    message: "Muchos intentos de sesion. Intenta mas tarde."
})

// usuario ficticio para autenticacion
const storedUser = 'admin'
const storedPassword = '1234'

// Funcion para comparar contrasenas de manera segura
function compararSeguro(input, almacenado) {
    const buffer1 = Buffer.from(input)
    const buffer2 = Buffer.from(almacenado)

    if (buffer1.length !== buffer2.length) return false
    return crypto.timingSafeEqual(buffer1, buffer2)
}

// Endopoint de login con proteccion de seguridad
app.post("/login", loginLimiter, (req, res) => {
    const { usuario, password } = req.body
    if (usuario === storedUser && compararSeguro(password, storedPassword)) {
        logger.info(`Inicio de sesion exitoso para usuario: ${usuario}`)
        res.json({ message: "Acceso concedido" })
    } else {
        logger.error(`Intento de inicio de sesion fallido para usuario: ${usuario}`)
        res.status(401).json({ error: "Acceso denegado" })
    }
})

// Middleware para verificar autenticacion en datos-seguro
function verificarAutenticacion(req, res, next) {
    const { usuario } = req.body
    if (usuario === storedUser) {
        next()
    } else {
        res.status(403).json({ error: 'Acceso denegado' })
    }
}

// Endpoint protegido
app.get('/datos-seguros', verificarAutenticacion, (req, res) => {
    res.json({ message: "Informacion segura" })
})

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`)
    res.status(500).json({ error: "Error interno del servidor" })
})

// Arrancamos el servidor
app.listen(3000, () => logger.info("Servidor corriendo en el puerto 3000"))