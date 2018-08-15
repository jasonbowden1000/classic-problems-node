const { isAlpha } = require('./../util.js');

function isPalindrome(word) {
  let i = 0;
  let j = word.length - 1;
  let result = true;

  while (!isAlpha(word.charAt(i)) && i < j) {
    ++i;
  }

  while (!isAlpha(word.charAt(j)) && i < j) {
    --j;
  }

  if (word.charAt(i).toLowerCase() !== word.charAt(j).toLowerCase()) {
    result = false;
  }

  return result;
}

module.exports = isPalindrome;
