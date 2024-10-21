export class Person {
    private _id: number;
    private _name: string;
    protected _age: number;

    constructor(id: number, name: string, age:number) {
        this._id = id;
        this._name = name;
        this._age = age;
    }

    // Getter para obtener el nombre
    public get name(): string {
        return this._name;
    }

    // Setter para establecer el nombre
    public set name(value: string) {
        if (value.length > 0) {
            this._name = value;
        } else {
            console.log("El nombre no puede estar vacio");
        }
    }

    // Getter para la edad
    public get age(): number {
        return this._age;
    }

    // Setter para establecer la edad
    public set age(value: number) {
        if (value >= 0) {
            this._age = value;
        } else {
            console.log("La edad no puede ser negativa");
        }
    }

    // Metodo publico para obtener el id
    public getId(): number {
        return this._id;
    }
}

//Instancia persona
const persona1 = new Person(1, "Mariana", 30)

// Usamos los getter para obtener los valores
console.log(`ID: ${persona1.getId()}`);
console.log(`Nombre: ${persona1.name}`);
console.log(`Edad: ${persona1.age}`);

