// En este ejemplo

// Clase base 
export abstract class Pago {
    abstract procesarPago(monto: number): void;
}

// Clases derivadas 
class PagoConTarjeta extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} procesado con tarjeta de credito`);
    }
}

class PagoEnEfectivo extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} procesado en efectivo`);
    }
}

class PagoPorTransferencia extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} procesado con transferencia`);
    }
}

// Uso de polimorfismo
const procesar = (pago: Pago, monto: number) => {
    pago.procesarPago(monto)
};

const pago1 = new PagoConTarjeta();
const pago2 = new PagoEnEfectivo();
const pago3 = new PagoPorTransferencia();

procesar(pago1, 100);
procesar(pago2, 50);
procesar(pago3, 200);

