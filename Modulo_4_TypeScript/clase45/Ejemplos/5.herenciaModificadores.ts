// Definición de la clase base: Person
class Person {
    protected name: string;  
    // Propiedad 'name' es protegida, accesible solo dentro de la clase y sus subclases

    // Constructor que inicializa la propiedad 'name'
    constructor(name: string) {
        this.name = name;  // Asigna el nombre proporcionado al crear una instancia
    }

    // Método público greet que imprime un saludo con el nombre de la persona
    public greet() {
        console.log(`Hola, me llamo ${this.name}`);  // Muestra un mensaje de saludo
    }
}

// Definición de la clase derivada: Employee
// La clase Employee hereda de Person usando 'extends'
class Employee extends Person {
    private jobTitle: string;  // Propiedad privada 'jobTitle', accesible solo dentro de la clase Employee

    // Constructor de la subclase Employee que recibe 'name' y 'jobTitle'
    constructor(name: string, jobTitle: string) {
        super(name);  // Llama al constructor de la clase base Person para inicializar 'name'
        this.jobTitle = jobTitle;  // Inicializa la propiedad 'jobTitle' con el título de trabajo
    }

    // Método público work que describe el trabajo que realiza el empleado
    public work() {
        console.log(`${this.name} está trabajando como ${this.jobTitle}`);  
        // Imprime el nombre y el título del trabajo
    }
}

// Crear una instancia de Employee
const employee = new Employee('Laura', 'Ingeniera');  
// Se crea un objeto Employee con el nombre 'Laura' y el título 'Ingeniera'

// Usar el método greet de la clase base Person
employee.greet();  // Imprime: "Hola, me llamo Laura"

// Usar el método work de la clase Employee
employee.work();   // Imprime: "Laura está trabajando como Ingeniera"

