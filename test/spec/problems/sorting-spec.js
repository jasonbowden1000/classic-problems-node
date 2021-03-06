const expect = require('chai').expect;
const sorter = require('./../../../src/problems/sorting');

describe('Sorter', () => {
  describe('when computing the intersection of two sorted arrays', () => {
    it('should return a sorted array free of duplicates', () => {
      let arr1 = [2, 2, 3, 3, 5, 5, 6, 7, 7, 8, 12];
      let arr2 = [2, 2, 2, 2, 5, 6, 6, 8, 8, 9, 10, 10];
      let intersection = [2, 5, 6, 8];
      expect(sorter.intersectSorted(arr1, arr2)).to.eql(intersection);
    });
  });
  describe('when merging two sorted arrays', () => {
    it('should return an ordered array with no missing elements', () => {
      let arr1 = [5, 13, 17];
      let arr2 = [3, 7, 11, 19];
      let merged = [3, 5, 7, 11, 13, 17, 19];
      expect(sorter.mergeSorted(arr1, arr2)).to.eql(merged);
      expect(sorter.mergeSorted(arr2, arr1)).to.eql(merged);
      expect(sorter.mergeSorted(arr1, arr2)).to.not.eql([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should return an ordered array when given duplicate elements', () => {
      let arr1 = [5, 5, 6, 13, 13, 13, 17];
      let arr2 = [3, 6, 7, 11, 19, 19];
      let merged = [3, 5, 5, 6, 6, 7, 11, 13, 13, 13, 17, 19, 19];
      expect(sorter.mergeSorted(arr1, arr2)).to.eql(merged);
      expect(sorter.mergeSorted(arr2, arr1)).to.eql(merged);
      expect(sorter.mergeSorted(arr1, arr2)).to.not.eql([3, 5, 6, 7, 11, 13, 17, 19]);
    });
  });
});
