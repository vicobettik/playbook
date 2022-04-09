// loggger.js

// funcion de este modulo llamada info
exports.info = (message) => {
    console.log(`info: ${message}`);
}


// funcion de este modulo llamada verbose
exports.verbose = (message) => {
    console.log(`verbose: ${message}`);
}

/*
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
 * */