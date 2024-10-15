// Definimos una clase abstracta llamada "Animal"
export abstract class Animal {
    // El constructor define la propiedad protegida "nombre", accesible solo en esta clase y sus subclases.
    constructor(protected nombre: string) {}
  
    // Método abstracto que deberá ser implementado por cada subclase.
    // Este método definirá cómo se mueve el animal.
    abstract moverse(): void;
  
    // Método concreto (con implementación) que describe el animal.
    describir(): void {
      console.log(`Este es un animal llamado: ${this.nombre}`);
    }
  }
  
  // Definimos una clase concreta "Perro" que extiende la clase abstracta "Animal"
  class Perro extends Animal {
    // Implementamos el método abstracto "moverse" de la clase "Animal"
    moverse(): void {
      console.log(`${this.nombre} está corriendo!`);
    }
  }
  
  // Definimos otra clase concreta "Pajaro" que también extiende "Animal"
  class Pajaro extends Animal {
    // Implementamos el método abstracto "moverse" de la clase "Animal"
    moverse(): void {
      console.log(`${this.nombre} está volando!`);
    }
  }
  
  // Crear instancias de las clases "Perro" y "Pajaro"
  const miPerro = new Perro('Firulais');
  const miPajaro = new Pajaro('Tweety');
  
  // Usamos los métodos concretos y abstractos
  miPerro.describir();  // Muestra: Este es un animal llamado: Firulais
  miPerro.moverse();    // Muestra: Firulais está corriendo!
  
  miPajaro.describir(); // Muestra: Este es un animal llamado: Tweety
  miPajaro.moverse();   // Muestra: Tweety está volando!
  


  