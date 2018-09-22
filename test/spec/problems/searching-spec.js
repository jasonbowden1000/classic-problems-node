const expect = require('chai').expect;
const searcher = require('./../../../src/problems/searching');

describe('Searcher', () => {
  describe('when performing a binary search on a sorted array', () => {
    var sortedArray;

    before(function() {
      sortedArray = [-13, -7, -7, 8, 8, 8, 8, 8, 8, 23, 33, 54, 91, 144, 1984, 1984, 2001];
    });

    it('should find an index for a given integer', () => {
      expect(searcher.binarySearch(sortedArray, 54)).to.equal(11);
      expect(searcher.binarySearch(sortedArray, 2001)).to.equal(16);
      expect(searcher.binarySearch(sortedArray, -13)).to.equal(0);
    });

    it('should find the first index of a given integer', () => {
      expect(searcher.binarySearch(sortedArray, -7)).to.equal(1);
      expect(searcher.binarySearch(sortedArray, 8)).to.equal(3);
    });

    it('should return -1 when no integer is found', () => {
      expect(searcher.binarySearch(sortedArray, 1)).to.equal(-1);
      expect(searcher.binarySearch(sortedArray, -20)).to.equal(-1);
      expect(searcher.binarySearch(sortedArray, 3000)).to.equal(-1);
    });

    it('should return -1 when given an empty array', () => {
      expect(searcher.binarySearch([], 5)).to.equal(-1);
    });
  });
});
