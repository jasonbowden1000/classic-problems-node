/*
 * Binary Search
 *
 * Insights:
 * - use middle to control how to navigate through the array
 * - when we find a match, we store the value and walk a step backwards (possible duplicates, looking for 1st)
 * - let the iteration self-terminate --  O(log n) complexity -- when lower gets the upper hand
 * - if the search overshoots, it will reduce the interval against the direction of the miss
 */
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
