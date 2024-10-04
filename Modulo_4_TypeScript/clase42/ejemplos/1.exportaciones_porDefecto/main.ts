import Calculator from './calculator';

const calc = new Calculator();
console.log(calc.add(10, 5));      // Salida: 15
console.log(calc.subtract(10, 5)); // Salida: 5

// Aquí, Calculator es importado como la clase principal del módulo 
// calculator.ts. Aunque podríamos haber llamado a esta importación 
// de cualquier otra manera (como import MyCalc from './calculator'), 
// es una práctica común utilizar un nombre relacionado con lo que 
// estás importando.



