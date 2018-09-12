function mergeSorted(arr1, arr2) {
  let merged = [];

  for (i = 0, j = 0; i < arr1.length || j < arr2.length;) {
    if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) {
      merged[i + j] = arr1[i++];
    } else {
      merged[i + j] = arr2[j++];
    }
  }

  return merged;
}

module.exports = mergeSorted;
