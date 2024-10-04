export enum TipoHabitacion {
    Estandar = 100,
    Suite = 200,
    Premium = 300
}

export type Reserva = [string, number, TipoHabitacion];

export class GestionReservas {
    private reservas: Reserva[] = [];

    agregarReserva(nombre: string, noches: number, tipo: TipoHabitacion): void {
        this.reservas.push([nombre, noches, tipo]);
    }

    listarReservas(): void {
        this.reservas.forEach(([nombre, noches, tipo]) => {
            console.log(`Huésped: ${nombre}, Noches: ${noches}, Habitación: ${TipoHabitacion[tipo]}, Precio por noche: $${tipo}`);
        });
    }

    calcularIngresoTotal(): number {
        return this.reservas.reduce((total, [_, noches, tipo]) => total + (noches * tipo), 0);
    }
}
