
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (Array.isArray(matrix) && matrix.length > 0) {

    let s = '';
    matrix.forEach((ar, idx) => {
      if (!(idx & 1)) {
        s += idx > 0 ? ',' + ar.toString() : ar.toString();
      } else {
        s += ',' + ar.reverse().toString();
      }
    });

    return s.split(',').map(Number);
  }

  return [];
}
