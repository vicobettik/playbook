class Logger {
    constructor(name){
      // Al crear este objeto se tendrá estas propiedades
      this.count = 0
      this.name = name
    }
  
    log(message) {
      this.count++ // se aumenta el contador interno al llamar este método
      console.log(`[${this.name}] mensaje: ${message}`)
    }
  }
  
  module.exports = new Logger('DEFAULT') // Instanciación del objeto y se exporta