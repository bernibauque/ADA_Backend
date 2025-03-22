const express = require("express")
const Usuario = require("../models/Usuario")

const router = express.Router()

// Crear un usuario (POST)
router.post("/", async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body)
        res.status(201).json(usuario)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// Obtener todos los usuarios (GET)
router.get("/", async (req, res) => {
    const usuario = await Usuario.findAll()
    res.json(usuario)
})

// Obtener un usuario por ID (GET)
router.get("/:id", async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id)
    if (usuario) { res.json(usuario) }
    else
        res.status(404).json({ error: "Usuario no encontrado" })
})

// Actualizar un usuario por ID (PUT)
router.put("/:id", async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id)
    if (usuario) {
        await usuario.update(req.body)
        res.json(usuario)
    } else {
        res.status(404).json({ error: "Usuario no encontrado" })
    }
})

// Eliminar un usuario (DELETE)
router.delete("/:id", async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id)
    if (usuario) {
        await usuario.destroy()
        res.json({ mensaje: "Usuario eliminado" })
    } else {
        res.status(404).json({ error: "Usuario no encontrado" })
    }
})

module.exports = router