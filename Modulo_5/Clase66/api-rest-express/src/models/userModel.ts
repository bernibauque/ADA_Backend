import { z } from 'zod'

// esquema de validacion de usuario
export const userSchema = z.object({
    name: z.string().min(1, 'Name es requerido'), //el nombre debe ser string y no cadena vacia
    email: z.string().email('Formato invalido de mail'), // al ser mail, tiene que tener el formato de mail
    age: z.number().int().positive().optional() // la edad es opcional, pero debe ser un num entero positivo
})

// Inferimos el tipo de usuario a partir del esqume
export type User = z.infer<typeof userSchema>