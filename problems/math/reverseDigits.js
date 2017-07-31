/*
 * Reverse Digits
 *
 * - Pop off the rightmost digit by dividing by 10 and taking the floor
 * - Cumulatively add rightmost digits to the left by adding to the previous operation multiplied by ten
 */
function reverseDigits(num) {
  let isNegative = num < 0;
  let result = 0;
  let remaining = Math.abs(num);

  while (remaining) {
    result = result * 10 + remaining % 10;
    remaining = Math.floor(remaining / 10);
  }

  return isNegative ? -result : result;
}

function bruteForceReverseDigits(num) {
  let numAsString = num.toString().split('');
  let sign = numAsString[0] === '-' ? numAsString.shift() : '';

  numAsString.reverse();

  if (sign) {
    numAsString.unshift(sign);
  }

  return parseInt(numAsString.join(''));
}

module.exports = { reverseDigits, bruteForceReverseDigits };