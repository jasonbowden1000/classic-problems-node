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

module.exports = { reverseDigits };
