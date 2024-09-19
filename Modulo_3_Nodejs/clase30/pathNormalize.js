const path = require('path');

// Ejemplo 1: Normalizacion de una ruta con barras redundantes y puntos de navegacion
const path1 = '/home/user//docs/./file.txt';
const ejemplo1 = path.normalize(path1);
console.log("Ejemplo 1 - Ruta normalizada: ", ejemplo1);

// Ejemplo 2: Normalizacion de una ruta con muchos puntos de navegacion
const path2 = '/home/./user/docs/../../file.txt';
const ejemplo2 = path.normalize(path2);
console.log("Ejemplo 2 - Ruta normalizada que contenia puntos de nav: ", ejemplo2);
