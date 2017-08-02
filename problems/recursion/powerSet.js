function powerSet(a) {
  return getSubsets(a);
}

/*
 * An element is either in or not in a subset of the power set
 */
function powerSetViaBits(a) {
  let powerSetSize = 1 << a.length;
  let allSubsets = [];

  for (let i=0; i < powerSetSize; ++i) {
    let subset = [];

    i.toString(2).split('').forEach((bit, index) => {
      if (bit === '1') {
        subset.push(a[index]);
      }
    });

    allSubsets.push(subset);
  }

  return allSubsets;
}

/*
 * This function works by
 * - Picking the final element recursively
 * - Generating the final element and the empty set, as the base case
 * - Returning the union of the set and the set with the final element pushed to each element
 *
 * Example: ['a', 'b', 'c']
 *   'c' returns [['c'], []]
 *   'b' + [['c'], []] returns [['c'], []] and [['c', 'b'], ['b']], which is [[], ['b'], ['c'], ['b', 'c']]
 *   etc.
 */
function getSubsets(a) {
  let arr = clone(a);
  let allSubsets = [];

  if (arr.length === 0) {
    allSubsets.push([]);
  } else {
    let item = arr.pop();
    let subsets = getSubsets(arr);
    let clonedSubsets = clone(subsets);

    clonedSubsets.forEach(subset => subset.push(item));

    allSubsets = subsets.concat(clonedSubsets);
  }

  return allSubsets;
}

// Challenge:
// - power set with duplicates

function clone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

module.exports = { powerSet, powerSetViaBits };