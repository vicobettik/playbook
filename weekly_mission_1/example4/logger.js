class Logger {

    constructor(name) {
        // this, sirve para referenciar el valor del contexto local de esta clase
        this.name = name; // atributos
    }

    // definicion de un método
    // this.name es una variable que se guarda en el contexto local
    // message es una variable que se pasa al método al ejecutarlo
    info( message ) {
        console.log( `[Objeto con nombre: ${this.name}] info: ${message}`);
    }

    // método verbose
    verbose (message) {
        console.log( `[Objeto con nombre: ${this.name}] verbose: ${message}`);
    }

}

module.exports = Logger;