// Importamos el modulo Router, desde express para definir 
// rutas en un archivo separado
import {Router} from 'express'

// Creamos una instancia de router.
// Este objeto nos permite definir rutas especificas relacionadas
// con los usuarios, agrupandolos para una mejor organizacion
const userRouter = Router();

// Ruta GET '/' para obtener todos los usuarios
// Esta ruta responde con un mensaje generico ya que no estamos
// consultando una BD
userRouter.get('/', (req, res) => {
    res.json({message: 'Obtener todos los usuarios'})
});

// Ruta POST '/' para crear un nuevo usuario
// En esta ruta, los datos del usuario (name y email) se extraen 
// del cuerpo de la solicitud (req.body)
// luego devolvemos un estado 201 (creado) junto con el usuario
// creado en el cuerpo de la respuesta
userRouter.post('/', (req, res) => {
    // .body: Es un objeto que contiene los datos enviados en el 
    // cuerpo de la solicitud (normalmente en solicitudes POST, 
    // PUT o PATCH).
    const {name, email} = req.body // extraemos los datos enviados en la soli
    // Las llaves {} indican desestructuración: Las llaves {} son 
    // necesarias porque le indican a JavaScript que deseas 
    // desestructurar el objeto y extraer ciertas propiedades. 
    // Si no usas las llaves, JavaScript asumirá que estás 
    // intentando asignar req.body completo a una variable
    res.status(201).json({message: "Usuario creado", user: {name, email}})
})

// Ruta GET '/:id' para obtener todos los usuarios por su id
// El ID se pasa como parametro en la url y se puede acceder 
// mediante "req.params"
// En este caso, simplemente respondemos con un msj porque no hay BD
userRouter.get('/:id', (req, res) => {
    const {id} = req.params // extraemos el id del parametro de la url
    //.params: Es un objeto que contiene los parámetros dinámicos de
    // la ruta que se definieron en la URL del endpoint.
    res.json({message: `Obtener usuario con ID ${id}`})
    // Los dos puntos (:) en /:id indican que el segmento de la URL 
    // es un parámetro dinámico en lugar de una parte fija de la 
    // ruta. Es una convención utilizada en muchos frameworks 
    // de backend, como Express.js, para diferenciar entre partes 
    // estáticas y dinámicas de una URL.
});

// Ruta PUT: '/:id' para actualizar un usuario por su id
// Obtenemos el id de req.params y los datos de usuario de req.body
userRouter.put('/:id', (req, res) => {
    const {id} = req.params // extraemos los datos enviados de la soli
    const {name, email} = req.body // extraemos los nuevos datos enviados en el cuerpo de la soli
    res.json({message: `Usuario con id ${id} actualizado`, user : {name, email}})
})

// Ruta DELETE '/:id' para eliminar un usuario por su id
// Obtenemos el id del parametro de la url y respondemos con un msj
userRouter.delete('/:id', (req, res) => {
    const {id} = req.params // extraemos el id del parametro de la url
    res.json({message: `Usuario con ${id} eliminado.`})
})

export default userRouter

