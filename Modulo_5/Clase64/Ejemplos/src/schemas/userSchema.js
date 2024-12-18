const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(3), // Nombre debe tener al menos 3 caracteres
  age: z.number().min(18), // Edad mínima de 18
  email: z.string().email(), // Validación de formato de email
});

// Array de strings con al menos 3 caracteres:
const arraySchema = z.array(z.string().min(3));

arraySchema.parse(["apple", "banana", "kiwi"]); // OK
