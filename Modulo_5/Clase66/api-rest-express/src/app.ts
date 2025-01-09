import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes';

const app = express()

// Middleware para habilitar cors globalmente
app.use(cors());

//middleware para parsear el cuerpo de las solis en formato json
app.use(express.json())

// configuramos la ruta principal
app.use('/api/users', userRoutes)

// exportamos
export default app;