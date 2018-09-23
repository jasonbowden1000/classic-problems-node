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
  })
});
