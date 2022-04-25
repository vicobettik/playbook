const User = require('../../app/models/user');
const UserService = require('../../app/services/userService');

describe('Tests for UserService', () => {
  
    test('1) Create a new user using the method in userService', () => {
      
        const user = UserService.create(1, "vicobettik", "Victor");
        expect(user.username).toBe("vicobettik");
        expect(user.name).toBe("Victor");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();

    })
    
    test('2) Get all user data in a list', () => {
        const user = UserService.create(1, "vicobettik", "Victor");
        const userInfoInList = UserService.getInfo(user);

        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("vicobettik");
        expect(userInfoInList[2]).toBe("Victor");
        expect(userInfoInList[3]).toBe("sin bio");
    })

    
    test('3)Update username', () => {
      
        const user = UserService.create(1, "vicobettik", "Victor");
        UserService.UpdateUsername(user, "leetsu");
        expect(user.username).toBe('leetsu');

    })
    
    test('4) Given a list of users, return a list of usernames', () => {
        const user1 = UserService.create(1, "vicobettik1", "victor1");
        const user2 = UserService.create(2, "vicobettik2", "victor2");
        const user3 = UserService.create(3, "vicobettik3", "victor3");
        const usernames = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernames).toContain('vicobettik1')
        expect(usernames).toContain('vicobettik2')
        expect(usernames).toContain('vicobettik3')
    })
    

})
