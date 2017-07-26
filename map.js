var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
]

function getName(animal) {
  return (animal.name)
}

// var names = animals.map(function(animal) {
//   return animal.name
// })

// var names = animals.map(getName)

var names = animals.map((animal) => animal.name)

// trivial version of the arrow function!!
// var names = animals.map(() => 'hi karate')

console.log(names)
