function isPalindrome(str) {
  let letters = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  return letters === letters.split('').reverse().join('');
}

module.exports = isPalindrome;
