let { binarySearch } = require('./../searching');

function findIntersectionOfSorted(arr1, arr2) {
  return arr1.filter((el, i, arr1) => {
    return (i === 0 || arr1[i] !== arr1[i - 1]) && binarySearch(arr2, arr1[i]) > -1;
  });
}

module.exports = findIntersectionOfSorted;
