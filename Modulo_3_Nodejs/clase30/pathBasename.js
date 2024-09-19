const path = require('path');

const fullPath = '/home/user/docs/file.txt'

// Ejemplo 1: Obtener el nombre del archivo desde una ruta absoluta
const basename1 = path.basename(fullPath);
console.log("Ejemplo 1 - Nombre del archivo: ", basename1);

// Ejemplo 2: Obtener el nombre del archivo sin la extension
const basename2 = path.basename(fullPath, '.txt');
console.log("Ejemplo 2 - Nombre del archivo sin la extension: ", basename2);

const relativePath = 'src/utils/helpers.js'

// Ejemplo 3: Uso con rutas relativas
const basename3 = path.basename(relativePath);
console.log("Ejemplo 3 - Nombre del archivo desde una ruta relativa: ", basename3);

const dirPath = 'var/www/html/';

// Ejemplo 4: Obtener el nombre de un directorio
const basename4 = path.basename(dirPath);
console.log("Ejemplo 4 - Nombre del directorio: ", basename4);

// Ejemplo 5: Rutas con separadores de windows
const windowsPath = 'C:\\Users\\Santiago Felipelli\\Documents\\claseBACK.pdf';
const basename5 = path.basename(windowsPath);
console.log("Ejemplo 5 - Nombre del archivo en ruta de Windows: ", basename5);


