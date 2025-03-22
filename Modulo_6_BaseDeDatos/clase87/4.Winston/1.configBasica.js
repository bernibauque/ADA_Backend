// Importa el módulo 'winston' para el registro de logs (logging)
const winston = require("winston");

// Crea un logger (registrador) con la configuración especificada
const logger = winston.createLogger({
    level: "info", // Nivel mínimo de log a registrar (solo se registrarán logs con nivel "info" o superior)
    format: winston.format.combine(
        winston.format.timestamp(), // Añade una marca de tiempo a cada log
        winston.format.json() // Formatea los logs en formato JSON
    ),
    transports: [
        // Define los destinos de los logs (transports)
        new winston.transports.File({ filename: "error.log", level: "error" }), // Guarda solo logs de nivel "error" en el archivo error.log
        new winston.transports.File({ filename: "combined.log" }), // Guarda todos los logs (con nivel "info" o superior) en el archivo combined.log
    ],
});

// Ejemplo de uso del logger
logger.info("Servidor iniciado correctamente"); // Registra un mensaje de nivel "info"
logger.error("Error en la base de datos"); // Registra un mensaje de nivel "error"
