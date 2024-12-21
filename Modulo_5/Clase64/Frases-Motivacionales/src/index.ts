import express, { Application, Request, Response, NextFunction } from 'express';
import quotesRouter from './routes/quotes-routes'
import {errorMiddleware} from "./middlewares/error-middleware"

const app: Application = express();
app.use(express.json())
app.use('/api/quotes', quotesRouter)

app.use((req: Request, res: Response) => {
    res.status(404).json({error: 'Endpoint no encontrado'})
})

app.use(errorMiddleware)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: http://localhost:${PORT}`);
})