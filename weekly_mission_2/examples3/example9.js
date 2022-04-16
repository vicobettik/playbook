// Ejemplo  9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }
  
  console.log("Ejemplo  9: Herencia entre dos clases")
  const victorDev = new Developer("Victor", "c#", ["angular", "js", "python"])
  console.log(victorDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y reusar todos los componentes de la clase padre
  class LaunchXStudent extends Developer{
  }
  
  const victorLaunchXDev = new LaunchXStudent("Victor", "c#", ["angular", "js", "python"])
  console.log(victorLaunchXDev)
  console.log(victorLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija