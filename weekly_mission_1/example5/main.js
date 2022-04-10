const logger = require('./logger')

// logger devuelve un objeto ya instanciado de la clase Logger
logger.log('This is an informational message')

const customLogger = new logger.constructor('custom')
customLogger.log('mensaje')

/*
También pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
*/