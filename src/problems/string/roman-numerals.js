const numberMap = new Map([
  ["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40], ["L", 50],
  ["XC", 90], ["C", 100], ["CD", 400], ["D", 500], ["CM", 900], ["M", 1000]
]);

function isRoman(romanNum) {
  return /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(romanNum);
}

function arabicToRoman(num) {
  let romanNum = '';
  let divisorMap = Array.from(numberMap).map(([k, v]) => {
    return { arabic: v, roman: k }
  }).reverse();

  for (let obj of divisorMap) {
    while (num >= obj.arabic) {
      romanNum = romanNum + obj.roman;
      num -= obj.arabic;
    }
  }

  return romanNum;
}

function romanToArabic(romanNum) {
  return [...romanNum]
    .map(l => numberMap.get(l))
    .reduceRight((acc, curr, i, arr) => {
      return curr >= arr[i + 1] ? acc + curr : acc - curr;
    });
}

module.exports = { isRoman, arabicToRoman, romanToArabic };
