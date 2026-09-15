// type PaymentType = "card" | "cash";

// class PaymentProcessor {
//   pay(type: PaymentType, amount: number): void {
//     switch (type) {
//       case "card":
//         console.log(`Pagando $${amount} con tarjeta`);
//         break;
//       case "cash":
//         console.log(`Pagando $${amount} en efectivo`);
//         break;
//       default:
//         throw new Error("Medio de pago no soportado");
//     }
//   }
// }

// new PaymentProcessor().pay("card", 100);

interface PaymentMethod {
  pay(amount: number): void;
}

class CardPyment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`pagando con tarjeta el monto de ${amount}`)
  }
}

class TransferPyment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`pagando con transferencia el monto de ${amount}`)
  }
}

class CashPyment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`pagando con efectivo el monto de ${amount}`)
  }
}

class PaymentProcessor {
  constructor(private paymentMethod: PaymentMethod){} //aca aplicamos la inyeccion de dependencias como haciamos en el ejercicio 1, pero un poco más flexible por así decirlo

  //correccion del profe, incorporar un solo metodo que realice el pago según la clase que de instancie
  createPay(amount: number){
    this.paymentMethod.pay(amount)
  }
  // createPayCard(amount: number){ //creamos pago con tarjeta
  //   this.paymentMethod.pay(amount)
  // }

  // createPayTransfer(amount: number){ //creamos pago con transferencia
  //   this.paymentMethod.pay(amount)
  // }

  // createPayCash(amount: number){ //creamos pago con efectivo
  //   this.paymentMethod.pay(amount)
  // }
}

const pagoConTarjeta = new PaymentProcessor(new CardPyment()) //aca lo q hacemos es crear una variable, donde instanciamos la clase PaymentProcessor y hacemos una inyeccón de dependencias
pagoConTarjeta.createPay(1000)

const pagoConTransferencia = new PaymentProcessor(new TransferPyment())
pagoConTransferencia.createPay(1200)

const pagoConEfectivo = new PaymentProcessor(new CashPyment())
pagoConEfectivo.createPay(2000)