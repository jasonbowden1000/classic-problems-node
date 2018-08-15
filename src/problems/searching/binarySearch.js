function binarySearch(arr, value) {
  let result = -1;
  let upper = arr.length - 1;
  let lower = 0;

  while (upper >= lower) {
    let middle = Math.floor((upper + lower) / 2);

    if (arr[middle] > value) {
      upper = middle - 1;
    } else if (arr[middle] < value) {
      lower = middle + 1;
    } else {
      result = middle;
      upper = middle - 1;
    }
  }

  return result;
}

module.exports = binarySearch;
