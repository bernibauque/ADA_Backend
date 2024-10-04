import { Producto, Categoria } from './producto';

const inventario: Producto[] = [];

// Agregar productos
inventario.push(new Producto("Televisor", Categoria.Electronica, 1000));
inventario.push(new Producto("Camiseta", Categoria.Ropa, 50));
inventario.push(new Producto("Manzanas", Categoria.Alimentos, 30));
inventario.push(new Producto("Laptop", Categoria.Electronica, 1500));

// Mostrar productos por categoría
function mostrarProductosPorCategoria(categoria: Categoria, productos: Producto[]): void {
    console.log(`Productos en la categoría ${Categoria[categoria]}:`);
    productos.forEach(producto => {
        if (producto.categoria === categoria) {
            producto.mostrarProducto();
        }
    });
}

// Calcular precio total del inventario
function calcularTotalInventario(productos: Producto[]): number {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

// Uso
mostrarProductosPorCategoria(Categoria.Electronica, inventario);
console.log(`El valor total del inventario es: $${calcularTotalInventario(inventario)}`);
