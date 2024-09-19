// Importa el módulo 'path' de Node.js, que proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');

// Ejemplo 1: Obtener el nombre del archivo desde una ruta absoluta.
// 'fullPath' contiene una ruta absoluta a un archivo llamado 'file.txt'.
const fullPath = '/home/user/docs/file.txt';
// 'path.basename' toma la ruta completa y devuelve solo el nombre del archivo, es decir, 'file.txt'.
const baseName1 = path.basename(fullPath);
console.log('Ejemplo 1 - Nombre del archivo:', baseName1);
// Resultado esperado: 'file.txt'

// Ejemplo 2: Obtener el nombre del archivo sin la extensión.
// Utiliza el segundo parámetro de 'path.basename' para especificar que se elimine la extensión '.txt' del nombre del archivo.
const baseNameWithoutExt = path.basename(fullPath, '.txt');
console.log('Ejemplo 2 - Nombre del archivo sin extensión:', baseNameWithoutExt);
// Resultado esperado: 'file'

// Ejemplo 3: Uso con rutas relativas.
// 'relativePath' contiene una ruta relativa a un archivo llamado 'helpers.js'.
const relativePath = 'src/utils/helpers.js';
// 'path.basename' extrae el nombre del archivo 'helpers.js' de la ruta relativa.
const baseName2 = path.basename(relativePath);
console.log('Ejemplo 3 - Nombre del archivo desde una ruta relativa:', baseName2);
// Resultado esperado: 'helpers.js'

// Ejemplo 4: Obtener el nombre de un directorio.
// 'dirPath' es una ruta que termina en un directorio llamado 'html'.
const dirPath = '/var/www/html/';
// 'path.basename' devuelve el último segmento de la ruta, que es el nombre del directorio 'html'.
const baseName3 = path.basename(dirPath);
console.log('Ejemplo 4 - Nombre del directorio:', baseName3);
// Resultado esperado: 'html'

// Ejemplo 5: Rutas con separadores de Windows.
// 'windowsPath' es una ruta que utiliza separadores de directorios de Windows para un archivo llamado 'report.pdf'.
const windowsPath = 'C:\\Users\\Admin\\Documents\\report.pdf';
// 'path.basename' maneja los separadores de Windows y devuelve solo el nombre del archivo 'report.pdf'.
const baseName4 = path.basename(windowsPath);
console.log('Ejemplo 5 - Nombre del archivo en ruta de Windows:', baseName4);
// Resultado esperado: 'report.pdf'
