// Importamos el módulo "zod", una biblioteca para la validación y creación de esquemas.
// El objeto "z" contiene los métodos para definir diferentes tipos de esquemas.
const { z } = require("zod");

// Creamos un esquema básico que valida cadenas de texto.
// Este esquema se asegura de que el dato proporcionado sea de tipo string.
const stringSchema = z.string();

// Creamos un esquema básico que valida números.
// Este esquema verifica que el dato sea un número (tanto enteros como decimales son válidos).
const numberSchema = z.number();

// Creamos un esquema más específico que valida números dentro de un rango.
// - ".min(18)" establece que el número debe ser al menos 18.
// - ".max(100)" establece que el número no debe ser mayor a 100.
// Este esquema se usa comúnmente para validar edades en formularios u otros datos.
const ageSchema = z.number().min(18).max(100);
