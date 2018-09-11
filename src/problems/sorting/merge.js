function merge(sortedArray1, sortedArray2) {
  let merged = [];

  for (i = 0, j = 0; i < sortedArray1.length || j < sortedArray2.length;) {
    merged[i + j] = sortedArray1[i] < sortedArray2[j] ? sortedArray1[i++] : sortedArray2[j++];
  }

  return merged;
}

module.exports = merge;
