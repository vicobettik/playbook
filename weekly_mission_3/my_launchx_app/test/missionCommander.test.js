const MissionCommander = require('../app/missionCommander')
const missionComander = require('../app/missionCommander')

describe('1) Create a mission commander object', () => {
  
    test('Caso de prueba 1', () => {
      const myMissionCommander = new MissionCommander('Victor');
      expect(myMissionCommander.name).toBe('Victor');
    })
    

})
