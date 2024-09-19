const readlineSync = require('readline-sync');

const edad = readlineSync.questionInt('Por favor, ingresa tu edad: ');

if (edad >= 18) {
    console.log('Eres mayor de edad, puedes acceder a este sitio.');
} else {
    console.log('Lo siento, necesitas ser mayor de 18 anios para acceder a este sitio.');
}

