import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
    const {name, email, age} = req.body // obtener los datos del cuerpo de la soli
    
    // aqui agregarian la logica para guardar el usuario en la BD

    // enviamos una respuesta exitos
    res.status(201).json({
        message: 'Usuario creado con exito',
        user: {name, email, age}
    })
}