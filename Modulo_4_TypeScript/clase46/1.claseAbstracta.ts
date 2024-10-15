// Definimos una clase abstracta llama animal
export abstract class Animal {
    // Constructor: Define la prop nombre, establece solo en esta clase y sus subclases
    constructor(protected nombre: string) {}

    // Metodo abstracto que debera ser implementado por cada subclase
    // este metodo definira como se mueve el animal
    abstract moverse(): void;

    // Metodo concreto (con implementacion) que describe al animal
    describir(): void {
        console.log(`Este es un animal llamado ${this.nombre}`);
    }
}

// Definimos clase concreta "Perro" que extiende de la clase abstracta animal
class Perro extends Animal {
    // Implementamos el metodo abstracto "moverse" de la clase Animal
    moverse(): void {
        console.log(`${this.nombre} esta corriendo`);
    }
}

// Definimos otra clase concreta "Pajaro" que extiende de animal
class Pajaro extends Animal {
    // Implementamos el metodo abstracto "moverse" de la clase animal
    moverse(): void {
        console.log(`${this.nombre} esta volando`);
    }
}

// Creamos las instancias para ambas clases hijas
const miPerro = new Perro('Osito')
const miPajaro = new Pajaro('Chuequita')

// Usamos los metodos concretos y abstractos
miPerro.describir(); 
miPerro.moverse(); 

miPajaro.describir(); 
miPajaro.moverse(); 
