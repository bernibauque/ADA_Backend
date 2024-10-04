// Definimos la clase
export class Gato {
    // Propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    //Constructor
    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    //Metodo para obtener informacion del gatito
    public obtenerInfo(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}.`;
    }

    //Metodo para cambiar la raza del gato
    public cambiarRaza(nuevaRaza: string): void {
        this.raza = nuevaRaza;
    }
}

// Cramos una instancia de la clase gato
export const gato1 = new Gato("Miau", 2, "Siames")

// Llamar al metodo obtenerInfo
console.log(gato1.obtenerInfo());

// Cambiar raza
gato1.cambiarRaza("Persa")

//llamara de nuevo al metodo obtenerInfo
console.log(gato1.obtenerInfo());

