const UserView = require('../../app/views/userView')

describe('Test for UserView', () => {
  
    test('Return an error object when try to create a new user with null payload', () => {
      const payload = null;
      const result = UserView.createUser(payload);
      expect(result.error).toMatch(/payload no existe/)
    });

    test('Return an error object when try to create a new user with a payload with invalid properties', () => {
      
        const payload = {username: null, name: 12, id: "id"};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/)

    })
    
    test('Return an error object when try to create a new user with a payload with missing properties', () => {
      
        const payload = {username: 'victor'};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido2/);

    })

    test('Create a user by a given valid payload', () => {
      
        const payload = {username: 'vicobettik', id: 1, name:"victor"};
        const result = UserView.createUser(payload);
        expect(result.name).toBe('victor')
        expect(result.username).toBe('vicobettik')
        expect(result.id).toBe(1)


    })
    
    

})
