abstract class Shape { //shape debe expoiner operaciones que todas las figuras puedan aplicar
  area(): number{
  return 0;
  }
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number //privdado para que no se modifique pero la misma clase si puede acceder
  ) {}

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private side: number) {} //lo mismo aca, en este caso recibe un solo valor porque el ancho y la altura en un cuadrado tienen el mismo valor, no como en un rectangulo

  area(): number {
    return this.side * this.side;
  }
}

function calculoArea(shape: Shape): void { //esta funcion es para realizar la operacion del area independientemente de si es un reactangulo o cuadrado, justamente para eos es shape
  console.log(`area: ${shape.area()}`);
}

calculoArea(new Rectangle(5, 10)); //imprime el area pero calcula el area del rectangulo instanciandolo y mandandole los valores correspondientes
calculoArea(new Square(10)); //imprime el area pero del cuadrado, instanciando la clase y mandandole un solo valor ya que para calcular el area necesitan de un mismo valor de ancho * altura