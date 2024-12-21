import { Request, Response, NextFunction } from "express";

export const validateQuotes = (req: Request, res: Response, next: NextFunction): void => {
    const {text, author} = req.body
    if (!text || typeof text !== 'string') {
        res.status(400).json({error: 'El campo text es requerido y debe ser una cadena'})
        return
    }
    if (!author || typeof author !== 'string') {
        res.status(400).json({error: 'El campo author es requerido y debe ser una cadena'})
        return
    }
    next()
}