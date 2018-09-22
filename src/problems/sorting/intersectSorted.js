function intersectSorted(a, b) {
  let i = 0;
  let j = 0;
  let intersection = [];

  while (i < a.length && j < b.length) {
    if (a[i] == b[j] && (i == 0 || a[i] != a[i - 1])) {
      intersection.push(a[i]);
      ++i;
      ++j;
    } else if (a[i] < b[j]) {
      ++i;
    } else {
      ++j
    }
  }

  return intersection;
}

module.exports = intersectSorted;
