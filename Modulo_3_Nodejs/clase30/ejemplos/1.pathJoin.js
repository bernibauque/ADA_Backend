// Importa el módulo 'path' de Node.js, que proporciona utilidades para trabajar con rutas de archivos y directorios
const path = require('path');

// Ejemplo 1: Uniendo segmentos de ruta simples
// Une tres segmentos de ruta: '/user', 'local', y 'bin'. 
// Como el primer segmento es una ruta absoluta ('/user'), el resultado también será absoluto.
const example1 = path.join('/user', 'local', 'bin');
console.log('Ejemplo 1 - Ruta combinada:', example1);
// Resultado esperado:
// En sistemas UNIX: '/user/local/bin'
// En sistemas Windows: '\user\local\bin'

// Ejemplo 2: Eliminando barras redundantes
// Aquí se pasan varios segmentos que incluyen barras al inicio o al final.
// path.join los une en una única ruta y elimina cualquier barra redundante para mantener la ruta limpia y correcta.
const example2 = path.join('/user/', '/local', 'bin/');
console.log('Ejemplo 2 - Ruta normalizada sin barras redundantes:', example2);
// Resultado esperado: '/user/local/bin' (independientemente del sistema operativo)

// Ejemplo 3: Normalizando rutas con '..' (subir un directorio)
// Este ejemplo muestra cómo path.join maneja el segmento especial '..', que indica "subir un nivel de directorio".
// '/user' + 'local' sube un nivel con '..' y llega a 'bin', resultando en la ruta '/user/bin'.
const example3 = path.join('/user', 'local', '..', 'bin');
console.log('Ejemplo 3 - Ruta normalizada con "..":', example3);
// Resultado esperado: '/user/bin'

// Ejemplo 4: Construcción de una ruta relativa multiplataforma
// Crea una ruta relativa que funcione en cualquier sistema operativo.
// En UNIX, el resultado será 'docs/projects/index.html'.
// En Windows, el resultado será 'docs\projects\index.html'.
// path.join garantiza que se utilicen los separadores correctos según el sistema operativo.
const example4 = path.join('docs', 'projects', 'index.html');
console.log('Ejemplo 4 - Ruta relativa:', example4);
// Resultado esperado en UNIX: 'docs/projects/index.html'
// Resultado esperado en Windows: 'docs\projects\index.html'
