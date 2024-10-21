// Este ejemplo de la clase Circle muestra cómo gestionar el radio de un círculo a través de un setter 
// que valida que el valor sea positivo y proporciona getters para calcular el área y la circunferencia. 
// Se demuestra cómo se puede acceder y modificar el radio, incluyendo el manejo de intentos de asignación 
// de valores negativos, que son rechazados con un mensaje de error. 
// Esto enfatiza la importancia de la validación en la manipulación de propiedades.

class Circle {
    private _radius: number; // Propiedad privada para el radio

    // Constructor que inicializa el radio
    constructor(radius: number) {
        this._radius = radius; // Asigna el valor inicial al radio
    }

    // Getter para el radio
    public get radius(): number {
        return this._radius; // Devuelve el valor del radio
    }

    // Setter para el radio, con validación
    public set radius(value: number) {
        if (value > 0) { // Verifica que el nuevo radio sea mayor a 0
            this._radius = value; // Asigna el nuevo radio
        } else {
            console.log("El radio debe ser mayor a 0."); // Mensaje de error si la validación falla
        }
    }

    // Getter para calcular el área
    public get area(): number {
        return Math.PI * this._radius * this._radius; // Devuelve el área del círculo
    }

    // Getter para calcular la circunferencia
    public get circumference(): number {
        return 2 * Math.PI * this._radius; // Devuelve la circunferencia del círculo
    }
}

// Uso de la clase Circle
const circle = new Circle(5); // Crea una nueva instancia de Circle con radio 5

// Usamos el getter para obtener los valores
console.log(`Radio: ${circle.radius}`);            // Muestra el radio: 5
console.log(`Área: ${circle.area}`);                // Muestra el área: 78.54 (aprox)
console.log(`Circunferencia: ${circle.circumference}`); // Muestra la circunferencia: 31.42 (aprox)

// Usamos el setter para modificar el radio
circle.radius = 10; // Cambia el radio a 10
console.log(`Nuevo Radio: ${circle.radius}`);      // Muestra el nuevo radio: 10

circle.radius = -3; // Intento inválido, mostrará un mensaje de error
// El radio no cambia, ya que el valor era inválido
console.log(`Radio: ${circle.radius}`);            // Muestra el radio: 10

// Modificamos correctamente el radio
circle.radius = 8; // Cambia el radio a 8
console.log(`Nuevo Radio: ${circle.radius}`);      // Muestra el nuevo radio: 8
console.log(`Nueva Área: ${circle.area}`);         // Muestra la nueva área: 201.06 (aprox)
console.log(`Nueva Circunferencia: ${circle.circumference}`); // Muestra la nueva circunferencia: 50.27 (aprox)





