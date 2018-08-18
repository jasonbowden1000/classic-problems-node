const numberMap = new Map([
  ["I", {
    follow: [],
    repeat: true,
    value: 1
  }],
  ["V", {
    follow: [1],
    repeat: false,
    value: 5
  }],
  ["X", {
    follow: [1],
    repeat: true,
    value: 10
  }],
  ["L", {
    follow: [10],
    repeat: false,
    value: 50
  }],
  ["C", {
    follow: [10],
    repeat: true,
    value: 100
  }],
  ["D", {
    follow: [100],
    repeat: false,
    value: 500
  }],
  ["M", {
    follow: [100],
    repeat: true,
    value: 1000
  }]
]);

// no repeating, consecutively, or biconsecutively
function canRepeat(arr, i) {
  return arr[i].repeat || arr[i].value !== arr[i - 1].value;
}

function fourConsecutive(arr, i) {
    return arr[i].value === arr[i + 1].value &&
           arr[i].value === arr[i + 2].value &&
           arr[i].value === arr[i + 3].value;
}

function isRoman(romanNum) {
  let result = true;
  let nums = [...romanNum].map(l => numberMap.get(l));

  // also, check if character is valid
  // - isCharacterValid() - M, D, C, L, X, V, I
  // for now, just check if roman numeral is well-formed

  for (let i = nums.length - 1; i >= 0 && result; --i) {
    if (i > 0 && !canRepeat(nums, i)) {
      result = false;
    }

    if (i < nums.length - 3 && fourConsecutive(nums, i)) {
      result = false;
    }

    if (i < nums.length - 2) {
      if (nums[i].value < nums[i + 2].value) {
        result = false;
      }
      if (nums[i].value === nums[i + 2].value && !nums[i].repeat) {
        result = false;
      }
    }

    if (i < nums.length - 1 && nums[i].value < nums[i + 1].value) {
      if (!nums[i + 1].follow.includes(nums[i].value)) {
        result = false;
      } else if (i < nums.length - 2 && nums[i].value <= nums[i + 2].value) {
        result = false;
      }
    }
  }

  return result;
}

function romanToNumeric(romanNum) {
  return [...romanNum]
    .map(l => numberMap.get(l).value)
    .reduceRight((acc, curr, i, arr) => {
      return curr >= arr[i + 1] ? acc + curr : acc - curr;
    });
}

module.exports = { isRoman, romanToNumeric };
