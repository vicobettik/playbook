class User{

    constructor(id, username, name, bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdate = new Date();
    }

    get getUsername() {
        return this.username;
    }

    get getBio(){
        return this.bio;
    }

    get getDateCreated() {
        return this.dateCreated;
    }

    get getLastUpdate() {
        return this.lastUpdate;
    }

    set setUsername(newUserName){
        this.username = newUserName;
    }

    set setBio(newBio){
        this.bio = newBio;
    }

}

module.exports = User;