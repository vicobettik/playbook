const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

explorers.forEach( (explorer) => {
    console.log(explorer.name)
});  

console.log('******************************')

explorers.forEach( (explorer) => {
    console.log(explorer.name)
    explorer.stack.forEach( (stack) => {
        console.log(stack)
    })
})

console.log('******************************')

const listaStacks = explorers.map( (explorer) => {
    return explorer.stack
});  
console.log(listaStacks);

console.log('******************************')

const listExplorersWithJS = explorers.filter( (explorer) => {
    return explorer.stack.includes("js")
});

console.log(listExplorersWithJS);

console.log('******************************')

const firstExplorerInCDMX = explorers.find( (explorer) => {
    return explorer.city.toUpperCase() == 'CDMX'
});

console.log(firstExplorerInCDMX);

console.log('******************************')

const totalExercisesFinished = explorers.reduce( (total, explorer) => total + explorer.exercises_completed, 0)

console.log(totalExercisesFinished);

console.log('******************************')

const someExplorerExerciseFinished = explorers.some( (explorer) => {
    explorer.missions.frontend.isFinished === true;
})

console.log(someExplorerExerciseFinished);

console.log('******************************')

const everyExplorerExerciseFinishedBoarding = explorers.every( (explorer) => {
    explorer.missions.onboarding.isFinished === true;
})

console.log(everyExplorerExerciseFinishedBoarding);