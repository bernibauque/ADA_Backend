export class circle {
    private _radius: number; // propiedad privada del radio

    constructor(radius: number) {
        this._radius = radius // Asigna un valor inicial al radio
    }

    //Getter para el radio
    public get radius(): number {
        return this._radius; // Devuelve el valor del radio
    }

    // Setter para el radio, con una validacion
    public set radius(value: number) {
        if (value > 0 ) {
            this._radius = value; // asignamos el nuevo radio
        } else {
            console.log("El radio debe ser mayor a 0");
        }
    }

    // Getter para calcular el area
    public get area(): number {
        return Math.PI * this._radius * this._radius; // devuelve el area del circulo
    }

    // Getter para calcular la circunferencia
    public get circunferencia(): number {
        return 2 * Math.PI * this._radius; // devuelve circunferencia
    }
}

// Uso de la clase circulo
const circulo = new circle(5) // creamos una instancia nueva con radio de 5

// Usamos los getter 
console.log(`Radio: ${circulo.radius}`);
console.log(`Area: ${circulo.area}`);
console.log(`Circunferencia: ${circulo.circunferencia}`);

// Usamos el setter para modificar el radio
circulo.radius = 10 
console.log(`Nuevo radio: ${circulo.radius}`);



