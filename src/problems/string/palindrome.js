const { isAlpha } = require('./../util.js');

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  let result = true;

  while (i < j) {
    while (!isAlpha(str.charAt(i)) && i < j) {
      ++i;
    }

    while (!isAlpha(str.charAt(j)) && i < j) {
      --j;
    }

    if (str.charAt(i).toLowerCase() !== str.charAt(j).toLowerCase()) {
      result = false;
    }

    ++i; --j;
  }

  return result;
}

module.exports = isPalindrome;
