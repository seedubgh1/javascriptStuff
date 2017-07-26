var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
]

function isDog(animal) {
  return (animal.species === 'dog')
}
// dogs = animals.filter(function(animal) {
//   return animal.species === 'dog'

// var dogs = animals.filter(isDog)
// var dogs = animals.filter((animal) => animal.species === 'dog')
var dogs = animals.filter((animal) => isDog(animal))

console.log(dogs);
