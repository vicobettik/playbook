// -------------------------------------------------------------
// 1. Creacion de un objeto con propiedades

let myCar = new Object(); //creacionde un objeto
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar)  //imprimir el objeto en la consola


// -------------------------------------------------------------
// 2. Declaracion de un objeto con variables locales y públicas


const myModule = () => {

    // contexto local
    const privateFoo = 'Soy un valor privado, solo me usan dentro de este objeto';
    const privateBar = [1, 2, 3, 4]
    const baz = 'Soy un valor que va a ser expuesto';

    //variable para guardar las variables que van a ser expuestas
    const exported = {
        publicFoo: 'Valor públic, pueden verme desde donde me llamen',
        publicBar: 'Otro valor público',
        publicBaz: baz
    }
    // Exposicion de variables seleccionadas
    return exported;

}

// impresion del llamado de myModule
console.log(myModule());
