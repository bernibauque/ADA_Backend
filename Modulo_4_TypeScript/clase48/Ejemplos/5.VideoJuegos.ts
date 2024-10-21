//En este ejemplo, se crea una clase base Personaje y dos subclases 
// Enemigo y Aliado, cada una sobrescribiendo los métodos atacar() y 
// mover() para mostrar comportamientos diferentes.

// Clase base: Personaje
class Personaje {
    // Método que será sobrescrito por las subclases para atacar
    atacar(): void {
        console.log("El personaje ataca.");
    }

    // Método que será sobrescrito para mover al personaje
    mover(): void {
        console.log("El personaje se mueve.");
    }
}

// Subclase: Enemigo
class Enemigo extends Personaje {
    // Sobrescribimos el método para que el enemigo ataque
    atacar(): void {
        console.log("El enemigo ataca ferozmente.");
    }

    // Sobrescribimos el método para que el enemigo se mueva
    mover(): void {
        console.log("El enemigo se mueve sigilosamente.");
    }
}

// Subclase: Aliado
class Aliado extends Personaje {
    // Sobrescribimos el método para que el aliado ataque
    atacar(): void {
        console.log("El aliado ataca en defensa.");
    }

    // Sobrescribimos el método para que el aliado se mueva
    mover(): void {
        console.log("El aliado se mueve rápidamente.");
    }
}

// Función que ejecuta las acciones de un personaje
function ejecutarAcciones(personaje: Personaje) {
    personaje.atacar(); // Llama al método sobrescrito para atacar
    personaje.mover();  // Llama al método sobrescrito para moverse
}

// Creando instancias de Enemigo y Aliado
let enemigo: Personaje = new Enemigo();
let aliado: Personaje = new Aliado();

// Ejecutamos las acciones de los personajes aplicando polimorfismo
ejecutarAcciones(enemigo); // Salida: El enemigo ataca ferozmente. El enemigo se mueve sigilosamente.
ejecutarAcciones(aliado);  // Salida: El aliado ataca en defensa. El aliado se mueve rápidamente.



