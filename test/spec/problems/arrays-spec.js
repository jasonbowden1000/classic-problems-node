const expect = require('chai').expect;
const arrays = require('./../../../src/problems/arrays');

describe('Arrays', () => {
  describe('when given a number of rows', () => {
    it('should generate Pascal\'s triangle in a two-dimensional array', () => {
      let zeroRowedTriangle = [[1]];
      let oneRowedTriangle = [[1], [1, 1]];
      let twoRowedTriangle = [[1], [1, 1], [1, 2, 1]];
      let threeRowedTriangle = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
      let fourRowedTriangle = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
      let fiveRowedTriangle = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]];
      expect(arrays.pascalTriangle(0)).to.eql(zeroRowedTriangle);
      expect(arrays.pascalTriangle(1)).to.eql(oneRowedTriangle);
      expect(arrays.pascalTriangle(2)).to.eql(twoRowedTriangle);
      expect(arrays.pascalTriangle(3)).to.eql(threeRowedTriangle);
      expect(arrays.pascalTriangle(4)).to.eql(fourRowedTriangle);
      expect(arrays.pascalTriangle(5)).to.eql(fiveRowedTriangle);
    });
  });
  describe('when given the nth row', () => {
    it('should return the appropriate row of Pascal\'s triangle', () => {
      let rowZero = [1];
      let rowOne = [1, 1];
      let rowTwo = [1, 2, 1];
      let rowThree = [1, 3, 3, 1];
      let rowFour = [1, 4, 6, 4, 1];
      let rowFive = [1, 5, 10, 10, 5, 1];
      expect(arrays.pascalRow(0)).to.eql(rowZero);
      expect(arrays.pascalRow(1)).to.eql(rowOne);
      expect(arrays.pascalRow(2)).to.eql(rowTwo);
      expect(arrays.pascalRow(3)).to.eql(rowThree);
      expect(arrays.pascalRow(4)).to.eql(rowFour);
      expect(arrays.pascalRow(5)).to.eql(rowFive);
    });
  });
});
