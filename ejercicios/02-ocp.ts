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
  constructor(private paymentMethod: PaymentMethod){}

  createPayCard(amount: number){ //creamos pago con tarjeta
    this.paymentMethod.pay(amount)
  }

  createPayTransfer(pay:PaymentMethod){ //creamos pago con transferencia
    this.createPayTransfer(pay)
  }

  createPayCash(pay:PaymentMethod){ //creamos pago con efectivo
    this.createPayCash(pay)
  }
}

const pago = new PaymentProcessor(new CardPyment())
pago.createPayCard(1000)

