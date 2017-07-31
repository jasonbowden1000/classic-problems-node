const expect = require('chai').expect;
const bitManipulator = require('./../../problems/bit-manipulation');

describe('bitManipulator', () => {
  describe('swaps digits', () => {
    it('when given a number and two bit locations', () => {
      let num = 6;
      let positionOfBitA = 0;
      let positionOfBitB = 1;

      expect(bitManipulator.swap(num, positionOfBitA, positionOfBitB)).to.equal(5);
      expect(bitManipulator.swap(num, positionOfBitA, positionOfBitA)).to.equal(num);
    });
  });
});
