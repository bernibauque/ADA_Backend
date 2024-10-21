// Clase base: Personaje
export class Personaje {
    //Metodo que sera sobreescrito por la subclases par atacar
    atacar(): void {
        console.log("El personaje ataca");
    }

    //Metodo que sera sobreescrito para mover al personaje
    mover(): void {
        console.log("El personaje se mueve");
    }
}

// subclases: Enemigo
class Enemigo extends Personaje {
    // sobreescribimos el metodo para que el enemigo ataque
    atacar(): void {
        console.log("El enemigo ataca ferozmente");
    }

    // sobreescribimos el metodo para que el enemigo se mueva
    mover(): void {
        console.log("El enemigo se mueve sigilosamente");
    }
}

// subclase aliado 
class Aliado extends Personaje {
    // sobreescribimos el metodo para que el aliado ataque
    atacar(): void {
        console.log("El aliado ataca ferozmente");
    }

    // sobreescribimos el metodo para que el aliado se mueva
    mover(): void {
        console.log("El aliado se mueve sigilosamente");
    }
}

// Funcion que ejecuta las accionees de un personaje
function ejecutarAcciones (personaje: Personaje) {
    personaje.atacar(); // llamamos al metodo sobreescrito atacar
    personaje.mover(); // llamamos al metodo sobreescrito mover
}

// Creamos las instacias de Enemigo y Aliado
let enemigo: Personaje = new Enemigo();
let aliado: Personaje = new Aliado();

// Ejecutamos las acciones de los personajes aplicando el polimorfismo
ejecutarAcciones(enemigo)
ejecutarAcciones(aliado)
