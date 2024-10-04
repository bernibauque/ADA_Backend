export enum Categoria {
    Electronica,
    Ropa,
    Alimentos
}

export class Producto {
    nombre: string;
    categoria: Categoria;
    precio: number;

    constructor(nombre: string, categoria: Categoria, precio: number) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }

    mostrarProducto(): void {
        console.log(`Producto: ${this.nombre}, Categoría: ${Categoria[this.categoria]}, Precio: $${this.precio}`);
    }
}
