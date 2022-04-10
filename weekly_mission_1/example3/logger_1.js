// Asi tambien se puede declarar una funcion
// y se pueda llamar de la siguiente manera

// const logger = require('./logger')

// y usarla como:
// logger('hola');

module.exports = ( message ) => {
    console.log(`info: ${ message }`)
} 