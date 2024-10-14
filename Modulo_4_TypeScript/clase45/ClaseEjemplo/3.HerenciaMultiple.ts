// Interfaz
interface Flying {
    fly(): void // metodo que implementamos para volar
}

// Interfaz 
interface Swimming {
    swim(): void // metodo que implementamos para nadar
}

export class Duck implements Flying, Swimming {
    fly() {
        console.log('El pato esta volando');
    }
    swim() {
        console.log('El pato esta nadando');
    }
}

// Instanciamos
const duck = new Duck()
duck.fly()
duck.swim()