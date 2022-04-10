class Pokemon {

  constructor(nombre) {
    this.nombre = nombre;
  }

  sayHello(){
    console.log(`Mi pokémon ${this.nombre} te saluda!!`);
  }

  sayMessage(message){
    console.log(`Mi pokémon ${this.nombre} dice ${message}!`);
  }

}

module.exports = Pokemon;