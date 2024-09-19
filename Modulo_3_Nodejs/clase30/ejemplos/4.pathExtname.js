// Importa el módulo 'path' de Node.js, que proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');

// Ejemplo 1: Obtener la extensión de un archivo desde una ruta absoluta.
// 'filePath' contiene una ruta absoluta a un archivo llamado 'file.txt'.
const filePath = '/home/user/docs/file.txt';
// 'path.extname' extrae la extensión del archivo de la ruta, que en este caso es '.txt'.
const extName1 = path.extname(filePath);
console.log('Ejemplo 1 - Extensión del archivo:', extName1);
// Resultado esperado: '.txt'

// Ejemplo 2: Obtener la extensión de un archivo usando una ruta relativa.
// 'relativePath' contiene una ruta relativa a un archivo llamado 'helpers.js' en 'src/utils'.
const relativePath = 'src/utils/helpers.js';
// 'path.extname' extrae la extensión del archivo de la ruta relativa, que en este caso es '.js'.
const extName2 = path.extname(relativePath);
console.log('Ejemplo 2 - Extensión del archivo en ruta relativa:', extName2);
// Resultado esperado: '.js'

// Ejemplo 3: Uso con rutas de Windows.
// 'windowsPath' es una ruta en formato Windows para un archivo llamado 'report.pdf' en 'C:\\Users\\Admin\\Documents'.
const windowsPath = 'C:\\Users\\Admin\\Documents\\report.pdf';
// 'path.extname' maneja correctamente los separadores de Windows y devuelve la extensión '.pdf'.
const extName3 = path.extname(windowsPath);
console.log('Ejemplo 3 - Extensión del archivo en ruta de Windows:', extName3);
// Resultado esperado: '.pdf'

// Ejemplo 4: Manejo de archivos sin extensión.
// 'noExtPath' es una ruta que apunta a un archivo llamado 'README' sin extensión.
const noExtPath = '/home/user/docs/README';
// 'path.extname' devuelve una cadena vacía porque el archivo no tiene extensión.
const extName4 = path.extname(noExtPath);
console.log('Ejemplo 4 - Extensión de archivo sin extensión:', extName4);
// Resultado esperado: ''

// Ejemplo 5: Rutas con múltiples puntos en el nombre del archivo.
// 'multiDotPath' es una ruta que incluye múltiples puntos en el nombre del archivo, como 'photo.large.jpg'.
const multiDotPath = 'images/photo.large.jpg';
// 'path.extname' devuelve la extensión final del archivo, que es '.jpg'.
const extName5 = path.extname(multiDotPath);
console.log('Ejemplo 5 - Extensión de archivo con múltiples puntos:', extName5);
// Resultado esperado: '.jpg'
