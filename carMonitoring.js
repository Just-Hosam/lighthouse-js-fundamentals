const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

function carPassing(carArr, carSpeed) {
  let newEntry = {
    time: Date.now(),
    speed: carSpeed
  }
  carArr.push(newEntry);
  return carArr;
}

console.log(carPassing(cars, 69));