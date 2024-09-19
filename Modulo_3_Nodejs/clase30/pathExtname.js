const path = require('path');

// Ejemplo 1: Obtener la extension de un archivo de una ruta absoluta
const filePath = '/home/user/docs/file.txt';
const extName1 = path.extname(filePath);
console.log("Ejemplo 1 - Extension de archivo: ", extName1);

// Ejemplo 2: Manejo de archivos sin extension
const noExtPath = '/home/user/docs/README';
const extName2 = path.extname(noExtPath);
console.log("Ejemplo 2 - Extension del archivo sin extension: ", extName2);

// Ejemplo 3: Rutas con multiples puntos en el nombre del archivo
const multPath = 'images/photo.large.jpg';
const extName3 = path.extname(multPath);
console.log("Ejemplo 3 - Extension de archivo con muchos puntos: ", extName3);
