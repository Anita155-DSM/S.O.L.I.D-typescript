interface Notifier {
  send(to: string, message: string): void;
}


class EmailSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`Correo para ${to}: ${message}`);
  }
}

class SmsSender implements Notifier { //aca copie la implementacion concretra de correo y la adapte a sms
  send(to: string, message: string): void {
    console.log(`sms para ${to} ${message}`);
  }
}

class OrderService {
  constructor(private sender: Notifier){}

  createOrder(pedido: string): void {
    console.log("Pedido creado");
    // const emailSender = new EmailSender();
    // emailSender.send(customerEmail, "Tu pedido fue creado");
    this.sender.send(pedido, "tu pedido fue creado")
  }
}

//new OrderService().createOrder("ana@example.com");
//const emailSender = new EmailSender();
const orderService = new OrderService(new EmailSender());
orderService.createOrder("ana@example.com");

//const smsSender = new SmsSender();
const orderService2 = new OrderService(new SmsSender());

orderService2.createOrder("600123456");//aca probamos con sms