import { Auto } from './auto';
import { ordenarPorAño, ordenarPorMarca } from './utils';

export class Concesionaria {
    private inventario: Auto[] = [];

    agregarAuto(auto: Auto): void {
        this.inventario.push(auto);
    }

    eliminarAuto(modelo: string): void {
        this.inventario = this.inventario.filter(auto => auto.modelo !== modelo);
    }

    mostrarInventario(): void {
        this.inventario.forEach(auto => {
            console.log(`${auto.marca} ${auto.modelo} (${auto.año}) - Color: ${auto.color}`);
        });
    }

    ordenarInventario(criterio: 'marca' | 'año'): void {
        if (criterio === 'marca') {
            this.inventario = ordenarPorMarca(this.inventario);
        } else {
            this.inventario = ordenarPorAño(this.inventario);
        }
    }
}
