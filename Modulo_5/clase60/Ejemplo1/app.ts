// Importar express y el tipo router para manejar rutas
//import express, {Application} from 'express'
const express = require('express');
// Importamos el archivo de las rutas de los usuarios
const userRoutes = ('./userRouter')

// Creamos una instancia del router
const app = express()

// Usamos el router/enrutador de usuarios y lo conectamos
// a la ruta base /api 
// Todas las rutas definidas en 'userRoutes' se accederan con 
// el prefijo /api
app.use('/api', userRoutes)

// Configuramos el servidor para que escuche en el puerto 3000
app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localHost:3000`);
})