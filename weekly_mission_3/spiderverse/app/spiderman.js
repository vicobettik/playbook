class Spiderman {
    constructor(name, age, actor, numberOfFilms, study){
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.numberOfFilms = numberOfFilms;
        this.studio = study;
    }

    getInfo = function(){
        return `Hey, I'm ${this.actor} from ${this.studio} studio`;
    }
}

module.exports = Spiderman;