// Importa el módulo 'path' de Node.js para trabajar con rutas de archivos.
const path = require('path');

// Ejemplo 1: Resolución de una ruta relativa desde el directorio actual.
// 'file.txt' es una ruta relativa. 'path.resolve' convierte esta ruta en una ruta absoluta.
const resolvedPath1 = path.resolve('file.txt');
console.log('Ejemplo 1 - Ruta resuelta desde el directorio actual:', resolvedPath1);
// Resultado esperado: '/home/user/currentDir/file.txt' (dependiendo del directorio actual)

// Ejemplo 2: Resolución de múltiples segmentos de ruta en una ruta absoluta.
// Combina '/home/user', 'docs', y 'file.txt' en una sola ruta absoluta.
const resolvedPath2 = path.resolve('/home/user', 'docs', 'file.txt');
console.log('Ejemplo 2 - Ruta resuelta con múltiples segmentos:', resolvedPath2);
// Resultado esperado: '/home/user/docs/file.txt'

// Ejemplo 3: Uso con rutas relativas que suben varios niveles.
// Resuelve la ruta combinando '/home/user/docs', sube un nivel con '../images', y añade 'file.jpg'.
const resolvedPath3 = path.resolve('/home/user/docs', '../images', 'file.jpg');
console.log('Ejemplo 3 - Ruta resuelta con navegación hacia arriba:', resolvedPath3);
// Resultado esperado: '/home/user/images/file.jpg'

// Ejemplo 4: Resolución de una ruta con un directorio vacío.
// La cadena vacía ('') se ignora en la resolución de la ruta.
const resolvedPath4 = path.resolve('/home/user', '', 'file.txt');
console.log('Ejemplo 4 - Ruta resuelta con directorio vacío:', resolvedPath4);
// Resultado esperado: '/home/user/file.txt'

// Ejemplo 5: Resolución de rutas desde un directorio relativo.
// 'docs/file.txt' es una ruta relativa. 
// 'path.resolve' la convierte en una ruta absoluta basada en el directorio actual.
const resolvedPath5 = path.resolve('docs', 'file.txt');
console.log('Ejemplo 5 - Ruta resuelta desde un directorio relativo:', resolvedPath5);
// Resultado esperado: '/home/user/docs/file.txt' (dependiendo del directorio actual)


