const readlineSync = require('readline-sync');

const deseaContinuar = readlineSync.keyInYN('Deseas continuar la operacion? ')

if (deseaContinuar) {
    console.log('Continuando con la aplicacion... ');
} else {
    console.log('Operacion cancelada por el usuario.');
}

