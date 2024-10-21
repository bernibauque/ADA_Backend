export class Person {
    // Propiedades privadas
    private _id: number;            // Identificador único de la persona
    private _name: string;          // Nombre de la persona
    protected _age: number;          // Edad de la persona, protegida para acceso en subclases

    // Constructor para inicializar las propiedades
    constructor(id: number, name: string, age: number) {
        this._id = id;               // Inicializa el id
        this._name = name;           // Inicializa el nombre
        this._age = age;             // Inicializa la edad
    }

    // Getter para obtener el nombre
    public get name(): string {
        return this._name;           // Devuelve el nombre
    }

    // Setter para establecer el nombre
    public set name(value: string) {
        if (value.length > 0) {      // Validación para asegurarse de que el nombre no esté vacío
            this._name = value;      // Asigna el valor al nombre
        } else {
            console.log("El nombre no puede estar vacío."); // Mensaje de error
        }
    }

    // Getter para obtener la edad
    public get age(): number {
        return this._age;            // Devuelve la edad
    }

    // Setter para establecer la edad
    public set age(value: number) {
        if (value >= 0) {            // Validación para asegurarse de que la edad no sea negativa
            this._age = value;       // Asigna el valor a la edad
        } else {
            console.log("La edad no puede ser negativa."); // Mensaje de error
        }
    }

    // Método público para obtener el id
    public getId(): number {
        return this._id;             // Devuelve el identificador
    }
}

// Ejemplo de uso de la clase Person
const person1 = new Person(1, "Juan", 30);

// Usamos los getters para obtener valores
console.log(`ID: ${person1.getId()}`);             // ID: 1
console.log(`Nombre: ${person1.name}`);              // Nombre: Juan
console.log(`Edad: ${person1.age}`);                 // Edad: 30

// Usamos los setters para modificar valores
person1.name = "María";                               // Cambia el nombre a "María"
console.log(`Nuevo Nombre: ${person1.name}`);        // Nuevo Nombre: María

person1.age = 25;                                    // Cambia la edad a 25
console.log(`Nueva Edad: ${person1.age}`);          // Nueva Edad: 25

person1.age = -5;                                    // Intento de establecer una edad negativa
// Salida: La edad no puede ser negativa.

person1.name = "";                                   // Intento de establecer un nombre vacío
// Salida: El nombre no puede estar vacío.



