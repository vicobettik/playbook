const UserService = require('../../app/services/userService');

class UserView{
    static createUser(user){

        if (user == null) {
            return ({
                error: "payload no existe"
            });
        }

        if (Object.values(user).some( val =>  val == null )) {
            return ({
                error: "necesitan tener un valor válido"
            });
        }

        if (Object.values(user).length < 3) {
            return ({
                error: "necesitan tener un valor válido2"
            });
        }
        console.log(user);
        return UserService.create(user.id, user.username, user.name);

    }
}

module.exports = UserView;