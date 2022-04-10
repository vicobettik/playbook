const Logger = require('./logger'); // llamada del modulo con clase

const dbLogger = new Logger('db') // instanciado de un objeto y llamado del constructor

// llamado del metodo info
dbLogger.info('mensaje informativo');

// instanciacion de otro objeto de tipo logger
const accessLogger = new Logger('access');
// llamado del metodo verbose con el objeto accessLogger
accessLogger.verbose('mensaje verbose');