// Importa el módulo 'path' de Node.js, que proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');

// Ejemplo 1: Obtener el directorio contenedor de un archivo desde una ruta absoluta.
// 'filePath' contiene una ruta absoluta a un archivo llamado 'file.txt'.
const filePath = '/home/user/docs/file.txt';
// 'path.dirname' toma la ruta completa y devuelve la ruta del directorio que contiene el archivo, 
// es decir, '/home/user/docs'.
const dirName1 = path.dirname(filePath);
console.log('Ejemplo 1 - Directorio contenedor de file.txt:', dirName1);
// Resultado esperado: '/home/user/docs'

// Ejemplo 2: Obtener el directorio de un archivo usando una ruta relativa.
// 'relativePath' contiene una ruta relativa a un archivo llamado 'helpers.js' dentro de 'src/utils'.
const relativePath = 'src/utils/helpers.js';
// 'path.dirname' devuelve la ruta del directorio que contiene el archivo 'helpers.js', es decir, 'src/utils'.
const dirName2 = path.dirname(relativePath);
console.log('Ejemplo 2 - Directorio contenedor de helpers.js:', dirName2);
// Resultado esperado: 'src/utils'

// Ejemplo 3: Uso con rutas de Windows.
// 'windowsPath' es una ruta en formato Windows para un archivo llamado 'report.pdf' en 'C:\\Users\\Admin\\Documents'.
const windowsPath = 'C:\\Users\\Admin\\Documents\\report.pdf';
// 'path.dirname' maneja los separadores de Windows y devuelve 
// la ruta del directorio que contiene el archivo 'report.pdf', es decir, 'C:\\Users\\Admin\\Documents'.
const dirName3 = path.dirname(windowsPath);
console.log('Ejemplo 3 - Directorio contenedor en ruta de Windows:', dirName3);
// Resultado esperado: 'C:\\Users\\Admin\\Documents'

// Ejemplo 4: Obtener el directorio padre de un directorio.
// 'dirOnlyPath' es una ruta que termina en un directorio llamado 'html'.
const dirOnlyPath = '/var/www/html/';
// 'path.dirname' devuelve el directorio padre del directorio 'html', es decir, '/var/www'.
const parentDirName = path.dirname(dirOnlyPath);
console.log('Ejemplo 4 - Directorio padre de /var/www/html:', parentDirName);
// Resultado esperado: '/var/www'

// Ejemplo 5: Manejo de rutas que terminan con una barra diagonal.
// Si la ruta termina con una barra diagonal (indicando que es un directorio), 
// 'path.dirname' aún devuelve el directorio contenedor correcto.
const trailingSlashPath = '/home/user/docs/';
const parentDirNameWithSlash = path.dirname(trailingSlashPath);
console.log('Ejemplo 5 - Directorio padre de /home/user/docs/:', parentDirNameWithSlash);
// Resultado esperado: '/home/user'


