// Clase Base: Animal
export class Animal {
    name: string;  // Propiedad que almacena el nombre del animal

    // Constructor que inicializa la propiedad 'name'
    constructor(name: string) {
        this.name = name;
    }

    // Método que imprime un sonido genérico del animal
    makeSound(): void {
        console.log(`${this.name} hace un sonido.`);  // Mensaje que indica que el animal hace un sonido
    }
}

// Clase Derivada: Perro (Dog)
class Dog extends Animal {
    breed: string;  // Nueva propiedad específica de la clase Dog, que almacena la raza

    // Constructor de la subclase Dog que llama al constructor de la clase base
    constructor(name: string, breed: string) {
        super(name);  // Llama al constructor de la clase base Animal para inicializar 'name'
        this.breed = breed;  // Inicializa la nueva propiedad 'breed'
    }

    // Sobrescritura del método makeSound
    makeSound(): void {
        console.log(`${this.name} ladra.`);  // Cambia el sonido específico para los perros
    }

    // Nuevo método específico de la subclase Dog
    fetch(): void {
        console.log(`${this.name} está buscando la pelota.`);  // El perro realiza la acción de buscar la pelota
    }
}

// Instanciar objetos de la clase base y derivada
const genericAnimal = new Animal('Animal');  // Creación de un objeto de la clase base
genericAnimal.makeSound();  // Llama al método makeSound de la clase base: "Animal hace un sonido."

const myDog = new Dog('Max', 'Golden Retriever');  // Creación de un objeto de la subclase Dog
myDog.makeSound();  // Llama al método sobrescrito de la subclase Dog: "Max ladra."
myDog.fetch();      // Llama al método específico de la subclase Dog: "Max está buscando la pelota."





