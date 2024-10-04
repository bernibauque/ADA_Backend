import { InventarioMuebles } from './inventario';
import { Mueble } from './mueble';

const tienda = new InventarioMuebles();

const mueble1: Mueble = { tipo: 'Silla', material: 'Madera', precio: 500 };
const mueble2: Mueble = { tipo: 'Mesa', material: 'Metal', precio: 1200 };

tienda.agregarMueble(mueble1);
tienda.agregarMueble(mueble2);

console.log('Muebles en inventario:');
tienda.mostrarMuebles();

console.log('Muebles filtrados por tipo "Silla":');
tienda.filtrarMuebles('Silla');

console.log('Muebles ordenados por precio:');
tienda.ordenarMuebles();
tienda.mostrarMuebles();
