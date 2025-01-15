const express = require("express");
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const app = express()
const PORT = 3000

// Middleware para procesar datos en formato json enviados por el cliente
app.use(bodyParser.json())

const databasePath = './database.json'

//cargar las variables de .env
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY || 'claveSecreta123'

// ruta para probar que el servidor este andando
app.get('/', (req, res) => {
    res.send('Bienvenidas al sistema de Logueo!')
})

// Ruta para registrar nuevos usuarios
app.post('/register', async (req, res) => {
    const { email, password } = req.body // extrae

    if (!email || !password) {
        return res.status(400).json({ error: 'Email y constrasena son necesarios' })
    }

    // leer la BD para verificar si el usuario ya existe
    const database = JSON.parse(fs.readFileSync(databasePath))
    const userExists = database.find((user) => user.email === email)
    if (userExists) {
        return res.status(400).json({ error: 'El usuario ya esta registrado' })
    }

    //Hasheamos la contrasena con bcrypt (el numero 10 es el coste del algoritmo)
    const hashPassword = await bcrypt.hash(password, 10)

    // creamos un nuevo usuario con in id unico
    const newUser = { id: Date.now(), email, password: hashPassword }

    //guardamos el nuevo usuario en la BD
    database.push(newUser)
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2))

    //respondemos al cliente confirmando que el registro fue exitoso
    res.status(201).json({ message: 'Usuario registrado con exito' })
})

// Ruta para inicio de sesion
app.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Email y constrasena son necesarios' })
    }

    // leer la BD para buscar el usuario
    const database = JSON.parse(fs.readFileSync(databasePath))
    const user = database.find((user) => user.email === email)
    if (!user) {
        return res.status(404).json({ error: 'usuario no encontrado' })
    }

    // comparar la contrasena ingresada con la contrasena hasheada en la base de datos
    const isPassworValid = await bcrypt.compare(password, user.password)
    if (!isPassworValid) {
        return res.status(401).json({ error: 'Contrasena incorrecta' })
    }

    // generar un token JWT para el usuario autenticado
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: '1h'
    })

    //enviamos el token al cliente
    res.json({ message: 'Iniciode sesion exitoso', token })
})

// Middleware para verificar el JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'] // lea el encabezado de autorizacion
    const token = authHeader && authHeader.split(' ')[1] // extraer el token en formato bearer token

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' })
    }

    // verificamos validez del token
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token invalido o expirado' })
        }
        //guardar los datos del uduario extraidos del token de la soli
        req.user = user
        next()
    })
}

// ruta protegida que solo podra acceder el token valido
app.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: `Bienvenida, ${req.user.email}!`, user: req.user })
})

//iniciamos servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})