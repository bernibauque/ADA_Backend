import { Concesionaria } from './concesionaria';
import { Auto } from './auto';

const concesionaria = new Concesionaria();

const auto1: Auto = { marca: 'Toyota', modelo: 'Corolla', año: 2020, color: 'Rojo' };
const auto2: Auto = { marca: 'Ford', modelo: 'Fiesta', año: 2018, color: 'Azul' };

concesionaria.agregarAuto(auto1);
concesionaria.agregarAuto(auto2);

console.log('Inventario sin ordenar:');
concesionaria.mostrarInventario();

concesionaria.ordenarInventario('año');
console.log('Inventario ordenado por año:');
concesionaria.mostrarInventario();
