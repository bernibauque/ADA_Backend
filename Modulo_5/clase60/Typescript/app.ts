// Importamos express y el tipo Application para crear el servidor.
import express, { Application } from 'express';
// Importamos el archivo de rutas de usuarios que hemos creado.
import userRoutes from './userRoutes';

// Creamos una instancia de la aplicación de express.
const app: Application = express();

/**
 * Middleware para parsear cuerpos de solicitudes en formato JSON.
 * Esto permite recibir y leer datos en formato JSON en las solicitudes.
 */
app.use(express.json());

/**
 * Usamos el enrutador de usuarios y lo conectamos a la ruta base `/api`.
 * Todas las rutas definidas en `userRoutes` se accederán con el prefijo `/api`.
 */
app.use('/api', userRoutes);

/**
 * Configuramos el servidor para que escuche en el puerto 3000.
 * Cuando el servidor inicie, se mostrará un mensaje en la consola.
 */
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

