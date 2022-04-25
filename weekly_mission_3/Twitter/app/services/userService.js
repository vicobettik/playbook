const User = require('../models/user')

class UserService{
    
    static create(id, username, name){
        return new User(id, username, name, "sin bio");
    }

    static getInfo(user){
        let arrayInfo = [];
        arrayInfo.push(user.id);
        arrayInfo.push(user.username);
        arrayInfo.push(user.name);
        arrayInfo.push(user.bio);

        return arrayInfo;
    }

    static UpdateUsername(user, newUsername){
        user.username = newUsername;
    }

    static getAllUsernames(users){
        let usernames = [];
        users.forEach( (user) => {
            usernames.push(user.username);
        });

        return usernames;
    }

}

module.exports = UserService;