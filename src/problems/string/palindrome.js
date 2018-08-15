const { isAlpha } = require('./../util.js');

function isPalindrome(word) {
  let i = 0;
  let j = word.length - 1;
  let result = true;

  while (i < j) {
    while (!isAlpha(word.charAt(i)) && i < j) {
      ++i;
    }

    while (!isAlpha(word.charAt(j)) && i < j) {
      --j;
    }

    if (word.charAt(i).toLowerCase() !== word.charAt(j).toLowerCase()) {
      result = false;
    }

    ++i; --j;
  }

  return result;
}

module.exports = isPalindrome;
