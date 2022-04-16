// Ejemplo 9: Uso del reduce

const numbers = [1, 2, 3, 4, 5]

const initialValue = 0;
const result_of_reduce = numbers.reduce((acc, element) => acc + element, initialValue)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)