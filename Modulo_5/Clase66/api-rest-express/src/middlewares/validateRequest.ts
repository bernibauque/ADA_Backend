import { NextFunction, Request, Response } from "express";
import { ZodSchema, ZodError } from "zod";

// Middleware para validar los datos de una solicitud
const validateRequest = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      // Intentamos validar los datos del cuerpo de la solicitud
      schema.parse(req.body);
      next(); // Si los datos son válidos, continuamos con el siguiente middleware
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Error de validación",
          errors: error.errors, // Detalle del error
        });
      } else {
        next(error); // Para otros tipos de errores
      }
    }
  };
};

export default validateRequest;
