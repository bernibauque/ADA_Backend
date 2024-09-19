// Importa el módulo 'path' de Node.js para trabajar con rutas de archivos.
const path = require('path');

// Ejemplo 1: Normalización de una ruta con barras redundantes y puntos de navegación.
const rawPath1 = '/home/user//docs/./file.txt';
// 'path.normalize' convierte la ruta en una forma estándar.
// En este caso, elimina las barras redundantes ('//') y el punto ('.') que representa el directorio actual.
const normalizedPath1 = path.normalize(rawPath1);
console.log('Ejemplo 1 - Ruta normalizada:');
// Imprime la ruta normalizada en la consola.
// Resultado esperado: '/home/user/docs/file.txt'
console.log(normalizedPath1);

// Ejemplo 2: Normalización de una ruta con navegación hacia arriba.
const rawPath2 = '/home/user/docs/../images/file.jpg';
// 'path.normalize' maneja la navegación hacia arriba ('..') en la ruta.
// En este caso, el segmento 'docs/..' se resuelve eliminando 'docs' y navegando hacia el directorio 'images'.
const normalizedPath2 = path.normalize(rawPath2);
console.log('Ejemplo 2 - Ruta normalizada con navegación hacia arriba:');
// Imprime la ruta normalizada en la consola.
// Resultado esperado: '/home/user/images/file.jpg'
console.log(normalizedPath2);

// Ejemplo 3: Normalización de una ruta con múltiples puntos de navegación.
const rawPath3 = '/home/./user/docs/../../file.txt';
// 'path.normalize' maneja los puntos de navegación para simplificar la ruta.
// El punto ('.') representa el directorio actual y se elimina. El segmento 'docs/../../' 
// elimina 'docs' y navega dos niveles hacia arriba.
const normalizedPath3 = path.normalize(rawPath3);
console.log('Ejemplo 3 - Ruta normalizada con múltiples puntos de navegación:');
// Imprime la ruta normalizada en la consola.
// Resultado esperado: '/file.txt'
console.log(normalizedPath3);

// Ejemplo 4: Normalización de una ruta en formato Windows.
const rawPath4 = 'C:\\Users\\Admin\\Documents\\..\\file.txt';
// 'path.normalize' maneja correctamente las barras invertidas de Windows y la navegación hacia arriba ('..').
// En este caso, 'Documents\\..' se resuelve eliminando 'Documents' y navegando hacia el directorio 'Users'.
const normalizedPath4 = path.normalize(rawPath4);
console.log('Ejemplo 4 - Ruta normalizada en formato Windows:');
// Imprime la ruta normalizada en la consola.
// Resultado esperado: 'C:\\Users\\Admin\\file.txt'
console.log(normalizedPath4);

// Ejemplo 5: Normalización de una ruta con directorio vacío.
const rawPath5 = '/home/user/docs/./file.txt/';
// 'path.normalize' elimina el punto ('.') que representa el directorio actual y la barra adicional al final.
// La barra final no es necesaria y se elimina.
const normalizedPath5 = path.normalize(rawPath5);
console.log('Ejemplo 5 - Ruta normalizada con directorio vacío:');
// Imprime la ruta normalizada en la consola.
// Resultado esperado: '/home/user/docs/file.txt'
console.log(normalizedPath5);


