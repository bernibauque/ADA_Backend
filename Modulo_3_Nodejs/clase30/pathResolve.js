const path = require('path');

// Ejemplo 1: Resolucion de una ruta relativa desdes el directorio actual
const resolvedPath1 = path.resolve('file.txt')
console.log("Ejemplo 1 - Ruta resuleta desde el directorio actual: ", resolvedPath1);

// Ejemplo 2: Resolucion de multiples segmentos de ruta en una ruta absoluta
const resolvedPath2 = path.resolve('/home/user', 'docs', 'file.txt');
console.log("Ejemplo 2 - Ruta resuelta con multiples segmentos: ", resolvedPath2);

// Ejemplo 3: Uso con rutas relativas que suben varios niveles
const resolvedPath3 = path.resolve('/home/user/docs', '../images', 'file.png');
console.log("Ejemplo 3 - Ruta resuelta con navegacion hacia arriba: ", resolvedPath3);
