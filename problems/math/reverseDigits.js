function reverseDigits(n) {
  let r = 0;

  while (n) {
    r = r * 10 + n % 10;
    n = Math.trunc(n / 10);
  }

  return r;
}

module.exports = { reverseDigits };
