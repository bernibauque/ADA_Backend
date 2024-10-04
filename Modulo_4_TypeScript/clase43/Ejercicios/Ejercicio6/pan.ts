// Clase Pan con atributos de tipo, precio y cantidad disponible
export class Pan {
    constructor(
        public tipo: string, 
        public precio: number, 
        public cantidadDisponible: number
    ) {}

    // Método para restar del inventario
    descontar(cantidad: number): void {
        this.cantidadDisponible -= cantidad;
    }
}
