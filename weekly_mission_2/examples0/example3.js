// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Memo",
    age: 6,
    nicknames: [
     "Panterita",
      "Pantera miniatura",
      "Guillermo"
    ],
    address: {
      zip_code: "01480",
      street: "Av centenario",
      city: "CDMX"
    }
  }
  console.log("Ejemplo 3: Objeto con diferentes propiedades")
  console.log(myObject3)
  console.log(myObject3.nicknames)
//   console.log(myObject3.address) Esta es otra forma de imprimir la direccion
  console.log(myObject3["address"])