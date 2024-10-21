// En este ejemplo, la función procesar es capaz de aceptar cualquier tipo de pago, 
// y cada uno se comporta de manera distinta dependiendo de la implementación 
// concreta que se utilice.

// Clase base
export abstract class Pago {
    abstract procesarPago(monto: number): void;
  }
  
  // Clases derivadas con comportamientos específicos
  class PagoConTarjeta extends Pago {
    procesarPago(monto: number): void {
      console.log(`Pago de $${monto} procesado con tarjeta de crédito.`);
    }
  }
  
  class PagoEnEfectivo extends Pago {
    procesarPago(monto: number): void {
      console.log(`Pago de $${monto} procesado en efectivo.`);
    }
  }
  
  class PagoPorTransferencia extends Pago {
    procesarPago(monto: number): void {
      console.log(`Pago de $${monto} procesado por transferencia bancaria.`);
    }
  }
  
  // Uso del polimorfismo
  const procesar = (pago: Pago, monto: number) => {
    pago.procesarPago(monto);
  };
  
  const pago1 = new PagoConTarjeta();
  const pago2 = new PagoEnEfectivo();
  const pago3 = new PagoPorTransferencia();
  
  procesar(pago1, 100);  // Pago de $100 procesado con tarjeta de crédito.
  procesar(pago2, 50);   // Pago de $50 procesado en efectivo.
  procesar(pago3, 200);  // Pago de $200 procesado por transferencia bancaria.






