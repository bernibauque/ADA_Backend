const { z } = require("zod");

const stringSchema = z.string(); // Valida cadenas de texto
const numberSchema = z.number(); // Valida números
const ageSchema = z.number().min(18).max(100); // Edad debe ser entre 18 y 100
