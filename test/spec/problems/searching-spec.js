const expect = require('chai').expect;
const search = require('./../../../problems/searching');

console.log('what is search?');
console.log(search);

let binarySearchContext = (binarySearch) => {
  describe(`${binarySearch.name} search`, () => {
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

binarySearchContext(search.binary);
binarySearchContext(search.binaryGolfed);
