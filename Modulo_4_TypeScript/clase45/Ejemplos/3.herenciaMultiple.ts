// Definición de la interfaz Flyable
interface Flyable {
    fly(): void;  // Método que debe ser implementado para volar
}

// Definición de la interfaz Swimmable
interface Swimmable {
    swim(): void;  // Método que debe ser implementado para nadar
}

// Clase Duck que implementa las interfaces Flyable y Swimmable
class Duck implements Flyable, Swimmable {
    // Implementación del método fly de la interfaz Flyable
    fly() {
        console.log('El pato está volando.');  // Mensaje que indica que el pato vuela
    }

    // Implementación del método swim de la interfaz Swimmable
    swim() {
        console.log('El pato está nadando.');  // Mensaje que indica que el pato nada
    }
}

// Crear una instancia de Duck
const duck = new Duck();  // Se crea un objeto de tipo Duck

// Llamar al método fly en la instancia duck
duck.fly();   // Imprime: "El pato está volando."

// Llamar al método swim en la instancia duck
duck.swim();  // Imprime: "El pato está nadando."

