// Importamos express
import express from 'express'

// Importamos el router de usuarios desde el archivo correspondiente
// Este archivo contiene todas las rutas
import userRouter from './routes/userRoutes'

// Creamos la instancia de una aplicacion en express
// Este objeto representa la aplicacion web y sera el punto central
// para configurar rutas, entre otros
const app = express()

// Middleware
app.use(express.json())
// express.json(): Su propósito principal es analizar (parsear) el 
// cuerpo de una solicitud HTTP que contiene datos en formato JSON.
// Es un middleware integrado en Express.

// Configuracion de las rutas
// Asociamos el router 'userRouter' al prefijo '/users'
// Esto significa que todas las rutas definidas en el archivo 'userRouter' 
// estaran disponibles bajo la ruta '/users'
// Por ejemplo:
// - Una solicitud a '/users' sera manejada por 'userRoutes.get('/')
// - Una solicitud a '/users/:id' sera manejada por userRouter.ger('/:id')
app.use('/users', userRouter)

// Exportamos
export default app
// Con module.exports, es necesario importar el módulo usando un 
// nombre específico. Con export default, es más flexible y 
// accesible.
