// Importamos los tipos Request y Response de express para tipar los parámetros de las funciones.
import { Request, Response } from 'express';

/**
 * Función para obtener todos los usuarios.
 * Responde con un mensaje indicando que se están obteniendo todos los usuarios.
 */
export const getAllUsers = (req: Request, res: Response): void => {
  res.json({ message: 'Obteniendo todos los usuarios' });
};

/**
 * Función para crear un nuevo usuario.
 * Recibe los datos del usuario en el cuerpo de la solicitud (`req.body`) y responde con un mensaje de confirmación.
 */
export const createUser = (req: Request, res: Response): void => {
  res.json({ message: 'Usuario creado', data: req.body });
};

/**
 * Función para obtener un usuario por su ID.
 * El ID se extrae de los parámetros de la URL (`req.params.id`) y se responde con un mensaje que incluye el ID.
 */
export const getUserById = (req: Request, res: Response): void => {
  const userId: string = req.params.id;
  res.json({ message: `Obteniendo usuario con ID ${userId}` });
};

/**
 * Función para actualizar un usuario por su ID.
 * El ID se extrae de los parámetros de la URL y los datos actualizados del cuerpo de la solicitud.
 */
export const updateUser = (req: Request, res: Response): void => {
  const userId: string = req.params.id;
  res.json({ message: `Usuario con ID ${userId} actualizado`, data: req.body });
};

/**
 * Función para eliminar un usuario por su ID.
 * El ID se extrae de los parámetros de la URL y se responde con un mensaje de confirmación.
 */
export const deleteUser = (req: Request, res: Response): void => {
  const userId: string = req.params.id;
  res.json({ message: `Usuario con ID ${userId} eliminado` });
};

// Exportamos todas las funciones del controlador como un objeto.
export default {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};

