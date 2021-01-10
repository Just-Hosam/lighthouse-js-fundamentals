function range (start, end, step) {
  let newArr = [];
  if (start > end || step < 0) {
    return newArr;
  } else {
    while (start <= end) {
      newArr.push(start);
      start += step;
    }
  }
  return newArr;
}

console.log(range(-5, 2, 3));