const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

function judgeVegetable (vegArr, test) {
  let vegMet = 0;
  let winner = '';
  for (let i = 0; i < vegArr.length; i++) {
    if (vegArr[i][test] > vegMet) {
      vegMet = vegArr[i][test];
      winner = vegArr[i].submitter;
    }
  }
  return winner;
}

console.log(judgeVegetable(vegetables, 'redness'));