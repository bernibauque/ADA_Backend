// Clase base
export class Animal {
    name: string // propiedad que almacena el nombre del animal

    // Constuctor
    constructor(name: string) {
        this.name = name
    }

    //Metodo 
    makeSound(): void {
        console.log(`${this.name} hace un sonido`);
    }
}

// Clase derivada 
class Dog extends Animal {
    breed: string; // Nueva propiedad de la clase hija

    // Constructor
    constructor(name: string, breed: string) {
        super(name); // llama al constructor de la clase animal
        this.breed =  breed // Inicializa la propiedad breed
    }

    // Sobreescritura del metodo makeSound
    makeSound(): void {
        console.log(`${this.name} ladra`);
    }

    // Nuevo metodo especifico de la clase hija
    search(): void {
        console.log(`${this.name} esta buscando la pelota`);
    }
}

// Instanciar objetos de la clase base
const genericoAnimal = new Animal('Animal') // Creacio de un objeto de la clase base
genericoAnimal.makeSound() // LLamamos al metodo makesoun de la clase base

const myDog = new Dog('Pipo', 'Caniche') // Creacion de un objeto de la subclase dog
myDog.makeSound();
myDog.search();
