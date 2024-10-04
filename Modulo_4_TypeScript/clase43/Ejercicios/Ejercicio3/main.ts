import { GestionReservas, TipoHabitacion } from './reservas';

const sistemaReservas = new GestionReservas();

// Agregar reservas
sistemaReservas.agregarReserva("Juan Perez", 3, TipoHabitacion.Premium);
sistemaReservas.agregarReserva("Ana Gomez", 2, TipoHabitacion.Suite);
sistemaReservas.agregarReserva("Carlos Ruiz", 5, TipoHabitacion.Estandar);

// Listar todas las reservas
sistemaReservas.listarReservas();

// Calcular y mostrar el ingreso total del hotel
console.log(`Ingreso total del hotel: $${sistemaReservas.calcularIngresoTotal()}`);
