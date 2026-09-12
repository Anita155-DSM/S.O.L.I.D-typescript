interface Printer {
  print(document: string): void;
  // scan(document: string): void;
  // fax(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }
}

class ScanerPrinter implements Scanner {
  scan(document: string): void {
    console.log(`imprimiendo: ${document}`)
  }
}

class FaxPrinter implements Fax {
  fax(document: string): void {
    console.log(`imprimiendo: ${document}`)
  }
}

new SimplePrinter().print("tarea.txt");
new ScanerPrinter().scan("scan.zip");
new FaxPrinter().fax("fax.fax")