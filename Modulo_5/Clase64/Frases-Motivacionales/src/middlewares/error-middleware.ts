import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (err: Error, req: Request, res:Response, next: NextFunction): void => {
    console.log('Error:', err.message);
    res.status(500).json({error: 'Ha ocurrido un error en el servidor'})
    
}