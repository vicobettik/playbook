const Spiderman = require('../app/spiderman')

describe("Unit test for spiderman class", () => {

    test('1) Create an spiderman object', () => {
    
        const andrewGarfield = new Spiderman('Spiderman sony', 25, 'Andrew Garfield', 1, 'Marvel');
        expect(andrewGarfield.name).toBe('Spiderman sony'); 
        expect(andrewGarfield.age).toBe(25); 
        expect(andrewGarfield.actor).toBe('Andrew Garfield'); 
        expect(andrewGarfield.numberOfFilms).toBe(1); 
        expect(andrewGarfield.studio).toBe('Marvel'); 
        
    });

    test('2) Use the method getInfo', () => {
      const tomHolland = new Spiderman('Spiderman marvel', 20, 'Tom Holland', 5, 'Marvel');
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    })
    

  })