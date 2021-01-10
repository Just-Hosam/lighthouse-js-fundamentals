const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition (movesArr) {
  let position = [0, 0];
  for (let move of movesArr) {
    switch (move) {
      case 'north':
        position[1]++;
        break;
      case 'south':
        position[1]--;
        break;
      case 'east':
        position[0]++;
        break;
      case 'west':
        position[0]--;
        break;
    }
  }
  return position;
}

console.log(finalPosition(moves));