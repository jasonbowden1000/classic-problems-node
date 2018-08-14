const expect = require('chai').expect;
const math = require('./../../../problems/math');

let binarySearchContext = (binarySearch) => {
  describe(binarySearch.name, () => {
    var sortedArray;

    before(function() {
      sortedArray = [-13, -7, -7, 8, 8, 8, 8, 8, 8, 23, 33, 54, 91, 144, 1984, 1984, 2001];
    });

    it('should find the index of a given integer in a sorted array', () => {
      expect(binarySearch(sortedArray, 54)).to.equal(11);
      expect(binarySearch(sortedArray, 2001)).to.equal(16);
      expect(binarySearch(sortedArray, -13)).to.equal(0);
    });

    it('should find the first index of a given integer in a sorted array', () => {
      expect(binarySearch(sortedArray, -7)).to.equal(1);
      expect(binarySearch(sortedArray, 8)).to.equal(3);
    });

    it('should return -1 when no integer is found', () => {
      expect(binarySearch(sortedArray, 1)).to.equal(-1);
      expect(binarySearch(sortedArray, -20)).to.equal(-1);
      expect(binarySearch(sortedArray, 3000)).to.equal(-1);
    });

    it('should return -1 when given an empty array', () => {
      expect(binarySearch([], 5)).to.equal(-1);
    });
  });
};

binarySearchContext(math.binarySearch);
binarySearchContext(math.binarySearchGolfed);

describe('Reverse digits', () => {
  it('should return a number in reverse order', () => {
    expect(math.reverseDigits(4242)).to.equal(2424);
  });

  it('should preserve the sign of reversed digits', () => {
    expect(math.reverseDigits(-314)).to.equal(-413);
  });

  it('should not return octals for numbers that end in zero', () => {
    expect(math.reverseDigits(2220)).to.equal(222);
  });
});
