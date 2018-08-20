const romanMap = new Map([
  ["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40], ["L", 50],
  ["XC", 90], ["C", 100], ["CD", 400], ["D", 500], ["CM", 900], ["M", 1000]
]);

function isRoman(n) {
  return /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(n);
}

function arabicToRoman(num) {
  let roman = '';
  let pairs = Array
    .from(romanMap)
    .map(([k, v]) => ({ arabic: v, roman: k }))
    .reverse();

  for (let obj of pairs) {
    while (num >= obj.arabic) {
      roman = roman + obj.roman;
      num -= obj.arabic;
    }
  }

  return roman;
}

function romanToArabic(romanNum) {
  return [...romanNum]
    .map(l => romanMap.get(l))
    .reduceRight((acc, curr, i, arr) => {
      return curr >= arr[i + 1] ? acc + curr : acc - curr;
    });
}

module.exports = { isRoman, arabicToRoman, romanToArabic };
