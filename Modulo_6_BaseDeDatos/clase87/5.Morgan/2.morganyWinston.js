// Importa el módulo 'fs' para trabajar con el sistema de archivos
const fs = require("fs");
// Importa el módulo 'path' para manejar rutas de archivos y directorios
const path = require("path");

// Crea un stream de escritura para el archivo access.log
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"), // Ruta completa al archivo access.log
    { flags: "a" } // Opción "a" para añadir logs al archivo sin sobrescribirlo
);

// Configura Morgan para usar el formato "combined" y guardar los logs en access.log
app.use(morgan("combined", { stream: accessLogStream }));

// Aclaracion: no vemos los logs en la terminal es porque este código está configurado
// para escribir los logs en un archivo (access.log) en lugar de mostrarlos en la consola.
// Esto se debe a que estás usando la opción { stream: accessLogStream } en Morgan,
// que redirige los logs al archivo en lugar de imprimirlos en la terminal.
