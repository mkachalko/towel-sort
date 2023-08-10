
// You should implement your task here.

module.exports = function towelSort (matrix) {

  const arr = [];

  if (matrix === undefined) {
    return arr;
  }

  matrix.forEach((array, index) => {
    if(index % 2 != 0) {
      array.reverse();
    }

    arr.push(...array);
  });

  return arr;
}
