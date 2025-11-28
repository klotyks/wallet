console.log('a' === 'a')
console.log('a' !== 'a')
console.log('a' === 'b')
console.log('a' !== 'b')

function myFilter(array, cb) {
  let result = []
  for (const item of array) {
    item
    if (cb(item)) {
      item
      result.push(item)
    }
  }
  return result
}

let cars = ['Ferrari, Lamborghini', 'Bugatti']

cars = myFilter(cars, x => x !== 'Bugatti')

cars
