// Importamos express y el tipo Router para manejar las rutas.
import express, { Router } from 'express';
// Importamos el controlador que contiene las funciones de las rutas.
import userController from './userController';

// Creamos una instancia del enrutador.
const router: Router = express.Router();

/**
 * Ruta GET para obtener todos los usuarios.
 * Se ejecuta la función `getAllUsers` del controlador.
 */
router.get('/', userController.getAllUsers);

/**
 * Ruta POST para crear un nuevo usuario.
 * Se ejecuta la función `createUser` del controlador.
 */
router.post('/users', userController.createUser);

/**
 * Ruta GET para obtener un usuario específico por su ID.
 * El ID se recibe como parámetro en la URL.
 */
router.get('/:id', userController.getUserById);

/**
 * Ruta PUT para actualizar un usuario específico por su ID.
 * El ID se recibe como parámetro en la URL y se envía la 
 * información actualizada en el cuerpo de la solicitud.
 */
router.put('/:id', userController.updateUser);

/**
 * Ruta DELETE para eliminar un usuario específico por su ID.
 * El ID se recibe como parámetro en la URL.
 */
router.delete('/:id', userController.deleteUser);

// Exportamos el enrutador para poder usarlo en otros archivos.
export default router;

