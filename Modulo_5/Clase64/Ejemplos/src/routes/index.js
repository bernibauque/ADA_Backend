// Importamos el módulo "express" para manejar solicitudes HTTP y rutas.
const express = require("express");

// Creamos una nueva instancia del enrutador de Express.
// El enrutador nos permite definir rutas de manera modular y organizada.
const router = express.Router();

// Importamos las rutas específicas para usuarios desde el archivo "userRoutes".
// Este archivo debe contener todas las rutas relacionadas con usuarios.
const userRoutes = require("./userRoutes");

// Importamos las rutas específicas para productos desde el archivo "productRoutes".
// Este archivo debe contener todas las rutas relacionadas con productos.
const productRoutes = require("./productRoutes");

// Asignamos las rutas de usuarios al prefijo "/users".
// Esto significa que cualquier ruta definida en "userRoutes" estará bajo "/users".
router.use("/users", userRoutes);

// Asignamos las rutas de productos al prefijo "/products".
// Esto significa que cualquier ruta definida en "productRoutes" estará bajo "/products".
router.use("/products", productRoutes);
