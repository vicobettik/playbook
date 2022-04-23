const User = require('../../app/models/user')

describe('Unit test for User class', () => {
  
    test('Create an User object', () => {
      const user = new User(1, "vicobettik", "Victor", "Bio", "dateCreated", "lastUpdate");

      expect(user.id).toBe(1)
      expect(user.username).toBe("vicobettik")
      expect(user.name).toBe("Victor")
      expect(user.bio).toBe("Bio")
      expect(user.dateCreated).not.toBeUndefined()
      expect(user.lastUpdate).not.toBeUndefined()
    });
    

})
