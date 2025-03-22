const winston = require("winston");
// Crea un logger (registrador) con la configuración especificada
const logger = winston.createLogger({
    level: "info", // Nivel mínimo de log a registrar (solo se registrarán logs con nivel "info" o superior)
    format: winston.format.combine(
        winston.format.colorize(), // Añade colores a los logs en la consola
        winston.format.simple() // Formatea los logs en un formato simple y legible
    ),
    transports: [
        // Define los destinos de los logs (transports)
        new winston.transports.Console(), // Muestra los logs en la consola
        new winston.transports.File({ filename: "error.log", level: "error" }), // Guarda solo logs de nivel "error" en el archivo error.log
        new winston.transports.File({ filename: "combined.log" }), // Guarda todos los logs (con nivel "info" o superior) en el archivo combined.log
    ],
});

// Ejemplo de uso del logger
logger.info("Servidor corriendo en puerto 3000"); // Registra un mensaje de nivel "info"
logger.warn("Advertencia: alto consumo de CPU"); // Registra un mensaje de nivel "warn"
logger.error("Error crítico en la API"); // Registra un mensaje de nivel "error"

