const path = require('path');

// Ejemplo 1: Obtener el directorio contenedor de un archivo desde un ruta absoluta
const filePath = '/home/user/docs/file.txt';
const dirName1 = path.dirname(filePath);
console.log("Ejemplo 1 - Directorio contenedor de file.txt: ", dirName1);

// Ejemplo 2: Obtener el directorio de un archivo usando una ruta relativa
const relativePath = 'src/utils/helpers.js';
const dirName2 = path.dirname(relativePath);
console.log("Ejemplo 2 - Directorio contenedor de helpers.js: ", dirName2);

// Ejemplo 3: Uso con rutas de Windows
const WindowsPath = 'C:\\Users\\Admin\\Documents\\back.pdf';
const dirName3 = path.dirname(WindowsPath);
console.log("Ejemplo 3 - Directorio contenedor de ruta de windows: ", dirName3);
