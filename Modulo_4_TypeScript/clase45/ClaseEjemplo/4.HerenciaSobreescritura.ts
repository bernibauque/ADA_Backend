export class Empleado {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre
    }

    trabajar(): void {
        console.log(`${this.nombre} esta trabajando`);
    }
}

class Programador extends Empleado {
    lenguaje: string;

    constructor(nombre:string, lenguaje: string) {
        super(nombre)
        this.lenguaje = lenguaje
    }

    trabajar(): void {
        super.trabajar() //utiliza el metodo original de empleado
        console.log(`${this.nombre} esta escribiendo codigo en ${this.lenguaje}`);
    }
}

const programadora = new Programador("Pau", 'Typescript')
programadora.trabajar()