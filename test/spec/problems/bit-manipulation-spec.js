const expect = require('chai').expect;
const bitManipulator = require('./../../../src/problems/bit-manipulation');

describe('bitManipulator', () => {
  describe('swaps digits', () => {
    it('when given a number and two bit locations', () => {
      expect(bitManipulator.swap(6, 0, 1)).to.equal(5);
      expect(bitManipulator.swap(6, 2, 3)).to.equal(10);
    });
  });
});
