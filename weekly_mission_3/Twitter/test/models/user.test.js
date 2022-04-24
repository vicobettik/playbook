const User = require('../../app/models/user')

describe('Unit test for User class', () => {
  
    test('Create an User object', () => {
      const user = new User(1, "vicobettik", "Victor", "Bio");

      expect(user.id).toBe(1)
      expect(user.username).toBe("vicobettik")
      expect(user.name).toBe("Victor")
      expect(user.bio).toBe("Bio")
      expect(user.dateCreated).not.toBeUndefined()
      expect(user.lastUpdate).not.toBeUndefined()
    });
    
    test('Add getters', () => {
      const user = new User(1, "vicobettik", "Victor", "Bio");
      expect(user.getUsername).toBe("vicobettik")
      expect(user.getBio).toBe("Bio")
      expect(user.getDateCreated).not.toBeUndefined()
      expect(user.getLastUpdate).not.toBeUndefined()
    });


    test('Add setters', () => {
      const user = new User(1, "vicobettik", "Victor", "Bio");
      user.setUsername = 'VICOBETTIK';
      expect(user.username).toBe('VICOBETTIK');

      user.setBio = "bio2";
      expect(user.bio).toBe("bio2");

    })
    

})
