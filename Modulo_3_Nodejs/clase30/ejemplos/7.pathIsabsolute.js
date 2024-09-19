// Importa el módulo 'path' de Node.js para trabajar con rutas de archivos.
const path = require('path');

// Ejemplo 1: Verificación de una ruta absoluta en un sistema Unix-like.
const absolutePath1 = '/home/user/docs/file.txt';
// 'path.isAbsolute' verifica si la ruta es absoluta.
const isAbsolute1 = path.isAbsolute(absolutePath1);
console.log('Ejemplo 1 - ¿Es ruta absoluta?:');
// Imprime el resultado en la consola.
// Resultado esperado: true
console.log(isAbsolute1);

// Ejemplo 2: Verificación de una ruta relativa.
const relativePath1 = 'docs/file.txt';
// 'path.isAbsolute' verifica si la ruta es absoluta.
const isAbsolute2 = path.isAbsolute(relativePath1);
console.log('Ejemplo 2 - ¿Es ruta absoluta?:');
// Imprime el resultado en la consola.
// Resultado esperado: false
console.log(isAbsolute2);

// Ejemplo 3: Verificación de una ruta absoluta en un sistema Windows.
const absolutePath2 = 'C:\\Users\\Admin\\Documents\\file.txt';
// 'path.isAbsolute' verifica si la ruta es absoluta.
const isAbsolute3 = path.isAbsolute(absolutePath2);
console.log('Ejemplo 3 - ¿Es ruta absoluta?:');
// Imprime el resultado en la consola.
// Resultado esperado: true
console.log(isAbsolute3);

// Ejemplo 4: Verificación de una ruta relativa con referencias a directorios.
const relativePath2 = '../file.txt';
// 'path.isAbsolute' verifica si la ruta es absoluta.
const isAbsolute4 = path.isAbsolute(relativePath2);
console.log('Ejemplo 4 - ¿Es ruta absoluta?:');
// Imprime el resultado en la consola.
// Resultado esperado: false
console.log(isAbsolute4);

// Ejemplo 5: Verificación de una ruta con barra inicial en Windows.
const windowsRelativePath = '\\file.txt';
// 'path.isAbsolute' verifica si la ruta es absoluta.
const isAbsolute5 = path.isAbsolute(windowsRelativePath);
console.log('Ejemplo 5 - ¿Es ruta absoluta?:');
// Imprime el resultado en la consola.
// Resultado esperado: false (En Windows, las rutas relativas con barra 
// invertida al inicio no se consideran absolutas).
console.log(isAbsolute5);


